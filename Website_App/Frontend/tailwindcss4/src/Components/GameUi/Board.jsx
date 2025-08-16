import { PiecesList } from "../GameUi/Pieces";
import { useMemo } from "react";

function Board(props) {
  function getPiece(cell, x, y) {
    if (!cell || !cell.alive) return null;
    const piece = PiecesList.find((p) => p.name === cell?.name);
    if (!piece) return null;
    return {
      ...piece,
      x,
      y,
    };
  }

  function checkCellValidity(cell) {
    return cell === null || cell.chef === true;
  }

  function handleCellClicked(actualRow, colIndex) {
    const clickedCell = props.data[actualRow][colIndex];
    const clickedPiece = getPiece(clickedCell, actualRow, colIndex);

    const isValidMove = filteredMoves.some(
      (move) => move.x === actualRow && move.y === colIndex
    );

    // Deselect if clicking the same piece
    if (
      props.selectedPiece &&
      props.selectedPiece.x === actualRow &&
      props.selectedPiece.y === colIndex
    ) {
      props.setSelectedPiece(null);
      return;
    }

    // Select a new piece (non-chef)
    if (props.selectedPiece === null && clickedPiece?.chef === false) {
      props.setSelectedPiece({
        piece: clickedPiece,
        x: actualRow,
        y: colIndex,
      });
    }

    // Make a move
    else if (props.selectedPiece) {
      const from = {
        x: props.selectedPiece.x,
        y: props.selectedPiece.y,
      };
      const to = {
        x: actualRow,
        y: colIndex,
      };

      if (props.selectedCard !== null && isValidMove) {
        props.makeMove(from, to, props.selectedCard);
        props.setSelectedPiece(null);
      } else {
        alert(
          "Make sure that you selected a card and moved to a square highlighed by green and that its your turn"
        );
      }
    }
  }

  const filteredMoves = useMemo(() => {
    return props.validMoves
      .filter((move) => {
        const cell = props.data[move.x][move.y];
        return checkCellValidity(cell);
      })
      .map((move) => ({
        x: move.x,
        y: move.y,
      }));
  }, [props.validMoves, props.data]);

  return (
    <div className="grid grid-cols-5 gap-1 w-189 h-150 bg-black p-1 rounded-lg shadow-lg">
      {props.data.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const actualRow = rowIndex;

          const isSelected =
            props.selectedPiece &&
            props.selectedPiece.x === actualRow &&
            props.selectedPiece.y === colIndex;

          const isValidMove = filteredMoves.some(
            (move) => move.x === actualRow && move.y === colIndex
          );

          const piece = getPiece(cell, actualRow, colIndex);

          return (
            <div
              key={`${actualRow}-${colIndex}`}
              onClick={(e) => {
                e.stopPropagation();
                handleCellClicked(actualRow, colIndex);
              }}
              className={`bg-blue-300 border flex items-center justify-center relative cursor-pointer
                ${isSelected ? "ring-4 ring-yellow-400" : ""}
                ${
                  isValidMove
                    ? "border-4 border-green-400"
                    : "border border-red-400"
                }
              `}
            >
              {piece && (
                <div
                  className="w-5 h-5 object-contain pointer-events-none"
                  style={{ position: "relative" }}
                >
                  {piece.img}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Board;
