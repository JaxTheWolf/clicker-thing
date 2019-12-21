
const clickBtn = document.getElementById(`clickbtn`)
const upgBtn = document.getElementById(`upgbtn`)
const lT = document.getElementById(`lighttheme`)
const dT = document.getElementById(`darktheme`)
const theme = document.getElementById(`theme`)

let pt = 0
let clickVal = 1
let upgCost = 75

clickBtn.onclick = click
upgBtn.onclick = upgrade
lT.onclick = () => { theme.href = `css/light.css` }
dT.onclick = () => { theme.href = `css/dark.css` }
document.body.onload = [updateVal(`p2`, `Upgrade cost: ${upgCost}`), updateVal(`p1`, pt)]

function click () {
  pt = pt + clickVal
  updateVal(`p1`, pt)
}

function upgrade () {
  if (pt >= upgCost) {
    pt = pt - upgCost
    upgCost = Math.floor(1.75 * upgCost)
    updateVal(`p1`, pt)
    updateVal(`p2`, `Upgrade cost: ${upgCost}`)
    clickVal++
  } else {
    alert(`Insufficient funds!`)
  }
}

function updateVal (id, newval) {
  document.getElementById(id).innerHTML = newval
}
