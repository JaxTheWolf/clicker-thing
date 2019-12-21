const clickBtn = document.getElementById(`clickbtn`)
const upgBtn = document.getElementById(`upgbtn`)
const lT = document.getElementById(`lighttheme`)
const dT = document.getElementById(`darktheme`)
const theme = document.getElementById(`theme`)
const themes = { 0: `/public/dark.css`, 1: `/public/light.css` }

let pt = 0
let clickVal = 1
let upgCost = 75

const click = () => {
  pt = pt + clickVal
  updateVal(`p1`, pt)
  setCookie(`points`, pt, 365)
}

const upgrade = () => {
  if (pt >= upgCost) {
    pt = pt - upgCost
    upgCost = Math.floor(1.75 * upgCost)
    clickVal++
    updateVal(`p1`, pt)
    updateVal(`p2`, `Upgrade cost: ${upgCost}`)
    setCookie(`points`, pt, 365)
    setCookie(`upgcost`, upgCost, 365)
    setCookie(`clickval`, clickVal, 365)
  } else {
    alert(`Insufficient funds!`)
  }
}

const updateVal = (id, newval) => {
  document.getElementById(id).innerHTML = newval
}

const setCookie = (cname, cvalue, exdays) => {
  const date = new Date()
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${cname} = ${cvalue};expires=${expires};path=/`
}

const getCookie = (cname) => {
  const name = `${cname}=`
  const decoded = decodeURIComponent(document.cookie)
  const cookArr = decoded.split(`;`)
  for (let i = 0; i < cookArr.length; i++) {
    let cook = cookArr[i]
    while (cook.charAt(0) === ` `) {
      cook = cook.substring(1)
    }
    if (cook.indexOf(name) === 0) {
      return cook.substring(name.length, cook.length)
    }
  }
  return null
}

const updateTheme = (t) => {
  theme.href = themes[t]
  setCookie(`theme`, themes[t], 365)
}

// Event handlers
clickBtn.onclick = click
upgBtn.onclick = upgrade
lT.onclick = () => { updateTheme(1) }
dT.onclick = () => { updateTheme(0) }
document.body.onload =
  (() => {
    pt = getCookie(`points`) ? parseInt(getCookie(`points`)) : pt
    upgCost = getCookie(`upgcost`) ? parseInt(getCookie(`upgcost`)) : upgCost
    clickVal = getCookie(`clickval`) ? parseInt(getCookie(`clickval`)) : clickVal
    theme.href = getCookie(`theme`) ? getCookie(`theme`) : theme.href
    updateVal(`p2`, `Upgrade cost: ${upgCost}`)
    updateVal(`p1`, pt)
  })()
