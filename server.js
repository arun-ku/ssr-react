import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App, {routes} from './src/routes';
import { StaticRouter, matchPath, } from 'react-router-dom'

const app = express();

app.use(express.static('public'));

app.get('*', (req,res) => {
    console.log('url', req.url)
    const currenntRoute = routes.find(route => matchPath(req.url, route))
    console.log(currenntRoute)
    if (currenntRoute) {
      const params = matchPath(req.url, currenntRoute).params
      console.log('WWWWWWWWWWWWWWWW', params)
      const currentDataRequest = currenntRoute.component.need && currenntRoute.component.need(params);
      // if(currentDataRequest) {
      console.log('###########', currenntRoute.params)
      Promise.resolve(currentDataRequest || {data: []}).then((response) => {
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <script src="/bundle.js" defer></script>
        </head>
        <body>
            <div id="app">${renderToString(
          <StaticRouter context={{initialData: response.data}} location={req.url}>
            <App />
          </StaticRouter>
        )}</div>
        </body>
        <script type="text/javascript">
          window.initialData = ${JSON.stringify((response.data))}
        </script>
        </html>
    `);
      });
    }

    // }
});


app.listen(process.env.PORT || 3000, () => {
    console.log('server up');
});