from PIL import Image
from transformers import CLIPProcessor, CLIPModel

class CLIPClassifier:
    def __init__(self):
        self.model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
        self.processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

    def classify(self, image_path, classes):
        # classes is a list of class names
        image = Image.open(image_path)

        # class1 = "prescription bottle, medication, medicine bottle"
        # class2 = "food, fruit, vegetable, plate"

        inputs = self.processor(text = classes, images=image, return_tensors="pt", padding=True)

        outputs = self.model(**inputs)

        logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
        probs = logits_per_image.softmax(dim=1)

        # print(image_path)
        # print(f'{class1}: {probs[0,0].item():.2f}')
        # print(f'{class2}: {probs[0,1].item():.2f}')

        return probs
