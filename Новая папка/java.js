let block = document.querySelectorAll(".block")
console.log(block)


for (let i = 0; i<9; i++) {
    block[i].addEventListener("mouseenter", function(){
    console.log("я пидорас", i)
    block[i].classList.add("--active")
    setTimeout(()=>{
         block[i].classList.remove("--active")
    })
})
    
    
}
