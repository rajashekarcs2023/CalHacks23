import json
import os
import sys
import requests
import time
# If you are using a Jupyter Notebook, uncomment the following line.
# %matplotlib inline
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon
from PIL import Image
from io import BytesIO

from dotenv import load_dotenv
load_dotenv()


subscription_key = os.environ["AZURE_KEY"]
endpoint = "https://openrx.cognitiveservices.azure.com/"

# Set the API endpoint and subscription key
api_url = f"{endpoint}computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=read"

# Set the request headers
headers = {
    "Ocp-Apim-Subscription-Key": subscription_key,
    "Content-Type": 'application/octet-stream'
}

def ocr(image_path):

# '/Users/sunnyjay/Documents/vscode/Hackathon/AI_Watch/Server/server_code/Screenshot 2023-07-27 at 2.15.52 PM.png'

    # Replace 'YOUR_LOCAL_IMAGE_FILE' with the path to your local image file

    # Open the image file and read its content
    with open(image_path, 'rb') as image_file:
        image_data = image_file.read()

    # Make the POST request
    response = requests.post(api_url, headers=headers, data=image_data)

    def extract_text(json_data):
        data = json.loads(json_data)
        text = ''
        for page in data['readResult']['pages']:
            for line in page['lines']:
                text += line['content'] + '\n'
        return text
    # Check the response status code
    if response.status_code == 200:
        result = response.json()
        print("OCR was successful. Response:")
        print()
        print(extract_text(json.dumps(result, indent=4)))
    else:
        print(f"Request failed with status code {response.status_code}.")
        print("Response content:")
        print(response.text)

    return extract_text(json.dumps(result, indent=4))

