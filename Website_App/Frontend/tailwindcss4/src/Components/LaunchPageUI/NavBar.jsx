function NavBar() {
  return (
    <nav className="fixed top-3 right-5 z-50 flex gap-4">
      <a
        href="#Home"
        className="bg-white text-black px-5 py-2 font-semibold text-lg shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-purple-300 hover:to-purple-500"
      >
        Home
      </a>
      <a
        href="#Story"
        className="bg-white text-black px-5 py-2 font-semibold text-lg shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-purple-300 hover:to-purple-500"
      >
        Story
      </a>
      <a
        href="#GameCard"
        className="bg-white text-black px-5 py-2 font-semibold text-lg shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-purple-300 hover:to-purple-500"
      >
        Game Card
      </a>
      <a
        href="#Media"
        className="bg-white text-black px-5 py-2 font-semibold text-lg  shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-purple-300 hover:to-purple-500"
      >
        Media
      </a>
      <a
        href="#AboutUs"
        className="bg-white text-black px-5 py-2 font-semibold text-lg  shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-purple-300 hover:to-purple-500"
      >
        About Us
      </a>
    </nav>
  );
}

export default NavBar;
