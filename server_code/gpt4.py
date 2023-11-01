import os
import openai

from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.environ["OPENAI_KEY"]

def gpt4_call(prompt):

# = "hello, this is a test"

    response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {
        "role": "user",
        "content": prompt
        }
    ],
    temperature=1,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )

    print(response['choices'][0]['message']['content'])
    
    return response['choices'][0]['message']['content']

