This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` or 'yarn start'

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To Start the node server

### `cd server`

### `node index`

## To send push notification

1. Send a get request to http://localhost:4000/send-notification

## Steps to successfully setup service worker and push notification

1. Put your service worker file in the public folder
2. Use 'scope' when registering service worker.
3. For push notification, you need VAPID keys

To create VAPID keys, use the following process.

## npm install -g web-push

## web-push generate-vapid-keys

The above command will give you the output as below (use this to register service worker)

=======================================

Public Key:
BLHxWiNVmr7ROB8O3KpPRJFAMhMypwe4X9TdWMmhsPSzHszo32PDkndpvWx3H0OY2HwFCQRU98JBpZ_AEsVxWG4

Private Key:
VXcSZD3mdKyXEmDZNrB02WTxgUZmdIpAEo5tnXR4OH4

=======================================

## NOTE: Please don't use this key. Create a new one and use it.

Refer: sw-push.js (in the public folder) and server/index.js
for registration. 

## To run production build

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
