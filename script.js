 let num1 = Math.floor(Math.random() * 9) + 1
let num2 = Math.floor(Math.random() * 8) + 1

let ans = num1 * num2
let score = JSON.parse(localStorage.getItem("score"))
let scoreh = document.querySelector(".score")
let ques = document.querySelector("#question")
let input = document.querySelector("#input")
let btn = document.querySelector(".btn")
scoreh.textContent = "Score : " + score

// localStorage.setItem("score", JSON.stringify(score))
function update() {
  localStorage.setItem("score", JSON.stringify(score))
  scoreh.innerText = "Score : " + score
  console.log(score)
}
ques.textContent = `What is ${num1} Multiply by ${num2} `
btn.addEventListener("click", function() {
  let userans = input.value
  userans = Number.parseInt(userans)

  if (userans == ans) {
    // let a = ++score ;

    score++
    console.log(score)
    // scoreh.textContent = "Score :"+ (++score)
    update()
  }
  else if (userans != ans) {
    score--
    update()
  }
})