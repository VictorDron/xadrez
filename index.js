const board = document.getElementById("chessboard");
const size = 8;

// Cria os quadrados do tabuleiro
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const square = document.createElement("div");
    square.className = "square";
    if ((i + j) % 2 === 0) {
      square.className += " light";
    } else {
      square.className += " dark";
    }
    board.appendChild(square);
  }
}

// Cria as peças do jogo
const pieces = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

for (let i = 0; i < size; i++) {
  const pawn = document.createElement("div");
  pawn.className = "piece pawn white";
  board.children[8 + i].appendChild(pawn);

  const piece = document.createElement("div");
  piece.className = `piece ${pieces[i]} white`;
  board.children[i].appendChild(piece);

  const oppPawn = document.createElement("div");
  oppPawn.className = "piece pawn black";
  board.children[48 + i].appendChild(oppPawn);

  const oppPiece = document.createElement("div");
  oppPiece.className = `piece ${pieces[i]} black`;
  board.children[56 + i].appendChild(oppPiece);
}
