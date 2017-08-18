> Before making any changes to the app lets make our development efforts  a little bit less by
> adding some things. At this point if we make any changes to our app, we'll need to restart the app
> using `yarn dev` or `npm run dev`, which gets really annoying when we have to check a small change
> that we made and we have to stop the whole app and start it again. We want to allow the changes to
> reflect on the browser without refreshing. So lets do exactly that.

```sh
yarn add -D webpack-dev-server
```

> `webpack dev server` has some called as hot module replacement which does exactly what we want
> to achieve. It needs an html file which it will serve when we run it. So we need to create an
> `HTML` file with same code that we were sending as response in `server.js`.

```sh
touch index.html
```

***index.html***

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="/bundle.js" defer></script>
    </head>

    <body>
        <div id="app">HTML Content</div>
    </body>
</html>
```

> By default the `the webpack dev server` runs on port `8080`. So if we run `localhot:8080` now,
> we will see the HTML page but the react app will not render. If we check the console we will see
> error like this `GET http://localhost:8080/bundle.js 404 (Not Found)`. The webpack dev server serves
> out files on path `/` but in our config we gave `output` filename to be `./public/bundle.js`. So either
> we can change it to `bundle.js` or we can change the `scr` in script tag to `/public/bundle.js`.
> If we do so and run the server again, the react app will be rendered properly.

> ***Now lets add `HMR`***

>