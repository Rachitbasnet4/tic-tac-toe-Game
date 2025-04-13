let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; //

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
       if(turnO){
        box.innerHTML ="O";
        turnO = false;
       }else{
        box.innerHTML ="X";
        turnO = true;
       }
       box.disabled = true;

       checkWinner();
    })
});

const checkWinner = () =>{
    for(let pattern of winPattern){
        let [a, b, c]= pattern;
        if (
            boxes[a].innerHTML !== "" &&
            boxes[a].innerHTML === boxes[b].innerHTML &&
            boxes[a].innerHTML === boxes[c].innerHTML
        ) {
            let winner = boxes[a].innerHTML;
            localStorage.setItem("winner", winner); // Store winner in local storage
            window.location.href = "msgpage.html"; // Redirect to msg.html
            return;
        }
        
    }
}



boxes.forEach((box)=>{
    resetBtn.addEventListener("click",()=>{
        location.reload();
        turnO = true;
    })
})