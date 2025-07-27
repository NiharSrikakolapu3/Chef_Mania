import NavBar from "./NavBar";
import backgroundImg from "../../Assets/Chef_Mania_Background.png";
import titleImg from "../../Assets/Title.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function launchButton() {
    navigate("/game");
  }
  return (
    <section id="Home" className="relative">
      <NavBar />
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-16">
        <div
          className="absolute inset-0 bg-cover z-0"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: "center 30%",
          }}
        />
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center pt-8">
            <img
              src={titleImg}
              alt="Chef Mania Title"
              className="w-3/4 max-w-md drop-shadow-lg"
            />
          </div>

          <div className="flex-1 flex flex-col items-center justify-start mt-8 space-y-8">
            <button
              onClick={launchButton}
              className="bg-gradient-to-r from-yellow-400 to-red-500 text-white text-xl font-bold px-8 py-3 rounded-2xl shadow-lg hover:scale-105 hover:from-yellow-300 hover:to-red-400 transition-all duration-300"
            >
              Launch Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
