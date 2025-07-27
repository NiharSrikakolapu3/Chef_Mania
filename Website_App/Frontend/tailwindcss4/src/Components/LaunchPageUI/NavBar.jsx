import React from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { id: "Home", label: "Home" },
    { id: "Story", label: "Story" },
    { id: "GameCard", label: "Game Card" },
    { id: "Media", label: "Media" },
    { id: "AboutUs", label: "About Us" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-3 backdrop-blur-sm bg-black/20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center md:hidden">
          <div className="text-xl font-bold text-white tracking-wider">
            GAME<span className="text-red-500">MENU</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-blue-800/50 hover:bg-blue-700/60 transition-all"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
          </button>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="flex flex-wrap justify-center gap-1 px-4 py-3 bg-black/40 border border-blue-700 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out">
            {menuItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-gray-900/95 backdrop-blur-xl transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 px-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="w-full max-w-xs text-center px-4 py-3 font-bold text-white rounded-lg bg-blue-900/40 hover:bg-blue-800/60 transition-all duration-300"
              >
                <span className="relative z-10 text-sm tracking-wide">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
function NavItem({ item }) {
  return (
    <a
      href={`#${item.id}`}
      className="relative px-4 py-2 font-bold text-white group transition-all duration-300"
    >
      <span className="relative z-10 text-sm tracking-wide">{item.label}</span>

      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-red-500/40 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-600" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-600" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-600" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-600" />
    </a>
  );
}

export default NavBar;
