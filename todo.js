   function todo(){
   var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
           var activate=JSON.parse(this.responseText);
           var output="<table>"+
               "<tr>"+
               "<th>"+"USERID"+"</th>"+
               "<th>"+"ID"+"</th>"+
               "<th>"+"TITLE"+"</th>"+
               "<th>"+"COMPLETED"+"</th>"+
               "</tr>";
            for (var i=0;i<activate.length;i++){
                output=output +"<tr>"+
                      "<td>"+ activate[i].userId +"</td>"+
                      "<td>"+ activate[i].id+"</td>"+
                      "<td>"+ activate[i].title +"</td>";
                      
            if (activate[i].completed==true){
                    output=output+
                         "<td>"+"<input type=checkbox checked disabled=true id=checkbox>"+"</td>"+
                         "</tr>";
            }
             else {
                output=output+
                    "<td>"+"<input type=checkbox>"+"</td>"+
                    "</tr>";
                }
           }
           output=output +"</table>";
           document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    var checkedon=0;
    var count=0;
    function updateChange(){
        var promise=new Promise(function(resolve,reject){
            updateCount=0;
            for(var i=0;i<checkedon;i++){
                if((document.getElementById("checkbox"+i)).checked==true){
                    updateCount+=1;
                }
            }
            if(updateCount==5&&count<5){
                resolve();
            }
            else{
                count=updateCount;
            }
        });
        promise.then(function(){
            setTimeout(function(){
                alert("congrats 5 tasks have been completed!");
            },10)
        });
    }
}