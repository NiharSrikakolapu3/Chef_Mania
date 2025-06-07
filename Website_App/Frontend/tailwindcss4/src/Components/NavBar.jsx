function NavBar() {
  return (
    <nav className="fixed top-3 right-5 z-50 flex gap-4">
      <a
        href="#home"
        className="bg-white text-black px-5 py-2 font-semibold text-lg shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-green-300 hover:to-green-500"
      >
        Home
      </a>
      <a
        href="#play"
        className="bg-white text-black px-5 py-2 font-semibold text-lg duration-300 shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-green-300 hover:to-green-500"
      >
        Play
      </a>
      <a
        href="#Story"
        className="bg-white text-black px-5 py-2 font-semibold text-lg shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-green-300 hover:to-green-500"
      >
        Story
      </a>
      <a
        href="#Media"
        className="bg-white text-black px-5 py-2 font-semibold text-lg  shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-green-300 hover:to-green-500"
      >
        Media
      </a>
      <a
        href="#AboutUs"
        className="bg-white text-black px-5 py-2 font-semibold text-lg  shadow-lg rounded-sm hover:bg-gradient-to-br hover:from-green-300 hover:to-green-500"
      >
        About Us
      </a>
    </nav>
  );
}

export default NavBar;
