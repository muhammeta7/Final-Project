# :memo: My Swoleness Pal :muscle: 



## Overview
Gains, brah!

This is a web app that allows users to create custom workout routines and track their progress.

Create an account, make a routine, and log your progress during each workout. Using the Meteor framework for NodeJS, the application can work both on your computer as well as mobile device. 

The ability to move seemlessly between computer to mobile, is what makes our app ideal for those looking to get in shape. Spare your thumbs by navigating to our webpage on your home computer to make a routine. And when you're ready to hit the gym, use the mobile app to log your progress between each set.

Please try out the deployed app in Heroku, found [here](https://my-swoleness-pal.herokuapp.com).



## Authors
[Tyler Geerdts](https://github.com/tygee713) - Lead Backend Developer / Project Manager 

[Tom Thompson](https://github.com/tomtom28) - Lead React Developer / Android DevOps

[Muhammet Aydin](https://github.com/muhammeta7) - Lead Designer / Meteor Developer

[Krishna Yellayi](https://github.com/darthvader1118) - Lead UI Designer / React Developer


## Functionality
On the Front End, the app uses `React` JavaScript Framework with `React Router` and `Redux`. And for styling, the `Material-Ui` Component Library and `React Grid System` were used.

On the Back End, the app uses the `Meteor` Framework for `NodeJS`. Within Meteor, we persist data using `MongoDB` and call upon the `accounts-ui` package for user authenication. Naturally, `Express` is used as the router, and `bcrypt-nodejs` for hashing user passwords.



## Cloning down the repo
If you wish to clone the app down to your local machine...
  1. Ensure that you have MongoDB set up on your laptop
    * An amazing repo to get you started with that can be found [here](https://github.com/dannyvassallo/mongo_lesson).
  2. Also ensure that you have Meteor installed on your laptop
    * Visit [https://www.meteor.com/](https://www.meteor.com/) to download a copy.
  3. Once you are set up, `cd` into this repo and run `meteor npm install`.
  4. Afterward, run `meteor` in Terminal to start up the app.
  5. Then, navigate to `localhost:3000` in your browser.



## Screenshots

### Landing Page
![HomePage](/public/screenshots/homepage.png)

### Create Routine
![Create Workout](/public/screenshots/create.PNG)

### Select Workout
![Select Workout](/public/screenshots/select.png)

### Log Workout
![Log Workout](/public/screenshots/logWorkout.png)

### User Profile
![User Profile](/public/screenshots/profile.PNG)

### Dashboard (Shows User Progess)
![Dashboard](/public/screenshots/dashboard.png)


## Download to Android
The app can be compiled down to your Android device by following these steps:
  1. Connect your Android Device to your laptop.
  2. Ensure that your Android device has "USB debugging" enabled.
  3. To enable Step 2, please refer to this [Stack Overflow Question](http://stackoverflow.com/questions/31993182/failed-to-deploy-to-device-while-deploying-cordova-app-to-a-connected-device).
  4. Then `cd` into this repo on your laptop.
  5. In terminal, run `MONGO_URL="mongodb://tom:12345678@ds131099.mlab.com:31099/heroku_1kd2vdn1" meteor run android-device --mobile-server=https://my-swoleness-pal.herokuapp.com`
  6. If it worked properly, you should now have the app on your mobile device.


If you are curious about the MONGO_URL, note that it was created by the following steps:
  1. Navigating to the app in the Heroku Dashboard.
  2. Under the "Installed add-ons", selecting "mLab MongoDB".
  3. This will take you to the mLab webpage, where you would click "Users".
  4. Then selecting, "+ Add database user" and filling out the form.
  5. Notice how the username and password are part of the MONGO_URL.
  6. Notice how the top of the page has a "To connect using a driver via the standard MongoDB URI" link.
  7. These parameters were passed into the following format...
  `MONGO_URL="mongodb://<username>:<password>@<mlab url>.mlab.com:<portnumber>/<dbname>" meteor run android-device --mobile-server=https://<appname>.herokuapp.com`
  
