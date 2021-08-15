var myList = document.getElementsByTagName("li");
var index;

for(index =0;index < myList.length; index++){
    var aSpanTag = document.createElement("SPAN");
    var sometxt = document.createTextNode("\u00D7");
    aSpanTag.classList = "close";
    aSpanTag.appendChild(sometxt)
    myList[index].appendChild(aSpanTag);
}

var closeButton = document.getElementsByClassName("close");
for(i=0; i<closeButton.length; ++i){

    closeButton[i].onclick = function(){
        var theDiv = this.parentElement;
        theDiv.style.display = "none";

    }
 }
 
var ullist = document.querySelector('ul');
ullist.addEventListener('click', function(event){

    console.log(event);
    if(event.target.tagname  === "LI") {
        event.target.classlist.toggle('checked');
    }

}, false);


function createNewElement(){
    var li = document.createElement('li');   
    var theinputvalue=document.getElementById("the-input").value;
    var textNode = document.createTextNode(theinputvalue);
     li.appendChild(textNode);

if(theinputvalue ===""){
    alert("Hey! This cannot be empty")
} else{
    document.getElementById("The-ul").appendChild(li);
}
    document.getElementById("the-input").value ==="";

    var thePanTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    thePanTag.className="close";
    thePanTag.appendChild(txt);
     li.appendChild(thePanTag);

     for(i=0; i<closeButton.length; ++i){
            closeButton[i].onclick = function(){
            var theDiv = this.parentElement;
            theDiv.style.display = "none";

        }
     }
    {
        var dt = new Date();
document.getElementById('date-time').innerHTML=dt;
    } 


const options = {weekday : "long",month: "short",day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-IST",options);
}
