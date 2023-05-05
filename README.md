## Documentation

> GO to cloudinary website and create an account which is free

- while creating the account from slect product dropdown select programmable media

- after creating the account go to dashboard and copy the cloud name, api key and api secret

- create a config.env file in the server folder

- add the following to the config.env file

- fill up the cloud name, api key and api secret with your own credentials

- fill up the REMOTE with the address of the client side app

- you can leave the CSP_CONNECT_SRC empty for now

```
REMOTE=http://localhost:3000
CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CSP_CONNECT_SRC=
```

- then in the cloudinary website go to Media Library and create a folder called "trials"

- you can use other name for your folder but in that case you need to modify the code in the server side imageController.js file

```
 cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
            use_filename: true, // use original filename
            folder: 'trials', // folder name in cloudinary
        });
```

- then in the server folder run the following command

```
npm install
```

- then run the following command

```
npm run startDev
```

- then go to the client folder and run the following command

```
npm install
```

- then run the following command

```
npm start
```

## Boom your app is ready to use

> Now finally visit the address : http://localhost:3000

> You can upload images and see the images in the cloudinary media library

> while uploading is done you can have the url of the image in the webview

> put your courser on the link and click right button of the mouse

> the url of the image will be copied to your clipboard

> you can paste the url in the browser searchbar and see the image

> the image will also be stored in the server/uploads folder