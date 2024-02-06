## Inspiration
This project came to us when one of our teammates mentioned his grandma struggling to keep track of her cholesterol and the medications she was taking to lower it. We realized that to help alleviate this, we would need to approach the problem from both sides.

High blood cholesterol causes **4.4 million** deaths each year (World Heart Federation, 2019), and other nutrient deficiencies and surplusses take many more. By leveraging new multimodal LLMs, we set out to solve this complex and multi-faceted problem.

## What it does

MultiMed Vision+ allows users to track both their medications and nutrients with the snap of a picture. It then uses the information scanned by the user to generate advice in the context of the user's current health situation. MultiMed Vision+ integrates with our Raspberry Pi "watch", desktop app, and mobile app, easing access and user-friendliness for this demographic. 

The project comprises several key components, including:

Integration of Prescription and Nutrition Data:
Incorporating scanned prescriptions and food items to provide personalized recommendations based on individual health contexts.
Analyzing prescription data to offer tailored health advice and reminders related to medication adherence.

Smartwatch Integration: 
Facilitating easy access to health data without the need for a smartphone.
Streamlining the monitoring of vital health indicators for elderly individuals.

User-Friendly Interface:
Designing an intuitive and straightforward interface specifically tailored to the needs of older users.
Offering clear and concise advice on dietary choices and providing real-time health monitoring.

Real-Time Sensor Data Analysis:
Utilizing machine learning models integrated with real-time sensor data to predict the risk of heart attacks.
Providing timely alerts and notifications to both the user and their family members, enabling proactive health management and intervention.

## How we built it
Our project is split into a frontend and a backend stack. Our front end includes all of our UI/UX designs, and it utilizes Next.js + Typescript to build a UI design. It has authentication from Firebase + Clerk.js, and uses Tailwind CSS for styling. In the backend, we have our machine learning pipeline in Python as well as our API routes through FastAPI. We utilized OpenAI, Azure AI, Hugging Face, and Intersystems IntegratedML.

## Challenges we ran into
One of the main issues we ran into was understanding and integrating InterSystems into our product. Since it was the first time our entire team was working with the IntegratedML tool, we had to spend quite a bit of time debugging and reading tool documentation to understand how we could implement this pipeline. 

## Accomplishments that we're proud of
We were able to simulate a real-life scenario where a user could scan their prescription and dishes from either their smartwatch (simulated through a raspberry pi) or mobile phone seamlessly. The integration of our tool into a wearable device allows a user to go about their entire day while also keeping track of their health in just a few seconds. We were able to hyper-personalize our context window and integrate an ML model so that our tool could give reliable insights to users based on their pre-existing conditions and eating habits.

## What we learned
We learned a lot about integrations with different systems and models. Specifically, we learn how to use InterSystems as well as integrations with Raspberry Pi.

## What's next for MultiMed Vision+
The next step for MultiMed Vision is to launch this idea fully, expanding our vast data sources and improving on our hardware + software systems. Moreover, we are looking to consider expanding our platform that can tell us more about where our food came form, such as where it's being produced/processed. We could potentially integrate with blockchain technology by briding the real world with web&web3.
