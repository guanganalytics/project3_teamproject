import pandas as pd
import numpy as np
import json
from flask import Flask, jsonify



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

@app.route("/api/v1.0/quantity-of-meters-per-borough")
def borough():
    borough_df = pd.read_csv(r"/SQL/borough.csv")
    borough_df.to_json(orient="records")
    return(borough_df)

@app.route("/api/v1.0/meter-hours")
def meter():
    hours_df = pd.read_csv('/SQL/meter-hours.csv')
    hours_df.to_json
    return(hours_df)

@app.route("/api/v1.0/top-20-streets-with-most-meters")
def street():
    street_df = pd.read_csv('/SQL/top-streets.csv')
    street_df.to_json(orient="records")
    return(street_df)

if __name__ == "__main__":
    app.run(debug=True)
