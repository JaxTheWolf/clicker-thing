let pt = 0
let clickVal = 1
let upgCost = 50

function Click () {
  pt = pt + clickVal
  updateVal(`p1`, pt)
}

function Upgrade () {
  if (pt >= upgCost) {
    pt = pt - upgCost
    upgCost = upgCost * 2
    updateVal(`p1`, pt)
    ShowUpgCost()
    clickVal++
  } else {
    alert(`Insufficient funds!`)
  }
}

function updateVal (id, newval) {
  document.getElementById(id).innerHTML = newval
}

function ShowUpgCost() {
  const ihtml = document.getElementById(`upgCost`).innerHTML
  document.getElementById(`upgCost`).innerHTML = ihtml.replace(`{%}`, upgCost)
}
