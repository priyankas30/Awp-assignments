function comment(){
    let additem=document.querySelector("#inputid").value;
    const newElement=document.createElement('div');
    newElement.textContent=additem;
    
  
    newElement.style.color="black"
    
    const commentBox=document.querySelector("#commentBox");
    commentBox.insertBefore(newElement,commentBox.firstChild);

  document.querySelector("#inputid").value="";


function clear(commentBox) {
  commentBox.querySelectorall(additem).remove();
    
}
}