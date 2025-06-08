import { useNavigate } from "react-router-dom";
import backgroundImg from "../Assets/Chef_Mania_Background.png";
import Title from "../Assets/Title.png";

function ChefManiaGame() {
  const navigate = useNavigate();

  function quitGame() {
    navigate("/");
  }

  const buttonStyle = `
    relative px-8 py-4 
    text-3xl font-bold 
    text-yellow-300 
    bg-purple-600 
    border-4 border-yellow-500 
    rounded-lg 
    shadow-lg 
    transition-all 
    duration-200 
    hover:scale-110 
    hover:text-blue-300 
    hover:bg-purple-800 
    active:scale-95
  `;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: "center 40%",
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center pt-8">
          <img
            src={Title}
            alt="Chef Mania Title"
            className="w-3/4 max-w-md drop-shadow-lg"
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-start mt-8 space-y-8">
          <button className={buttonStyle}>START GAME</button>
          <button className={buttonStyle}>INSTRUCTIONS</button>
          <button onClick={quitGame} className={buttonStyle}>
            QUIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChefManiaGame;
