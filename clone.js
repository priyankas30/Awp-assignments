var likecounter=1;

function comment(){
    let userComment=document.querySelector("#inputid1").value;

    const newElement=document.querySelector("#referenceid").cloneNode(true);

    newElement.removeAttribute("id");
    
    newElement.style.visibility="visible";
    
    newElement.children[0].innnerHTML=userComment;
    
    const commentBox=document.querySelector("#commentBox");
    
    commentBox.insertBefore(newElement,commentBox.firstChild);
    
    document.querySelector("#inputid1").value="";

}
function like(){
    likecounter++;
    let likebtn=document.querySelector("#likeid");
    likebtn.innerHTML="Like "+likecounter;
}