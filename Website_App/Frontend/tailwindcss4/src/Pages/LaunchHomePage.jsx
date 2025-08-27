import GameCards from "../Components/LaunchPageUI/GameCards";
import Header from "../Components/LaunchPageUI/Header";
import Media from "../Components/LaunchPageUI/Media";
import Story from "../Components/LaunchPageUI/Story";

function LaunchHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to bg-orange-50">
      <Header />
      <Story />
      <GameCards />
      <Media />
    </div>
  );
}

export default LaunchHomePage;
