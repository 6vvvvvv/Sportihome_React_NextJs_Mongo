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



## 3:Reconfirm default geometric boundary on category stay, which finail give us the coordinate as follow :southwest -5.045468018749943,41.62379572959986  northeast 8.138125731250057,51.44042978000877
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/2.jpg)



## 4:Test api on postman
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/3.jpg)



## 5:API response
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
Here is an example spot status by default
 
## in FAVS
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/8.jpg)
 
## in SPOTS
![image](https://github.com/6vvvvvv/Sportihome_React_NextJs_Mongo/blob/master/screenshot/9.jpg)
 
 
 
![image](https://github.com/6vvvvvv/React_Redux_Node_Recipes/blob/master/img/6.jpg)

## 8:Log Out (userchanged)
![image](https://github.com/6vvvvvv/React_Redux_Node_Recipes/blob/master/img/7.jpg)

## 9:Detail Page1(with carousel)
![image](https://github.com/6vvvvvv/React_Redux_Node_Recipes/blob/master/img/11.jpg)

## 9-1:Detail Page2(with carousel)
![image](https://github.com/6vvvvvv/React_Redux_Node_Recipes/blob/master/img/12.jpg)

## 10:MongDB Overview
![image](https://github.com/6vvvvvv/React_Redux_Node_Recipes/blob/master/img/8.jpg)

## 11:Users Collection
![image](https://github.com/6vvvvvv/React_Redux_Node_Recipes/blob/master/img/9.jpg)

## 12:Recipes Collection
![image](https://github.com/6vvvvvv/React_Redux_Node_Recipes/blob/master/img/10.jpg)


