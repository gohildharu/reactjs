import React, { useState } from "react";
import '../App.css';


const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = (newBoard) => {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[a] === newBoard[c]
            ) {
                setWinner(newBoard[a]);
                return;
            }
        }

        if (!newBoard.includes("")) {
            setWinner("Draw");
        }
    };

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";

        setBoard(newBoard);
        setIsXTurn(!isXTurn);
        checkWinner(newBoard);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setIsXTurn(true);
        setWinner(null);
    };

    return (
        <div className="game">
            <h2>Tic Tac Toe</h2>

            <div className="board">
                {board.map((value, index) => (
                    <div
                        key={index}
                        className="cell"
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </div>
                ))}
            </div>

            <h3>
                {winner
                    ? winner === "Draw"
                        ? "Match Draw!"
                        : `Winner: ${winner}`
                    : `Turn: ${isXTurn ? "X" : "O"}`}
            </h3>

            <button onClick={resetGame}>Restart</button>
        </div>
    );
};

export default TicTacToe;
