import pandas as pd
import numpy as np
import json
from flask import Flask, jsonify
import os
print(os.getcwd())


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return (
        f"Welcome to the Parking Meter API<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/quantity-of-meters-per-borough<br/>"
        f"/api/v1.0/meter-hours<br/>"
        f"/api/v1.0/top-20-streets-with-most-meters"
    )

@app.route("/api/v1.0/quantity-of-meters-per-borough", methods = ('POST', 'GET'))
def borough():
    borough_df = pd.read_csv("borough.csv")
    data_df = borough_df.to_json(orient="records")
    return jsonify(data_df)

@app.route("/api/v1.0/meter-hours", methods = ('POST', 'GET'))
def meter():
    hours_df = pd.read_csv('meter-hours.csv')
    data2_df = hours_df.to_json(orient="records")
    return jsonify(data2_df)

@app.route("/api/v1.0/top-20-streets-with-most-meters", methods = ('POST', 'GET'))
def street():
    street_df = pd.read_csv('top-streets.csv')
    data3_df = street_df.to_json(orient="records")
    return jsonify(data3_df)

if __name__ == "__main__":
    app.run(debug=True)
