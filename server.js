var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title:"Article-One|Sagar Varma",
    heading:"Article One",
    content:`<p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>`},
    'article-two':{
     title:"Article-Two|Sagar Varma",
    heading:"Article Two",
    content:`<p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>`},
    'article-three':{ title:"Article-Three|Sagar Varma",
    heading:"Article Three",
    content:`<p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>
        
        <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.</p>`}
};
    

function createHtmlTemplate(data){
    
    var title=data.title;
    var content=data.content;
    var heading=data.heading;
    
    var htmlTemplate=`<html>
    <head>
        <title>${title}</title>
        <meta name="viewpoint" content="width=device-width" intial-scale="1" /> 
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
        <div>
        <a href="/">Home</a>
        <hr/>
    </div    <h1>Hello Hasura</h1>
    
    <div>
        <h2>${heading}</h2>
    </div>
    <div>
      ${content}
    </div>
    <h3>Comments...</h3>
    <hr/>
    <br/>
    <div>
       <input type="text" placeholder="Comment Here..." id="comment"></inout>
       <input type="submit" value="Submit" id="sub_comment"></input>
</div>
    <div>
        <h3>Previous Comments...</h3>
        <hr/>
        <ul id="ul_comment">
        </ul>
    </div>
</div>
 <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>
`
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var comments =[];
app.get('/submit-comment', function(req,res) {
    
    var comment=req.query.comment;
    
    comments.push(comment);
    
    res.send(JSON.stringify(comments));
});

app.get('/:articleName',function(req,res) {
    var articleName=req.params.articleName;
   res.send(createHtmlTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
