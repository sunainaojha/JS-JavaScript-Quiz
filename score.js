var scoresList = document.querySelector(".scoresList")
var previousHistory = JSON.parse(localStorage.getItem("userScores")) || []

for(let i = 0; i < previousHistory.length; i++) {
    var li = document.createElement("li")
    li.textContent = previousHistory[i].initials + " - " + previousHistory[i].score
    scoresList.append(li)
}

