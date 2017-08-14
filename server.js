var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One By PRANAV JAIN',
        heading: 'Article One',
        date: 'Aug 18, 2017',
        content: ` <p>
                        Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One.
                    </p>
                    <p>
                        Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One.
                    </p>
                    <p>
                        Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One. Hello, this is my Article One.
                    </p> `
        },
    'article-two': {
        title: 'Article Two By PRANAV JAIN',
        heading: 'Article Two',
        date: 'Oct 07, 2017',
        content: ` <p>
                        Hello, this is my Article Two.
                    </p> `
    },
    'article-three': {
        title: 'Article Three By PRANAV JAIN',
        heading: 'Article Three',
        date: 'July 26, 2017',
        content: ` <p>
                        Hello, this is my Article Three. Please kill me.
                    </p> `
    },
};

function createtemplate (data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate = 
`<html>
    <head>
        <title>
            ${title}
        </title>
    </head>
    <body>
        <div class='container'>
            <div>
                <a href='/'> Home</a>
                <link href="/ui/style.css" rel="stylesheet" />
                <h1>
                    ${heading}
                </h1>
                <hr/>
                <div>
                    ${date}
                </div>
                ${content}
            </div>  
        </div>
    </body>
</html>
`;
return(htmltemplate);
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//articleName == article-one
app.get('/:articleName',function(req,res) {
    var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
