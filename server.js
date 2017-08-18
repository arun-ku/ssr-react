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
            <script src="/bundle.js" defer></script>
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