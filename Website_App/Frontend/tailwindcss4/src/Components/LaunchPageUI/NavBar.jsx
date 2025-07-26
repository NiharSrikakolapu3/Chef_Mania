function NavBar() {
  return (
    <nav className="fixed top-4 left-310 z-50 flex items-center gap-1 bg-black/40 p-2 px-3 rounded-xl border border-blue-700 shadow-xl">
      {[
        { id: "Home", label: "Home" },
        { id: "Story", label: "Story" },
        { id: "GameCard", label: " Game Card" },
        { id: "Media", label: " Media" },
        { id: "AboutUs", label: " About Us" },
      ].map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="relative px-4 py-2 font-bold text-white group transition-all duration-300"
        >
          <span className="relative z-10 text-sm tracking-wide">
            {item.label}
          </span>
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-red-500/40 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-600 " />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-600" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-600 " />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-600 " />
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
