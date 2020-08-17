window.addEventListener("load",()=>{

const pbc=document.querySelector("#parentBox");

let name=[
    {id:80, name:"Pravin jeurkar"},
    {id:81,name:"Priyanka Suryavanshi"},
    {id:82,name:"priyanka Soni"},
    {id:83 ,name:"Rahul chopade "},
    {id:84,name:"Rajat Nakhate"},
    {id:85,name:"Rohan Kolhe"},
    {id:86,name:"Ritesh Garud"},
    {id:87,name:"Rasika Divekar"},
    {id:88,name:"Ravikiran Pilghar"},
];
for(let i=0;i<name.length ;i++){
    let item=name[i];
    const newElement=pbc.children[0].cloneNode(true);
    newElement.style.display="flex";
    newElement.children[0].innerHTML=item.name;
    pbc.insertBefore(newElement,pbc.firstChild);
}

})