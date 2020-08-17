window.addEventListener("load",()=>{
    const pbc=document.querySelector("#parentBlockContainer");
    for(let i=0;i<8;i++){
        const newElement=pbc.children[0].cloneNode(true);
        newElement.style.display="flex";
        pbc.insertBefore(newElement,pbc.firstChild);

    }

})