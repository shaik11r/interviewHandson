import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Tictactoe = () => {
  const intialBoard = Array(9).fill(null);

  const [board, setBoard] = useState(intialBoard);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [player1Wins, setPlayer1Wins] = useState(localStorage.getItem("player1Wins") || 0);
  const [player2Wins, setPlayer2Wins] = useState(localStorage.getItem("player2Wins") || 0);
  const [modalOpen, setModalOpen] = useState(false);

  const savedPlayerWinstolocalstorage = () => {
    localStorage.setItem("player1Wins", player1Wins);
    localStorage.setItem("player2Wins", player2Wins);
  };

  const handleClearStats = () => {
    localStorage.removeItem("player1Wins");
    localStorage.removeItem("player2Wins");
    setPlayer1Wins(0);
    setPlayer2Wins(0);
    handleResetGame();
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    handleResetGame();
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("retured value");
        setModalOpen(true);
        return board[a];
      }
    }
    if (!board.includes(null)) {
      setModalOpen(true);
      return "T";
    }
    return null;
  };

  const handleSquareClick = (idx) => {
    if (board[idx] || winner) {
      return;
    }
    const newBoard = board;
    newBoard[idx] = player;

    setBoard(newBoard);

    const result = checkWinner();
    if (result !== null) {
      if (result === "X") {
        setPlayer1Wins((prev) => Number(prev) + 1);
      } else if (result === "O") {
        setPlayer2Wins((prev) => Number(prev) + 1);
      }
      setWinner(() => result);
    }
    setPlayer(player === "X" ? "O" : "X");
  };

  const handleResetGame = () => {
    setBoard(intialBoard);
    setPlayer("X");
    setWinner(null);
  };
  useEffect(() => {
    savedPlayerWinstolocalstorage();
  }, [player1Wins, player2Wins]);

  return (
    <>
      <div
        style={{ display: "grid", gridTemplateColumns: "5rem 5rem 5rem", marginBottom: "2rem" }}
        className="tictactoebody">
        {board.map((val, index) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 180, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="cell"
              key={index}
              style={{
                width: "5rem",
                height: "5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                borderRadius: "16px",
              }}
              onClick={() => handleSquareClick(index)}>
              {val}
            </motion.div>
          );
        })}
      </div>
      {modalOpen && (
        <Modal
          handleClose={handleCloseModal}
          text={
            winner === "T"
              ? "😒👀it's a Tie"
              : winner === "X"
              ? "✨player One wins✨"
              : "🎉player Two wins🎉"
          }></Modal>
      )}
      <div style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>Player One Wins: {player1Wins}</div>
        <div>Player Two Wins : {player2Wins}</div>
      </div>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "0rem",
        }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          onClick={handleResetGame}>
          New Game 🎮
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          onClick={handleClearStats}>
          Clear Stats 🧹
        </motion.button>
      </div>
    </>
  );
};

export default Tictactoe;
