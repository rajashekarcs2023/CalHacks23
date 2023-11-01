from gpt4 import gpt4_call
from firebase_db import get_intakes, update_latest_food_with_advice

def food_advice(input_json):
    intakes = get_intakes()
    nutrient_totals = {
    "Protein(Grams)": 0,
    "Fat(Grams)": 0,
    "Carbohydrates(Grams)": 0,
    "Calories": 0,
    "Cholesterol(mg)": 0,
    "Sodium(mg)": 0
    }

    food = intakes.get('food', [])
    if food != []:
        food.pop()

    for entry in food:
        for nutrient in nutrient_totals:
            value = entry.get(nutrient, 0)
            # Convert the value to a float and add it to the total
            nutrient_totals[nutrient] += float(value)

    food_descriptions = []

# Extract descriptions from 'food'
    for item in food:
        description = item.get('desc')
        if description:
            food_descriptions.append(description)

    medications = [med.get('Drug Name') for med in intakes.get('meds', []) ]
    
    # things we want to take into account for the advice:
    # previous calroie totals, previous food intakes, medication intake, desc of current food, calories of current food
    cur_desc = input_json['desc']
    input_json.pop('desc')

    prompt = f"""
    Give 3-4 sentences of advice for a new meal based on this information about foods I've already ate and medicaitons im on:

    Foods I've eaten: {food_descriptions}

    Nutrient Totals for today: {nutrient_totals}

    Medications I'm on: {medications}

    Current Food That I'm Considering Eating: {cur_desc}
    
    """
    res = gpt4_call(prompt)
    print(res)

    update_latest_food_with_advice(res)

    return res


def context_question(question):
    intakes = get_intakes()
    nutrient_totals = {
    "Protein(Grams)": 0,
    "Fat(Grams)": 0,
    "Carbohydrates(Grams)": 0,
    "Calories": 0,
    "Cholesterol(mg)": 0,
    "Sodium(mg)": 0
    }

    food = intakes.get('food', [])

    for entry in food:
        for nutrient in nutrient_totals:
            value = entry.get(nutrient, 0)
            # Convert the value to a float and add it to the total
            nutrient_totals[nutrient] += float(value)

    food_descriptions = []

# Extract descriptions from 'food'
    for item in food:
        description = item.get('desc')
        if description:
            food_descriptions.append(description)

    medications = [med.get('Drug Name') for med in intakes.get('meds', []) ]
    
    # things we want to take into account for the advice:
    # previous calroie totals, previous food intakes, medication intake, desc of current food, calories of current food

    prompt = f"""
    Foods I've eaten: {food_descriptions}

    Nutrient Totals for today: {nutrient_totals}

    Medications I'm on: {medications}

    Answer this question using the above information as context, pay special attention to medications that spesifically lower
    a certian nutrient, respond in 2-3 sentences: {question}
    
    """
    res = gpt4_call(prompt)
    print(res)

    return res


# context_question('Give me general food advice based on the medications im taking')