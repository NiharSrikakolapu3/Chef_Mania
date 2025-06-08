import NavBar from "./NavBar";
import backgroundImg from "../Assets/Chef_Mania_Background.png";
import titleImg from "../Assets/Title.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function launchButton() {
    navigate("/game");
  }
  return (
    <section id="Home">
      <div>
        <NavBar />
        <header className="relative h-[85vh] w-full">
          <img
            src={backgroundImg}
            alt="Header Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <img
              src={titleImg}
              alt="Chef Mania Title"
              className="w-3/4 max-w-md md:max-w-xl lg:max-w-2xl"
            />
            <button
              onClick={() => launchButton()}
              className="mt-[-10px] bg-gradient-to-r from-yellow-400 to-red-500 text-white text-xl font-bold px-8 py-3 rounded-2xl shadow-lg hover:scale-105 hover:from-yellow-300 hover:to-red-400 transition-all duration-300"
            >
              Launch Game
            </button>
          </div>
          <div></div>
        </header>
      </div>
    </section>
  );
}

export default Header;
