# Parcel a web page

## Building a web app with Parcel

This repo was building by [parcel](https://parceljs.org/getting-started/webapp/).

###  A. Start parcel to render webpage

- Install parcel 

```
npm install --save-dev parcel 
```

- set index.html

index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title> Parcel redux </title>
  </head>
  <body>
    <h1>Hello, I am NOT a React </h1>
    <script type="module" src="./src/redux.js"></script>
  </body>
</html>
```

- rend index.html 

```
npx parcel src/index.html 
```

- or update `"start"` scripts to the `package.json` file  

```
"scripts": {
    "start": "parcel index.html"
}
```