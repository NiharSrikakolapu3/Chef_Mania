import { PiecesList } from "./Pieces";

function Board(props) {
  function getPiece(cell) {
    if (!cell || !cell.alive) return null;

    return PiecesList.find((p) => p.name === cell.name);
  }


  const flippedRows = [...props.data].reverse();

  return (
    <div className="grid grid-cols-5 gap-1 w-189 h-134 bg-black p-1 rounded-lg shadow-lg">
      {flippedRows.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const piece = getPiece(cell);

          return (
            <div
              key={`${4 - rowIndex}-${colIndex}`}
              className="bg-blue-300 border border-red-400 flex items-center justify-center relative z-10"
            >
              {piece && (
                <div
                  className="w-5 h-5 object-contain"
                  style={{ position: "relative", zIndex: 20 }}
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