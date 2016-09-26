var submit=document.getElementById('sub_comment');

submit.onclick=function() {
    
    var request =new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                
                var comments=request.responseText;
                
                comments=JSON.parse(comments);
            
                var list='';
                
                for(var i=0;i<comments.length;i++) {
                    list += "<li>" + comments[i] + "</li>"
                }
                
                var ui=document.getElementById('ul_comment');
                ui.innerHTML=list;
            }
        }
    }
    
    var commentInput=document.getElementById('comment');
    var comment = commentInput.value;
    
    request.open('GET','http://sagar-varma.imad.hasura-app.io/submit-comment?comment=' + comment , true);
    request.send(null);
    
}