import Board from "./Board";

function SoloBattle() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6"></h1>
      <Board />
    </div>
  );
}

export default SoloBattle;
