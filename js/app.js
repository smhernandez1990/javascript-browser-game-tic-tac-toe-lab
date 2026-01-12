// Display an empty tic - tac - toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is(X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game(tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.

//1) Define the required variables used to track the state of the game.

let board;
let turn;
let winner;
let tie;

//2) Store cached element references.


const squareEls = document.querySelectorAll('.sqr');
const messageEL = document.querySelector('#message');

console.log(squareEls, messageEL);

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

function init() {
  board = ['', '', '', '', '', '', '', '', ''];
  turn = 'X';
  winner = false;
  tie = false;
  render();
};

init();

console.log(init());


//4) The state of the game should be rendered to the user.

function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        squareEls[i].textContent = board[i];
        if (squareEls[i].textContent === 'X') {
            squareEls[i].style.backgroundColor = 'dodgerblue';
            squareEls[i].style.color = 'white';
        } else if (squareEls[i].textContent === 'O') {
            squareEls[i].style.backgroundColor = 'tomato';
            squareEls[i].style.color = 'white';
        };
    };
};

function updateMessage() {
    if (winner === false && tie === false) {
        messageEL.textContent = `Player ${turn}'s turn`;
    } else if (winner === true && tie === false) {
        messageEL.textContent = `Player ${turn} wins. Flawless Victory`;
    } else if (winner === false && tie === true) {
        messageEL.textContent = `You Tied`;
    };
};

//5) Define the required constants.

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//6) Handle a player clicking a square with a `handleClick` function.

function handleClick(event) {
    const squareIndex = Array.from(squareEls).indexOf(event.target);
    if (board[squareIndex] !== '' || winner === true) {
        return;
    };
    placePiece(squareIndex);
    console.log(board);
    checkForWinner();
    console.log(winner);
    checkForTie();
    console.log(tie);
    switchPlayerTurn();
    console.log(turn);
    render();
};

for (let i = 0; i < squareEls.length; i++) {
    squareEls[i].addEventListener('click', handleClick);
};

function placePiece(i) {
    board[i] = turn;
};

function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
            return;
        };
    };
};

function checkForTie() {
    if (board.includes('') === false) {
        tie = true;
    };
};

function switchPlayerTurn() {
    if (winner === true) {
        return;
    } else if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    };
};

//7) Create Reset functionality.
