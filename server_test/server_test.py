import requests
from grab_frame import grab_frame

url = 'http://0.0.0.0:8000/upload_image'

file = "/Users/sunnyjay/Documents/vscode/Hackathon/Calhacks10/JS-CalHacks-Fa23/server_code/webcam_frame.jpg"
# file = "/Users/sunnyjay/Downloads/Screenshot 2023-10-28 at 5.25.02 PM.png"

# Define the file you want to upload
# files = {"file": open(grab_frame(), "rb")}
files = {"file": open(file, "rb")}

# Make a POST request with the file
response = requests.post(url, files=files)

# Check the response
data = response.json()
print(data)

url = 'http://0.0.0.0:8000/advice'

# Define the JSON input data
# input_data ={'Protein(Grams)': '40', 'Fat(Grams)': '60', 'Carbohydrates(Grams)': '125', 'Calories': '1200', 'Cholesterol(mg)': '100', 'Sodium(mg)': '1500', 'img_url': 'https://storage.googleapis.com/turing-emitter-367107.appspot.com/calhacks10/vmDW6wxBtcGLPiALDBnV/1698528799', 'desc': 'a full plate of veggie salads'}


def main():
    response = requests.post(url, json=data)

    if response.status_code == 200:
        result = response.json()
        print("Advice received:", result)
    else:
        print(f"Error: {response.status_code}")
        print("Response content:", response.text)

if data.get("Calories"):
    main()

