//Task-3
const para = document.getElementsByTagName("p");
for(let i=0;i<para.length;i++){
    if(i%2===0){
       para[i].style.color="blue"
    }
    else{
        para[i].style.color="green" 
    }
}
para[para.length-1].style.fontWeight="bold"

//QUEARY SELECTOR ALL
const tag=document.querySelectorAll("p");
console.log(tag);
tag.forEach((tag,index)=>{
    if (index%2===0){
        tag.style.color="blue"
    }
    else{
        tag.style.color="green"
    }
}) 
tag[tag.length-1].style.fontWeight="bold"

//Change Properties
//innerhtml
//innertext
//textcontent 

//create a new element and append 
const newpara=document.createElement("p");
newpara.textContent="This is a dynamically created paragraph";
console.log (newpara)
document.getElementById("content").append(newpara);




//TASK3
/*const tag=document.getElementsByTagName("p");
for(let i=0;i<tag.length;i++){
    if ((i+1)%2===0){
        tag[i].style.color="blue"
    }
    else{
        tag[i].style.color="green"
    }
}
tag[tag.length-1].style.fontWeight="bold"
const tag=document.querySelectorAll("p");
console.log(tag);
tag.forEach((tag,index)=>{
    if (index%2===0){
        tag.style.color="blue"
    }
    else{
        tag.style.color="green"
    }
}) 
tag[tag.length-1].style.fontWeight="bold"*/
//CHANGE PROPERTIES
//innerhtml
//innertext
//textcontent
//createelement
const newpara=document.createElement("p");
newpara.textContent="This is a dynamically created paragraph";
console.log(newpara)
document.getElementById("content").append(newpara);
const image=document.create