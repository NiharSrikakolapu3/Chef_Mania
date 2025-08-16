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

    if (clickedPiece?.chef === false) {
      props.setSelectedPiece({
        piece: clickedPiece,
        x: actualRow,
        y: colIndex,
      });
      return;
    }
    if (props.selectedPiece && isValidMove) {
      const from = {
        x: props.selectedPiece.x,
        y: props.selectedPiece.y,
      };
      const to = {
        x: actualRow,
        y: colIndex,
      };

      if (props.selectedCard !== null) {
        props.makeMove(from, to, props.selectedCard);
        props.setSelectedPiece(null);
      } else {
        alert(
          "Make sure that you selected a card and moved to a square highlighted by green and that its your turn"
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
          const isBlackTile = (actualRow + colIndex) % 2 === 0;

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
              className={`flex items-center justify-center relative cursor-pointer
                ${isBlackTile ? "bg-black" : "bg-white"}
                ${isSelected ? "ring-4 ring-yellow-400" : ""}
                ${isValidMove ? "ring-4 ring-green-400" : ""}
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
