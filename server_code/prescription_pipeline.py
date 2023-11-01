from azure_ocr import *
from gpt4 import *
input1 = "/Users/jssaik/Documents/GitHub/JS-CalHacks-Fa23/server_code/images/JS-Presc-2.jpg"

# image must be a path (not python image object)
def prescription_pipeline(image):
    temp = ocr(image)

# passing in the pill bottle OCR to the LLM
    prompt1 = f"""
        This is the OCR text from a pill bottle:

        {temp}

        Return the following fields collected from the above OCR text in this format:
        """ + """
        { "Drug Name" : "STR", "Drug Dosage(Pills/Capsules)" : "INT" or "?", "Dose Frequency(Per Day)" : "INT" or "?", "Extra Notes" : "STR" or "None"}
        """
    fin = gpt4_call(prompt1)

    return fin

# drugJson(input1)