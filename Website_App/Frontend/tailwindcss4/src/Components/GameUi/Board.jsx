function Board() {
  const row = 5;
  const column = 5;

  const board = Array(row)
    .fill(null)
    .map(() => Array(column).fill(null));

  return (
    <div className="grid grid-cols-5 gap-1 w-130 h-130 bg-black p-1 rounded-lg shadow-lg">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div className="bg-blue-300 border border-red-400 flex items-center justify-center"></div>
        ))
      )}
    </div>
  );
}

export default Board;
