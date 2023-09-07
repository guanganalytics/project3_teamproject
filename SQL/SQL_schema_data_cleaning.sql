--creating tables based off the Kaggle data and load in the csv file
create table nyc_parking (ObjectID integer,
						  Meter_Number integer,
						  Status varchar,
						  Pay_By_Cell_Number integer,
						  Meter_Hours varchar,
						  Parking_Facility_Name varchar,
						  Facility varchar,
						  Borough varchar,
						  On_Street varchar,
						  Side_of_Street varchar,
						  From_Street varchar,
						  To_Street varchar,
						  Latitude float,
						  Longitude float,
						  X float,
						  Y float,
						  Location varchar
)

copy nyc_parking from 'C:\Users\henry\Desktop\project3\Parking_Meters_Locations_and_Status.csv' 
delimiter ','
CSV header;

select * from nyc_parking

--deleting columns that we do not need
ALTER TABLE nyc_parking
DROP COLUMN Parking_Facility_Name

ALTER TABLE nyc_parking
DROP COLUMN Pay_By_Cell_Number 

ALTER TABLE nyc_parking
DROP COLUMN From_Street 

ALTER TABLE nyc_parking
DROP COLUMN To_Street 

ALTER TABLE nyc_parking
DROP COLUMN X 

ALTER TABLE nyc_parking
DROP COLUMN Y 

ALTER TABLE nyc_parking
DROP COLUMN Location

select * from nyc_parking

--investigating how many boroughs are discussed within scope and it's corresponding parking spots
--investigating the top streets are having the most of parkings
--investigating different parking hours and it's corresponding location
select borough, count(*) as frequency 
from nyc_parking 
group by borough
order by frequency desc

select On_Street, count(*) as frequency 
from nyc_parking 
group by On_Street
order by frequency desc
limit 20

select Meter_Hours, count(*) as frequency 
from nyc_parking 
group by Meter_Hours
order by frequency desc
