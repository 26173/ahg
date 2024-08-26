const cells = document.querySelectorAll(".cell");
const statusText = document = document.querySelector("#statusText");
const restartBtn = document = document.querySelector("#restartBtn");
const winConditions =[
    [0, 1, 2],
    [3, 4, 5],
    [5, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventList("click", cellClicked))
    restartBtn.addEventListerner("click", restartGame);
    statusText.textContent = $;{currentPlayer}'s turn';
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute(cellIndex);

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIdex);
    changePlayer();
    checkWinner();
}{}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer(currentPlayer == "X") ? "0" : "X";
    statusText.textContent = $;{currentPlayer}'s turn';
}
function checkWinner(){
    let roudWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winconditions[i];
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellc = options[condition[2]]

        if (cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = '${currentPlayer} wins!';
        running = false;
    }
    else if(!options.includes()){
        statusText.textContent = 'Draw!';
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = '${currentPlayer}s turn' ;
    cells.forEach(cell => cell.textContent = "")
    running = true;
}