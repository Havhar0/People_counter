let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {

    count += 1
    countEl.textContent = count

}

function save() {

    let countsave = count + " - "
    saveEl.textContent += countsave
    count = 0
    countEl.textContent = 0

}