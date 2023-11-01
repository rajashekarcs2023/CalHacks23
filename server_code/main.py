from fastapi import FastAPI
from fastapi import FastAPI, File, UploadFile
import os
import uvicorn
import json
import time

from azure_ocr import ocr
from gpt4 import gpt4_call
from clip_test import CLIPClassifier 
from food_pipeline import food_pipeline
from prescription_pipeline import prescription_pipeline
from firebase_db import update_intakes, upload_img_blob
from food_advice import food_advice, context_question
from inter_systems import get_inter_systems

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
classifier = CLIPClassifier()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (you can also specify specific origins)
    allow_credentials=False,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)



@app.post("/upload_image")
async def upload_image(file: UploadFile):
    file_path = os.path.join(os.getcwd(), file.filename)
    with open(file_path, "wb") as image_file:
        image_file.write(await file.read())

        classes = ["prescription bottle, medication, medicine bottle, doctors note", "food, fruit, vegetable, plate"]

        probs = classifier.classify(file_path, classes)

        # we want the text value of the class with the highest probability
        inferred_class = classes[probs.argmax()]

        print(inferred_class)

        def decode_json_str(json_str):
            print(json_str)
            try:
                decoded_json = json.loads(json_str)
            except json.JSONDecodeError:
                print('JSON PARSE ERROR (Malformed JSON from GPT-4 or Human')
                decoded_json = {"malformed": "True"}
            return decoded_json


        if inferred_class == "prescription bottle, medication, medicine bottle, doctors note":
            # call prescription pipeline
            json_str = prescription_pipeline(file_path)
            decoded = decode_json_str(json_str)
            url = upload_img_blob(file_path)
            decoded.update({"img_url": url})
            update_intakes(decoded)
            return decoded
        else:
            # call food pipeline
            json_str, desc = food_pipeline(file_path, url = "496g7", api_up=True)
            decoded = decode_json_str(json_str)
            url = upload_img_blob(file_path)
            decoded.update({"img_url": url, "desc": desc})
            update_intakes(decoded)
            return decoded

@app.post("/advice")
# dict must include a field called dict
async def get_advice(input_data: dict):
    print(input_data)
    return food_advice(input_data)
@app.post("/question")
# dict must include a field called dict
async def get_advice(input_data: dict):
    print(input_data)
    return context_question(input_data)


@app.get("/dashboard")
async def get_dashboard():
    return get_inter_systems()

@app.get("/")
async def root():
    return {"message": "Hello World"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)