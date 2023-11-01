import json
def decode_json_str(json_str):
            print(json_str)
            try:
                decoded_json = json.loads(json_str)
            except json.JSONDecodeError:
                print('JSON PARSE ERROR (Malformed JSON from GPT-4 or Human')
                decoded_json = {"malformed": "True"}
            return decoded_json
str = '{ "Protein(Grams)" : "21", "Fat(Grams)" : "60", "Carbohydrates(Grams)" : "110", "Calories" : "937", "Cholesterol(mg)" : "115", "Sodium(mg)" : "1205"}'
print(decode_json_str(str))