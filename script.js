//refrencing main body components
const body=document.querySelector('body')
const btn=document.getElementById("btn")
let panel=document.getElementById("taskpanel")





function handleclick(){  

    //creation of input field, list and checkbox button
    var data=document.getElementById("inputtask").value
    
let list=document.createElement('li')
let cb=document.createElement('input')

    //styling of buttons and list items
    cb.type="checkbox"
    cb.style.marginLeft="30px"
    cb.style.width="100px"
    list.style.backgroundColor="#F75990"
    list.style.fontSize="25px"
    list.style.listStyle="circle"
    list.style.fontFamily="Oswald,sans sarif"
    list.style.fontWeight="bold"
    list.value=data
    list.style.borderRadius="10px"
    list.style.height="50px"
    list.innerText=data
    list.style.textAlign="left"
    

    //appending all the item 
    list.appendChild(cb)
    panel.appendChild(list)
    panel.appendChild(crossbtn)

    

   
    


}




