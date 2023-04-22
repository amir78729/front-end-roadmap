// Word selection
// New word = ["Word name", "Hint"]
const word = [
    ["Hangman", "That game you are playing right now."],
    ["HTML", "Markup language for creating Web pages."],
    ["CSS", "Wep page styles"],
    ["PHP", "A very popular server scripting language."],
    ["JavaScript", "Make web-page dynamic without reload the web page."],
    ["Java", "Run 15 billion devices.\nA program can be run in Windows, Linux and Mac"],
    ["SoloLearn", "A company that everyone can code for fun and share."],
    ["Love", "What is ?\nBaby don't hurt me\nDon't hurt me\nNo more"],
    ["Document", "A lot of text in the a file."],
    ["Playground", "There school kids go to."],
    ["Run", "Usain bolt."],
    ["Code", "let hw = 'Hello World';"],
    ["Samsung", "A company create Phone, Tv, Monitor, SDD, Memory chip..."],
    ["Super Mario", "A very popular game in Nintendo 64 that have red hat."],
    ["Star", "Super Mario like to get."],
    ["Clock", "14:12 or 14pm"],
    ["Binary Clock", "A clock that only use 0 or 1."],
    ["Sword", "Link from Zelda have on the hand."],
    ["Girl", "Not boy but ?"],
    ["Boy", "Not girl but ?"],
    ["Female", "Other name as girl."],
    ["Male", "Other name as boy."],
    ["Smartphone", "Something you've always on you."]
]

// Game keyboard
const tastatur = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Game memory
let select = 0
let wordLeft = []
let fail = 0

// Web-page onload
window.onload = function() {
    getById("moveKeybord").addEventListener('touchmove', function(e) {
        let wH = window.innerHeight
        let tY = e.touches[0].clientY
        let eL = getById("tastatur")
        let resY = wH - tY - eL.offsetHeight
        if(resY < 0) {
            resY = 0
        } else if(resY > wH / 2) {
            resY = wH / 2
        }
        eL.style.bottom = resY + "px"
    }, false)
    createTastur()
}

// Start game
function startGame() {
    getById("home").className = "h"
    getById("result").className = "h"
    newGame()
}

// New game
function newGame() {
    clearTastatur()
    clearPlayer()
    createWord()
}

// Clear keyboard
function clearTastatur() {
    let e = document.getElementsByClassName("b")
    for(let a = 0; a < e.length; a++) {
        e[a].setAttribute("data", "")
    }
}

// Clear player
function clearPlayer() {
    fail = 0
    wordLeft = []
    getById("g0").setAttribute("data", "false")
    getById("g1").setAttribute("data", "false")
    getById("g2").setAttribute("data", "false")
    getById("g3").setAttribute("data", "false")
    getById("g4").setAttribute("data", "false")
    getById("g5").setAttribute("data", "false")
    getById("g5").setAttribute("r", "false")
    getById("g5").setAttribute("l", "false")
    getById("g6").setAttribute("data", "false")
    getById("g6").setAttribute("l", "false")
    getById("g6").setAttribute("r", "false")
    getById("hintButton").setAttribute("data", "false")
    getById("hint").style.display = "none"
}

// Get new word
function createWord() {
    let d = getById("letter")
    d.innerHTML = ""
    select = Math.floor(Math.random() * word.length)
    for(let a = 0; a < word[select][0].length; a++) {
        let x = word[select][0][a].toUpperCase()
        let b = document.createElement("span")
        b.className = "l" + (x === " " ? " ls" : "")
        b.innerHTML = "&nbsp"
        b.id = "l" + a;
        d.appendChild(b)
        
        if(x !== " ") {
            if(wordLeft.indexOf(x) === -1) {
                wordLeft.push(x)
            }
        }
    }
}

// Create keyboard
function createTastur() {
    let tas = getById("keybord")
    tas.innerHTML = ""
    for(let a = 0; a < tastatur.length; a++) {
        let b = document.createElement("span")
        b.className = "b"
        b.innerText = tastatur[a]
        b.setAttribute("data", "")
        b.onclick = function() {
            bTas(this)
        }
        tas.appendChild(b)
    }
}

// Game check, If show next error / game end
function bTas(a) {
    if(a.getAttribute("data") === "") {
        let x = isExist(a.innerText)
        a.setAttribute("data", x)
        if(x) {
            if(wordLeft.length === 0) {
                gameEnd(true)
            }
        } else {
            showNextFail()
        }
    }
}

// If letter "X" exist
function isExist(e) {
    e = e.toUpperCase()
    let x = wordLeft.indexOf(e)
    if(x !== -1) {
        wordLeft.splice(x, 1)
        typeWord(e)
        return true
    }
    return false
}

// Show next fail drawing
function showNextFail() {
    fail++
    switch(fail) {
        case 1:
            getById("g0").setAttribute("data", "true")
            break;
        
        case 2:
            getById("g1").setAttribute("data", "true")
            break;
        
        case 3:
            getById("g2").setAttribute("data", "true")
            break;
        
        case 4:
            getById("g3").setAttribute("data", "true")
            getById("hintButton").setAttribute("data", "true")
            break;
        
        case 5:
            getById("g4").setAttribute("data", "true")
            break;
        
        case 6:
            getById("g5").setAttribute("data", "true")
            break;
        
        case 7:
            getById("g5").setAttribute("l", "true")
            break;
        
        case 8:
            getById("g5").setAttribute("r", "true")
            break;
        
        case 9:
            getById("g6").setAttribute("data", "true")
            getById("g6").setAttribute("l", "true")
            break;
        
        case 10:
            getById("g6").setAttribute("r", "true")
            gameEnd(false)
            break;
    }
}

function typeWord(e) {
    // complete this section...
}

// Game result
function gameEnd(e) {
    let d = getById("result")
    d.setAttribute("data", e)
    if(e) {
        getById("rT").innerText = "You Win!"
        getById("rM").innerHTML = "Congratulations, you found the word!<br/><br/>Good Job!"
    } else {
        getById("rT").innerText = "You Lose!"
        getById("rM").innerHTML = "The word was <br/><br/>\"" + word[select][0].toUpperCase() + "\"<br/><br/>Better luck next time."
    }
    d.className = ""
}

// Show hint
function hint() {
    getById("hintText").innerText = word[select][1]
    getById("hint").style.display = "block"
}

// Exit hint
function hintExit() {
    getById("hint").style.display = "none"
}

// Get HTML ID element by name
function getById(a) {
    return document.getElementById(a)
}
