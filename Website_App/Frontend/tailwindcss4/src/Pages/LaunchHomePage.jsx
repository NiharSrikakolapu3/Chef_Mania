import GameCards from "../Components/LaunchPageUI/GameCards";
import Header from "../Components/LaunchPageUI/Header";
import Story from "../Components/LaunchPageUI/Story";

function LaunchHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to bg-orange-50">
      <Header />
      <Story />
      <GameCards />
    </div>
  );
}

export default LaunchHomePage;
