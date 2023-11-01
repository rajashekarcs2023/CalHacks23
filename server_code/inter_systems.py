#!/usr/bin/env python
# coding: utf-8
# In[1]:
import pandas as pd
from sklearn.model_selection import train_test_split
from IPython import get_ipython
# get_ipython().system('pip install sqlalchemy-iris')
# get_ipython().system('pip install pandas numpy matplotlib scikit-learn==1.3.1')
from sqlalchemy import create_engine, text, DateTime
import pandas as pd
import numpy as np
import json
import matplotlib.pyplot as plt
import os
import ssl

def get_inter_systems():
    try: 
        pemfile = "cert.pem"   
        sslcontext = ssl.create_default_context(cafile=os.path.relpath(pemfile))
        args = {
            'hostname': "k8s-94df3105-a3da6444-d59065ee40-1df3060d5f49854c.elb.us-east-1.amazonaws.com", 
            'port': 443,
            'namespace': "USER", 
            'username': "SQLAdmin",  
            'password': "xxxxxxxxx"
        }
        engine = create_engine(f"iris://{args['username']}:{args['password']}@{args['hostname']}:{args['port']}/{args['namespace']}",connect_args={'sslcontext': sslcontext} )
        conn = engine.connect()
        sql = """
        SELECT 
            TOP(1)
            PREDICT(JS1 use JSModel1) as prediction, 
            Heart_Attack_Risk, 
            PROBABILITY(JS1 use JSModel1 ) as probability_Heart_Attack_Risk,
            * 
            FROM 
            SQLUser.heart_attack_dataset_validate1
        """
        result = conn.execute(text(sql))
        df = pd.read_sql(text(sql), conn)
        df.reset_index(inplace=True)
        json = df.to_json(orient="split")
        # In[2]:
        return json
    except Exception as e:
        print(e)
        return {"columns":["index","prediction","Heart_Attack_Risk","probability_Heart_Attack_Risk","Age","Sex","Cholesterol","Heart_Rate","Diabetes","Family_History","Smoking","Obesity","Alcohol_Consumption","Exercise_Hours_Per_Week","Previous_Heart_Problems","Medication_Use","Stress_Level","Sedentary_Hours_Per_Day","Income","BMI","Triglycerides","Physical_Activity_Days_Per_Week","Sleep_Hours_Per_Day","Hemisphere","Heart_Attack_Risk","Systolic_Blood_Pressure","Diastolic_Blood_Pressure"],"index":[0],"data":[[0,"1",1,0.4435153212,18,0,259,45,1,1,1,0,0,9.6408454758,0,0,3,11.8431843079,132438,25.7768339599,755,3,5,1,1,178,80]]}
