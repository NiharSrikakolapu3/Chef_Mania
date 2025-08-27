import React from "react";
import { signUp, login, logout } from "../../firebase/auth";

function NavBar() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [error, setError] = React.useState("");

  const menuItems = [
    { id: "Home", label: "Home" },
    { id: "Story", label: "Story" },
    { id: "GameCard", label: "Game Card" },
    { id: "Media", label: "Media" },
    { id: "Profile", label: "Profile" },
  ];

  const handleLogin = async () => {
    try {
      const profile = await login(email, password);
      console.log("Login result:", profile);
      setCurrentUser(profile);
      setError("");
      setShowModal(false);
      alert(`Logged in successfully as ${profile?.name || profile?.email}`);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const profile = await signUp(email, password, name);
      // profile now includes the name from Firestore write
      console.log("Sign up result:", profile);
      setCurrentUser(profile);
      setError("");
      setShowModal(false); // modal closes immediately
      alert(`Signed up successfully as ${profile.name}`);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentUser(null);
      alert("Logged out successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-4 py-3 backdrop-blur-sm bg-black/20">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center gap-1 px-4 py-3 bg-black/40 border border-blue-700 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out">
            {menuItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                currentUser={currentUser}
                setShowModal={setShowModal}
                handleLogout={handleLogout}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Modal for Login / SignUp */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-sm flex flex-col gap-4 shadow-2xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-white text-lg font-bold text-center">
              {isSignUp ? "Sign Up" : "Login"}
            </h2>

            {isSignUp && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-3 py-2 rounded-md bg-gray-800 text-white w-full"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-md bg-gray-800 text-white w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded-md bg-gray-800 text-white w-full"
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              onClick={isSignUp ? handleSignUp : handleLogin}
              className="bg-blue-700 text-white py-2 rounded-md font-bold hover:bg-blue-600 transition-all w-full"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>

            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-blue-400 hover:underline self-center"
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up"}
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-red-500 hover:underline self-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({ item, currentUser, setShowModal, handleLogout }) {
  if (item.id === "Profile") {
    return (
      <button
        onClick={() => {
          if (!currentUser) setShowModal(true);
          else handleLogout();
        }}
        className="relative px-4 py-2 font-bold text-white group transition-all duration-300"
      >
        {currentUser ? `Logout (${currentUser.name})` : "Login / Sign Up"}
      </button>
    );
  }

  return (
    <a
      href={`#${item.id}`}
      className="relative px-4 py-2 font-bold text-white group transition-all duration-300"
    >
      <span className="relative z-10 text-sm tracking-wide">{item.label}</span>
    </a>
  );
}

export default NavBar;
