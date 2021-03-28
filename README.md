# sportihome_react_nextjs_mongo

# Map_Next.js_Mongo
 
## Prerequisite: Make sure you change the counterpart in dbConnect.js for accessing your personal MongoDB address.

## Major dependencies: next, axios ,mongoose, material-ui

## Map Provider: Map Box

## Icon credit: icons8

## How to start : yarn -> yarn dev


## 1:Overview
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/0.jpg)


## 2:Catch default geometric boundary of France on https://sportihome.com/fr (category spot)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/1.jpg)



## 3:Reconfirm default geometric boundary on category stay, which finally give us the coordinate as follow :southwest -5.045468018749943,41.62379572959986  northeast 8.138125731250057,51.44042978000877
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/2.jpg)



## 4:Test api on postman
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/3.jpg)



## 5:API response (all spots within France with respect to the sport items provided as below in request body)

SPORTS = [
    'ACTION_SPORT',
    'AIR_SPORT',
    'BASKETBALL',
    'BMX',
    'BOATING',
    'BODYBUILDING',
    'CANOE_KAYAK',
    'CANYONING',
    'CAVING',
    'CLIMBING',
    'COMBAT_SPORT',
    'CROSS_COUNTRY_SKIING',
    'CROSSFIT',
    'CYCLING',
    'DANCING',
    'DIVING',
    'FISHING',
    'FITNESS',
    'FOOTBALL',
    'FREE_DIVING',
    'GOLF',
    'HANDBALL',
    'HIKING',
    'HORSE_RIDING',
    'ICE_SPORT',
    'JETSKIING',
    'KITEBOARDING',
    'MOTOCROSS',
    'MOTORSPORT_SPORT',
    'MOUNTAINEERING',
    'MOUNTAIN_BIKING',
    'NATURE_WILDLIFE',
    'NORDIC_WALKING',
    'OTHER',
    'PARAGLIDING',
    'QUAD_BIKING',
    'RAFTING',
    'ROLLERBLADING',
    'RUGBY',
    'SAILING',
    'SKATEBOARDING',
    'SHOOTING_SPORT',
    'SKIING',
    'SKI_TOURING',
    'SKYDIVING',
    'SLACKLINE',
    'SLEDGE',
    'SNOWBOARDING',
    'SNOWSHOEING',
    'SQUASH',
    'STAND_UP_PADDLE',
    'SURFING',
    'SWIMMING',
    'TENNIS',
    'TRAIL',
    'RUNNING',
    'TRIAHLON',
    'VIA_FERRATA',
    'VOLLEYBALL',
    'WAKEBOARDING',
    'WATER_SKIING',
    'WELLNESS',
    'WINDSURFING',
    'WINGSUIT_FLYING',
    'YOGA',
    'WING_FOIL'
];


![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/4.jpg)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/5.jpg)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/6.jpg)



## 6:Locate user with button icon on top left corner and return the current coordinate
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/7.jpg)



## 7:MongoDB

Here the application will automatically create two collections FAVS SPOTS in mongoDB if they
are not exist, or application will retrieve datas from mongoDB and synchronize to the frontend in 
avoid to second time creation.

FAVS serves as store for the sport info, while 
SPOTS serves for store the response from API as shown above, with a new addition filed CHOOSEFAV which 
defines the <want to go> status for individual spot.
Here is an example spot status by default (once app rendered all the data will show at its right positon
with a pin icon, red means <want to go> status false, blue means true)
 
## In FAVS  (favs list empty by default)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/8.jpg)
 
## In SPOTS (choosefave false by default)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/9.jpg)
 

## 8:CRUD
### WANT TO GO test (REMOVE is same logic)
once we click want to go icon in popup, icon on left is want to go, the one on right is remove
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/14.jpg)

once click <want to go> on single item, <choosefav> in SPOT will switch to <true>(show as follows),
at the same time, filed <favs> under sport categort <TRAIL> will add this item to the list.
 
## In SPOTS  (new id: 6049f5716b1c302c1f3164dc is added)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/10.jpg)

## In FAVS  (choosefav: true)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/11.jpg)


## 9: Multiple CRUD test
## In SPOTS  (new id: 6049f5716b1c302c1f3164dc is added)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/13.jpg)

## In FAVS  (choosefav: true)
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/12.jpg)




