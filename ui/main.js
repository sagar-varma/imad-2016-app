console.log('Loaded!');

var element=document.getElementById('img1');
margin=0;

function moveRight() {
    margin=margin+1;
    element.style.marginLeft=margin;
}
element.onclick=function() {
    
    var interval=setInterval(moveRight,50);
    
};