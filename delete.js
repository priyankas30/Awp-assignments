var likecounter=1;
function comment()
{
    let usercomment=document.querySelector("#inputid1").value;

    const newElement=document.createElement('div');
    newElement.style.background="orange";
    newElement.style.display="flex";
    newElement.style.justifyContent="space-between";
    newElement.style.color="white";
    newElement.style.margin="2px";
    
    const child1=document.createElement('div');
    child1.textContent=usercomment;

    const child2=document.createElement('button');
    child2.textContent="Delete";

    newElement.appendChild(child1);
      newElement.appendChild(child2);

    const commentBox=document.querySelector("#commentBox");
    commentBox.insertBefore(newElement,commentBox.firstChild);

    document.querySelector("#inputid1").value="";
}
function like(){
    likecounter++;
    let likebtn=document.querySelector("#likeid");
    likebtn.innerHTML="Like " + likecounter;

}