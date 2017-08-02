# Step 1: Basic Setup



```sh
mkdir public
mkdir src
touch server.js
touch .babelrc
yarn add -D webpack express react react-dom babel-core babel-loader babel-preset-react-app file-loader css-loader babel-preset-stage-2
```

## Step 2: Setup express server

> Add the following code to your `server.js` file

```javascript
import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('*', (req,res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <script src="/bundle.js"></script>
        </head>
        <body>
            <div id="app">HTML Content</div>
        </body>
        </html>
    `);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server up');
});
```

> If you run your server now using `node server.js`, You will get
> something like this `SyntaxError: Unexpected token import` on the
> terminal. This is because node does not under stands import and
> export statements. We need to add .babelrc configurations and run it
> using `babel-node`.

# Step-3: Add config JSON to .babelrc

> add the following to `.babelrc`

```javascript
{
  "presets": ["react-app", "stage-2"]
}
```

> *** Note: We are not using preset `es2015` as webpack 2 and higher ship with inbuilt support for es2015 ***