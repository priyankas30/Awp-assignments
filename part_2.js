var likecounter=1;

function commenthere(){
    let usercomment=document.querySelector("#inputId1").value;
    const newElement=document.createElement("div");

    newElement.textContent= usercomment;

    newElement.style.background="crimson";
    newElement.style.margin="5px";
    newElement.style.color="black";
    newElement.style.fontSize="21px"
    newElement.style.padding="8px";
    newElement.style.margin="5px";

    const commentBox=document.querySelector("#commentBox");
    commentBox.insertBefore(newElement,commentBox.firstChild);
    document.querySelector("#inputId1").value="";
}
function likehere(){
    likecounter++;
    let likeElement = document.querySelector("#likeid");
    likeElement.innerHTML="Like" + likecounter;
}