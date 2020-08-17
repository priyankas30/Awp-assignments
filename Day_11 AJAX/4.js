window.addEventListener("load",()=>{
    const pbc=document.querySelector("#parentBox");

    for(let i=0 ;i<7;i++) {
    
        const newElement=pbc.children[0].cloneNode(true);
    
        newElement.style.display="flex";
    
        newElement.children[0].innerHTML="Priyanka" + i;
    
        pbc.insertBefore(newElement,pbc.firstChild);
    }
})