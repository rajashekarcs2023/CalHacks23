from gradio_client import Client
import json
import subprocess


def hf_call(url, prompt = "what is this", image_path = "/Users/sunnyjay/Documents/vscode/Hackathon/AI_Watch/Server/server_code/Screenshot 2023-07-27 at 2.15.52 PM.png"):
    if not url.startswith("http"):
        url = "https://sjayaram-llava.hf.space/--replicas/" + url

    client = Client(url, hf_token='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')
    result = client.predict(
            # "../CLIP/food2.jpg",
            image_path,
            f'''
            [
                ["USER", "{prompt}" ]
            ]
            ''',
            api_name="/predict"
    )
    # result is a path to a JSON file, open it an read it
    result = json.loads(open(result).read())['label']
    print(result)
    return result

