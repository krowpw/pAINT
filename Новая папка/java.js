let block = document.querySelector(".bigbox")
const blocksize = 20
let s = (block.offsetWidth * block.offsetHeight) / (Math.pow(blocksize,2))

// for (let i = 0; i<9; i++) {
//     block[i].addEventListener("mouseenter", function(){
//     console.log("я пидорас", i)
//     block[i].classList.add("--active")
//     setTimeout(()=>{
//          block[i].classList.remove("--active")
//     })
// })
    
let color = document.getElementById("color");
console.log(color.value);
    
// }
for (let i = 0; i < s; i++) {
    block.insertAdjacentHTML("afterbegin", '<div class="block"></div>')
}

let blocklist = document.querySelectorAll(".block")

let isDraw = false
block.addEventListener("mousedown", ()=>{
    isDraw = true
})
block.addEventListener("mouseup", ()=>{
    isDraw = false
})
blocklist.forEach( block => {
    block.addEventListener("mouseenter", () => {
        if (isDraw) {
            block.style.backgroundColor = color.value ;
        }
    
    }
)
}

)