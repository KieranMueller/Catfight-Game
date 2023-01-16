
let health = 100
let enemyHealth = 50
let enemyName = "RICARDO"

let dieOneValue
let dieTwoValue
let dieThreeValue
let totalValue
let enemyTotalValue

let healthEl = document.querySelector(".health")
healthEl.textContent = "JASPER (health: " + health + ")"
let diceResultsEl = document.querySelector(".diceResults")
let enemyHealthEl = document.querySelector(".enemyHealth")
enemyHealthEl.textContent = enemyName + " (health: " + enemyHealth + ")"
let enemyDiceResultsEl = document.querySelector(".enemyDiceResults")

function myAttack() {
    dieOneValue = Math.floor((Math.random()*6)+1)
    dieTwoValue = Math.floor((Math.random()*6)+1)
    dieThreeValue = Math.floor((Math.random()*6)+1)
    totalValue = (dieOneValue + dieTwoValue + dieThreeValue)
    diceResultsEl.textContent = "Damage Dealt: " + totalValue
    enemyHealth -= totalValue
    enemyHealthEl.textContent = enemyName + " (health: " + enemyHealth + ")"
    if (enemyHealth < 1) {
        enemyHealthEl.textContent = "Perished"
        alert("you won")
    }
    if (health < 1) {
        healthEl.textContent = "Fell in battle"
        alert("died")
    }
    
    dieOneValue = Math.floor((Math.random()*6)+1)
    dieTwoValue = Math.floor((Math.random()*6)+1)
    dieThreeValue = Math.floor((Math.random()*6)+1)
    enemyTotalValue = dieOneValue + dieTwoValue + dieThreeValue
    health -= enemyTotalValue
    healthEl.textContent = "JASPER (health: " + health + ")"
    enemyDiceResultsEl.textContent = "Damage Dealt: " + enemyTotalValue
    console.log(enemyTotalValue)

    


}