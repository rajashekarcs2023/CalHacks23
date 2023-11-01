import firebase_admin
from firebase_admin import credentials, firestore, storage
import time

# Initialize Firebase with the service account key JSON file
cred = credentials.Certificate('fb_secret.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://default.firebaseio.com",
    'storageBucket': 'turing-emitter-367107.appspot.com'
})

db = firestore.client()
bucket = storage.bucket()

def upload_img_blob(file_path):
    # make the blob name the unix timestamp
    blob = bucket.blob(f'calhacks10/vmDW6wxBtcGLPiALDBnV/{int(time.time())}')
    blob.upload_from_filename(file_path)
    blob.make_public()
    url = blob.public_url
    print(url)
    return url

def update_intakes(json_input):
    doc_ref = db.collection('calhacks10').document('vmDW6wxBtcGLPiALDBnV')
    doc_data = doc_ref.get().to_dict()

    if not doc_data:
        # Handle the case when the document doesn't exist
        doc_data = {}

    if not json_input.get("Drug Name"):
        food_data = doc_data.get('food', [])
        food_data.append(json_input)
        doc_data['food'] = food_data
    else:
        meds_data = doc_data.get('meds', [])
        meds_data.append(json_input)
        doc_data['meds'] = meds_data

    doc_ref.set(doc_data)

def update_latest_food_with_advice(advice):
    doc_ref = db.collection('calhacks10').document('vmDW6wxBtcGLPiALDBnV')
    doc_data = doc_ref.get().to_dict()
    food_data = doc_data.get('food', [])

    if food_data:
        food_data[-1].update({"advice": advice})
        doc_data['food'] = food_data

        doc_ref.set(doc_data)

def get_intakes():
    doc_ref = db.collection('calhacks10').document('vmDW6wxBtcGLPiALDBnV')
    return doc_ref.get().to_dict()

