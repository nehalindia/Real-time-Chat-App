const socket = io()
 
let name1;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message_area')

do{
    name1 = prompt('please enter the name')
    console.log(name1)
}while(!name1)

textarea.addEventListener('keyup', (e) =>{
   let a= e.code
    console.log(e.key +" nehal "+a)
    if( e.key === "Enter"){
        console.log("enter in if")
        sendMessage(e.target.value)
    }
})

function sendMessage(msg1){
    let msg ={
        user : name1,
        message :msg1
    }

    appendMessage(msg, "outgoing")
} 

function appendMessage(msg,type){
    let minDiv = document.createElement('div')
    let className = type
    minDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    minDiv.innerHTML = markup

    messageArea.appendChild(minDiv)
}