function add(){
    let name =document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let phone =document.getElementById("Phone").value;

   let table= document.getElementById("mycontacts");
   let btn= document.createElement("button");
   btn.innerHTML="delete";
   btn.addEventListener("click",function(){
       document.getElementById("mycontacts").deleteRow(0);
   })
      
   let row=table.insertRow(-1);
   let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
     let cell3=row.insertCell(2);
     let cell4=row.insertCell(3);

     cell1.innerHTML= name;
     cell2.innerHTML=email;
     cell3.innerHTML=phone;
     cell4.append(btn);
    
   
}