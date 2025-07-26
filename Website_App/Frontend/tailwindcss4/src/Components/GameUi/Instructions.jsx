const sections = [
  {
    title: "Game Pieces",
    icon: "👨‍🍳",
    content: `Each side has:
- 1 Main Chef
- 4 Assistant Cooks

Main Chef starts in the center back row.`,
  },
  {
    title: "Cards & Movement",
    icon: "🎴",
    content: `Each turn you:
- Pick 1 of your 2 move cards
- Move a piece according to the highlighted squares

After your move, the card is exchanged with the center card.`,
  },
  {
    title: "Winning the Game",
    icon: "🏆",
    content: `You win if:
- You capture the opponent’s Main Chef
- OR move your Main Chef to their starting throne!`,
  },
  {
    title: "Controls & Gameplay",
    icon: "🖱️",
    content: `Click on a piece to select it.
Valid moves are shown as green highlights.
Use cards strategically as they rotate each round.`,
  },
];

export default function Instructions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8 font-sans">
      <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-md">
        How to Play Chef Mania
      </h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {sections.map(({ title, icon, content }, idx) => (
          <section
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-lg border border-blue-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <header className="flex items-center mb-4">
              <span className="text-4xl mr-4">{icon}</span>
              <h2 className="text-3xl font-bold text-blue-800">{title}</h2>
            </header>

            <p className="whitespace-pre-line text-gray-700 text-lg leading-relaxed select-text">
              {content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
