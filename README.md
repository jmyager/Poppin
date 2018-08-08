# Popin

### Realtime crowdsourced nightlife data
    
____
# Built With:
  - React
  - Firebase
  - Mongo
  - Javascript
  - HTML
  - CSS
  _____

## Why Popin?
We observed a lack of available data for the live activity of different nightclub venues. We believe this type of data would be valuable to a consumer planning their night out, as well as the venue owner attempting to bring in more business. As such, Popin was born.

## Overview
Popin allows the user to create an account and login with firebase authentication installed. Once logged in, the user is able to load their city (for MVP concerns we have only implemented Raleigh, NC so far). The city view showcases all nightlife venues, sorted by highest popularity score (or "Popin Score"). The Popin Score is dictated by the users, in real time, with a simple upvote or downvote. Users are also able to filter and sort the data, to better evaluate the venues based on their preferences.

## Demo
For presentation purposes, we've built the demo to showcase the main use case of the application: mobile. In order to view the demo, please follow the instructions below:
1. Launch the (Heroku application)[https://frozen-bastion-62666.herokuapp.com/]
2. Once the application has launched on Heroku, you may close the window.
3. Launch the (Demo Mobile Viewer)[https://shreedamin.github.io/demo/]

## To Run the application locally on your machine, follow the instructions below:

### Note:
*You need to have Node, React and Mongo installed 
*Add your firebase keys to the firebase.js file located in poppinn/client/src/firebase/firebase.js
*In your firebase console, make sure you have email authentication enabled 

## Setup
### Start MongoDB and open cmd line for Mongo
open terminal or bash window #1
```sh
$ mongod
```
open terminal or bash window #2 (Do not close terminal/bash window #1)
```sh
$ mongo
```

### Seed the data
```
$ cd into the poppinn
$ cd seeders/
$ node seeds.js
```
-your database should now be seeded

### Install node modules
```
$ cd poppinn/
$ yarn install
$ cd client/
$ yarn install
$ cd ../
$ cd Open\ Me\ for\ Demo/
$ open index.html
```
___
## The app should be open now
-*refer to screenshot below*
## * login Info *
##### USERNAME: shreed@gmail.com
##### PASSWORD: dealigg
  _________


[![Screen_Shot_2018-07-29_at_2.19.37_PM.png](https://s8.postimg.cc/6iqq58u2t/Screen_Shot_2018-07-29_at_2.19.37_PM.png)](https://postimg.cc/image/4e6d45sg1/)
