import cv2
from PIL import Image
import os
import time

def grab_frame(directory="saved_images"):
    # Open a connection to the webcam (usually, 0 is the built-in webcam)
    cap = cv2.VideoCapture(0)

    # Check if the webcam is opened successfully
    if not cap.isOpened():
        print("Error: Unable to access the webcam.")
        return None

    # Read a frame from the webcam
    time.sleep(0.75)
    ret, frame = cap.read()

    # Release the webcam connection
    cap.release()

    # Check if the frame was successfully read
    if not ret:
        print("Error: Unable to read frame from the webcam.")
        return None

    # Convert the OpenCV frame to RGB (PIL uses RGB)
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Create a PIL image from the RGB frame
    pil_img = Image.fromarray(frame_rgb)

    # Create the directory if it doesn't exist in the current working directory
    if not os.path.exists(directory):
        os.makedirs(directory)

    # Define the file path to save the image in the current directory's 'saved_images' subdirectory
    file_path = os.path.join(directory, "webcam_frame.jpg")

    # Save the PIL image to the specified file path
    pil_img.save(file_path)

    print(f"Saved image to {file_path}")

    return file_path
