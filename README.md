# Step 1: Basic Setup



```sh
mkdir public
mkdir src
touch server.js
touch .babelrc
yarn add -D webpack express react react-dom babel-core babel-preset-es2015 babel-loader babel-preset-react-app file-loader css-loader babel-preset-stage-2
```

# Step 2: Setup express server

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
            <title>React SSR</title>
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
  "presets": ["es2015", ""react-app", "stage-2"]
}
```

> Add babel-node globally by running `npm install -g babel-cli` and run `NODE_ENV=development babel-node server.js`
> The server will start on localhost:3000. If you open it in browser you'll see the HTML that we just sent.
> **Now lets start on the clint side react app**

# Step 4: Create react app

```sh
cd src
touch index.js
mkdir Components
mkdir Components/App
touch Components/App/index.js
```

> Add the following code to your files.

***./src/index.js***
```javascript
import React from 'react';
import { render } from 'react-dom';

import App from './Components/App';

const elem = document.getElementById('app');

render(App, elem);
```

***./src/Components/App/index.js***
```javascript
import React from 'react';
import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>React App</div>
        );
    }
}
```