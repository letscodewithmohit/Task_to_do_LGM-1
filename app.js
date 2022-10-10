var elements=[];

var input=document.querySelector("input");

window.onload= function(){
    if(JSON.parse(localStorage.getItem("elements")) !=null){
        elements= JSON.parse(localStorage.getItem("elements"));
        console.log(elements);
        display();
    }
};

function display(){
    document.querySelector(".list").innerHTML=" ";
    for(var i=elements.length-1; i>=0; i--){
        document.querySelector(".list").innerHTML+="<center><div class = 'element'>"+elements[i]+"<img class='dustbin' src='img.jpg' onclick='del(" + i + ")'></div></center><br>";
    }

}

function addElement(){
    if(input.value.trim()!=""){
        elements.push(input.value.trim());
        localStorage.setItem("elements" , JSON.stringify(elements));
        display();
        document.querySelector("input").value="";
    }
}

function del(index){
    elements.splice(index,1);
    localStorage.setItem("elements", JSON.stringify(elements));
    display();
}