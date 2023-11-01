from gpt4 import gpt4_call
from hf_call import hf_call

def food_pipeline(img, url = "", api_up=True):
    if api_up:
        desc = hf_call( url ,image_path = img, prompt = "Describe the food in this image, include detail about the number of certian foods and the portion size")
    else: 
        desc = "a plate full of mac and cheese with a side of fries"

    # Pass in the MultiModal LLM output to a textual LLM
    gpt4_prompt =f"""
    These are the details about the food:

    {desc}

    Return estimates of the following nutrients in this format do NOT say anything else. Only return this JSON format despite it only being an estimation:
    """ + """
    {"Short Name of Meal" : "STR", "Protein(Grams)" : "INT", "Fat(Grams)" : "INT", "Carbohydrates(Grams)" : "INT", "Calories" : "INT", "Cholesterol(mg)" : "INT", "Sodium(mg)" : "INT"}
    """

    res = gpt4_call(gpt4_prompt)

    return res, desc
