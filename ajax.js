function todo(){
    console.log("get data clicked")

// create XHR object
var xhttp = new XMLHttpRequest();

// create an event listener
xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp,this.status == 200){
        var data = JSON.parse(this.responseText);
        var output = `<tr><th>name</th>
        <th>email</th></tr>`;
        for(let i =0; i<data.length; i++)
{
    output +=`<tr>
     <td>${data[i].name}</td>
     <td>${data[i].email}</td>
     </tr>`;
}
document.getElementById('tr').innerHTML=output;
    }
}


// request specification
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
// sending request
xhttp.send();
};