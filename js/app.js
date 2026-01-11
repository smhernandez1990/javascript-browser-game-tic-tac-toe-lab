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
  board = ['X', '', '', 'O', '', '', '', '', ''];
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
        messageEL.textContent = `Player${turn} wins. Flawless Victory`;
    } else if (winner === false && tie === true) {
        messageEL.textContent = `You Tied`;
    };
};


//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
