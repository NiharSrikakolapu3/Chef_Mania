function GameCards() {
  return (
    <section id="GameCard" className="flex flex-col items-center">
      <div className="text-center mb-6">
        <header className="text-blue-400 font-semibold mb-4 hover:underline">
          Display Cards
        </header>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {/* Curry card */}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-91.5">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-5 "
          >
            Curry
          </header>

          <header className="relative w-[360px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              shapeRendering="crispEdges"
              className="w-50 h-70 -ml-5 scale-[1.6]"
            >
              <path
                stroke="#d0694d"
                d="M11 6h2M9 7h2M13 7h2M8 8h1M15 8h1M7 9h1M7 10h1M7 11h1"
              />
              <path
                stroke="#ffff00"
                d="M11 7h2M9 8h2M13 8h2M8 9h2M11 9h2M15 9h1M8 10h1M10 10h2M13 10h1M15 10h1M9 11h2M12 11h1M14 11h1M11 12h2"
              />
              <path stroke="#adc000" d="M11 8h2M9 10h1" />
              <path stroke="#ffd500" d="M10 9h1M13 9h1M11 11h1M13 11h1" />
              <path stroke="rgba(255,255,0,0.9803921568627451)" d="M14 9h1" />
              <path
                stroke="#b1614c"
                d="M16 9h1M16 10h1M8 11h1M15 11h2M8 12h3M13 12h3M9 13h6M11 14h2"
              />
              <path stroke="#ffbd00" d="M12 10h1" />
              <path stroke="rgba(255,255,0,0.996078431372549)" d="M14 10h1" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shapeRendering="crispEdges"
              className="w-50 h-50 -ml-10"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 1h21M2 2h1M6 2h1M10 2h1M14 2h1M18 2h1M22 2h1M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h21M2 6h1M6 6h1M10 6h1M14 6h1M18 6h1M22 6h1M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h21M2 10h1M6 10h1M10 10h1M14 10h1M18 10h1M22 10h1M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h21M2 14h1M6 14h1M10 14h1M14 14h1M18 14h1M22 14h1M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h21M2 18h1M6 18h1M10 18h1M14 18h1M18 18h1M22 18h1M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 2h3M7 2h3M11 2h3M15 2h3M19 2h3M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 6h3M7 6h3M11 6h3M15 6h3M19 6h3M3 7h3M7 7h3M11 7h3M15 7h3M19 7h3M3 8h3M7 8h3M11 8h3M15 8h3M19 8h3M3 10h3M19 10h3M3 11h3M19 11h3M3 12h3M19 12h3M3 14h3M7 14h3M15 14h3M19 14h3M3 15h3M7 15h3M15 15h3M19 15h3M3 16h3M7 16h3M15 16h3M19 16h3M3 18h3M7 18h3M11 18h3M15 18h3M19 18h3M3 19h3M7 19h3M11 19h3M15 19h3M19 19h3M3 20h3M7 20h3M11 20h3M15 20h3M19 20h3"
              />
              <path
                stroke="#6aab4d"
                d="M7 10h3M15 10h3M7 11h3M15 11h3M7 12h3M15 12h3M11 14h3M11 15h3M11 16h3"
              />
              <path stroke="#4d7eab" d="M11 10h3M11 11h3M11 12h3" />
            </svg>
          </header>
        </div>

        {/* Taco card */}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-93  ">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-6 "
          >
            Taco
          </header>

          <header className="relative w-[360px] h-[180px] flex justify-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shapeRendering="crispEdges"
              className="w-50 h-33 scale-[1.6]"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#d2c120"
                d="M7 13h2M6 14h1M15 14h1M5 15h1M16 15h1M4 16h1M17 16h1M3 17h1M2 18h1M18 18h1M2 19h1M6 19h2M15 19h2M2 20h1M6 20h8"
              />
              <path stroke="#19c734" d="M9 13h2M14 13h1M6 16h1" />
              <path stroke="#20bc38" d="M11 13h2M7 14h1M7 15h1M4 17h1" />
              <path stroke="#be1b32" d="M13 13h1M5 16h1" />
              <path stroke="#c50c26" d="M8 14h1" />
              <path stroke="#faf19e" d="M9 14h1M8 15h1" />
              <path stroke="#f2e350" d="M10 14h4M9 15h5M7 16h3M6 17h2M5 18h1" />
              <path
                stroke="#ecdc41"
                d="M14 14h1M14 15h2M10 16h7M8 17h10M6 18h12M4 19h2M8 19h7M17 19h2M3 20h3M17 20h2"
              />
              <path stroke="#0fd02d" d="M6 15h1" />
              <path stroke="#431b1b" d="M5 17h1M3 19h1" />
              <path stroke="#9a0c20" d="M3 18h1" />
              <path stroke="#4e2424" d="M4 18h1" />
              <path stroke="#c5b51e" d="M14 20h3" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shapeRendering="crispEdges"
              className="w-50 h-50 -ml-10 -mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 2h21M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h1M6 5h1M10 5h1M14 5h1M18 5h1M22 5h1M2 6h21M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h1M6 9h1M10 9h1M14 9h1M18 9h1M22 9h1M2 10h21M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h1M6 13h1M10 13h1M14 13h1M18 13h1M22 13h1M2 14h21M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h1M6 17h1M10 17h1M14 17h1M18 17h1M22 17h1M2 18h21M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h1M6 21h1M10 21h1M14 21h1M18 21h1M22 21h1M2 22h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 5h3M7 5h3M11 5h3M15 5h3M19 5h3M3 7h3M7 7h3M15 7h3M19 7h3M3 8h3M7 8h3M15 8h3M19 8h3M3 9h3M7 9h3M15 9h3M19 9h3M3 11h3M19 11h3M3 12h3M19 12h3M3 13h3M19 13h3M3 15h3M7 15h3M11 15h3M15 15h3M19 15h3M3 16h3M7 16h3M11 16h3M15 16h3M19 16h3M3 17h3M7 17h3M11 17h3M15 17h3M19 17h3M3 19h3M7 19h3M11 19h3M15 19h3M19 19h3M3 20h3M7 20h3M11 20h3M15 20h3M19 20h3M3 21h3M7 21h3M11 21h3M15 21h3M19 21h3"
              />
              <path
                stroke="#6aab4d"
                d="M11 7h3M11 8h3M11 9h3M7 11h3M15 11h3M7 12h3M15 12h3M7 13h3M15 13h3"
              />
              <path stroke="#4d7eab" d="M11 11h3M11 12h3M11 13h3" />
            </svg>
          </header>
        </div>
        {/* HOTDOG */}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-92">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-3 "
          >
            Hotdog
          </header>

          <header className="relative w-[360px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-5 -mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#b5941b"
                d="M11 7h1M10 8h1M9 9h1M8 10h1M19 10h1M7 11h1M19 11h1M6 12h1M19 12h1M5 13h1M19 13h1M4 14h1M18 14h2M17 15h2M16 16h1M15 17h1M14 18h1M14 19h1M12 20h2M9 21h3"
              />
              <path
                stroke="#cdab2f"
                d="M12 7h2M11 8h2M10 9h3M18 9h1M9 10h2M18 10h1M8 11h2M17 11h2M7 12h3M17 12h2M6 13h2M15 13h4M5 14h3M15 14h3M4 15h2M13 15h4M4 16h2M13 16h3M12 17h3M11 18h3M8 19h6M7 20h5M8 21h1"
              />
              <path
                stroke="#c04256"
                d="M15 7h2M16 8h2M14 9h1M16 9h1M13 10h1M16 10h1M15 11h1M13 12h2M10 13h1M13 13h1M9 14h1M12 14h1M11 15h1M8 16h3M4 17h2M8 17h2M5 18h1M5 19h1"
              />
              <path
                stroke="#d2b342"
                d="M13 8h1M11 10h1M10 11h1M16 12h1M8 13h1M14 14h1M6 15h1M12 16h1M11 17h1M9 18h2M7 19h1"
              />
              <path
                stroke="#b32c42"
                d="M14 8h1M13 9h1M17 9h1M12 10h1M17 10h1M11 11h1M16 11h1M10 12h1M15 12h1M9 13h1M14 13h1M8 14h1M13 14h1M7 15h1M12 15h1M6 16h1M11 16h1M10 17h1M7 18h2M6 19h1"
              />
              <path
                stroke="#dfd037"
                d="M15 8h1M15 9h1M14 10h2M12 11h2M11 12h1M11 13h1M10 14h2M8 15h2M7 16h1M6 17h1M6 18h1"
              />
              <path stroke="#ccbd30" d="M14 11h1M12 12h1M10 15h1" />
              <path stroke="#d85c70" d="M12 13h1M7 17h1M4 18h1" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-8 -mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 2h21M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h1M6 5h1M10 5h1M14 5h1M18 5h1M22 5h1M2 6h21M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h1M6 9h1M10 9h1M14 9h1M18 9h1M22 9h1M2 10h21M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h1M6 13h1M10 13h1M14 13h1M18 13h1M22 13h1M2 14h21M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h1M6 17h1M10 17h1M14 17h1M18 17h1M22 17h1M2 18h21M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h1M6 21h1M10 21h1M14 21h1M18 21h1M22 21h1M2 22h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 5h3M7 5h3M11 5h3M15 5h3M19 5h3M3 7h3M7 7h3M11 7h3M15 7h3M3 8h3M7 8h3M11 8h3M15 8h3M3 9h3M7 9h3M11 9h3M15 9h3M3 11h3M19 11h3M3 12h3M19 12h3M3 13h3M19 13h3M3 15h3M7 15h3M11 15h3M15 15h3M19 15h3M3 16h3M7 16h3M11 16h3M15 16h3M19 16h3M3 17h3M7 17h3M11 17h3M15 17h3M19 17h3M3 19h3M7 19h3M11 19h3M15 19h3M19 19h3M3 20h3M7 20h3M11 20h3M15 20h3M19 20h3M3 21h3M7 21h3M11 21h3M15 21h3M19 21h3"
              />
              <path
                stroke="#6aab4d"
                d="M19 7h3M19 8h3M19 9h3M7 11h3M15 11h3M7 12h3M15 12h3M7 13h3M15 13h3"
              />
              <path stroke="#4d7eab" d="M11 11h3M11 12h3M11 13h3" />
            </svg>
          </header>
        </div>
        {/*WINGS */}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-92">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-3 "
          >
            Wings
          </header>

          <header className="relative w-[360px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-5 -mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path stroke="#e2e7ed" d="M15 7h1M17 7h1M13 8h1M15 8h2M15 9h1" />
              <path stroke="#adc5e4" d="M16 7h1M14 9h1" />
              <path stroke="#dbe2ea" d="M14 8h1M17 8h1M16 9h1" />
              <path
                stroke="#dc8935"
                d="M18 8h1M13 9h1M17 9h3M12 10h4M17 10h3M11 11h5M18 11h1M10 12h9M10 13h1M12 13h1M14 13h4M10 14h6"
              />
              <path
                stroke="#e19447"
                d="M12 9h1M11 10h1M16 10h1M10 11h1M16 11h1M11 13h1"
              />
              <path
                stroke="#cf6e0b"
                d="M17 11h1M19 11h1M19 12h1M13 13h1M18 13h1M16 14h2M11 15h5"
              />
              <path stroke="#ffffff" d="M9 15h1M6 17h1" />
              <path stroke="#d1d1d1" d="M10 15h1M8 16h2M7 17h2M6 18h2" />
              <path stroke="#c7c7c7" d="M10 16h1M9 17h1M8 18h1M7 19h2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-8 -mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 2h21M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h1M6 5h1M10 5h1M14 5h1M18 5h1M22 5h1M2 6h21M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h1M6 9h1M10 9h1M14 9h1M18 9h1M22 9h1M2 10h21M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h1M6 13h1M10 13h1M14 13h1M18 13h1M22 13h1M2 14h21M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h1M6 17h1M10 17h1M14 17h1M18 17h1M22 17h1M2 18h21M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h1M6 21h1M10 21h1M14 21h1M18 21h1M22 21h1M2 22h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 5h3M7 5h3M11 5h3M15 5h3M19 5h3M3 7h3M7 7h3M11 7h3M19 7h3M3 8h3M7 8h3M11 8h3M19 8h3M3 9h3M7 9h3M11 9h3M19 9h3M3 11h3M7 11h3M19 11h3M3 12h3M7 12h3M19 12h3M3 13h3M7 13h3M19 13h3M3 15h3M7 15h3M15 15h3M19 15h3M3 16h3M7 16h3M15 16h3M19 16h3M3 17h3M7 17h3M15 17h3M19 17h3M3 19h3M7 19h3M11 19h3M15 19h3M19 19h3M3 20h3M7 20h3M11 20h3M15 20h3M19 20h3M3 21h3M7 21h3M11 21h3M15 21h3M19 21h3"
              />
              <path
                stroke="#6aab4d"
                d="M15 7h3M15 8h3M15 9h3M15 11h3M15 12h3M15 13h3M11 15h3M11 16h3M11 17h3"
              />
              <path stroke="#4d7eab" d="M11 11h3M11 12h3M11 13h3" />
            </svg>
          </header>
        </div>
        {/*PIZZA */}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-92 h-52">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-3 "
          >
            Pizza
          </header>

          <header className="relative w-[360px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-5 mt-3 scale-[0.8]"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#f3ea96"
                d="M12 1h2M12 2h1M11 3h2M10 4h1M11 5h3M10 6h3M8 7h4M8 8h2M11 8h1M7 9h6M15 9h1M7 10h3M11 10h2M14 10h3M7 11h3M11 11h6M6 12h2M10 12h1M12 12h2M6 13h1M11 13h1M13 13h1M5 14h2M12 14h3M17 14h1M5 15h3M10 15h3M8 16h1"
              />
              <path
                stroke="#f0ebbb"
                d="M11 2h1M10 3h1M7 8h1M10 8h1M13 10h1M6 11h1M11 12h1M5 13h1"
              />
              <path
                stroke="#d74e59"
                d="M9 4h1M8 5h2M8 6h1M13 6h1M12 7h3M12 8h2M8 12h2M14 12h1M7 13h2M7 14h1M13 17h1M12 18h1"
              />
              <path
                stroke="#ded47a"
                d="M11 4h1M10 10h1M12 13h1M18 16h1M15 17h1M17 17h1M16 18h1"
              />
              <path
                stroke="#ede386"
                d="M12 4h1M10 11h1M16 12h2M16 13h2M11 14h1M15 14h2M18 14h1M13 15h6M5 16h3M9 16h9M5 17h8M16 17h1M18 17h1M7 18h5"
              />
              <path
                stroke="#bb3540"
                d="M10 5h1M9 6h1M14 8h1M13 9h2M15 12h1M9 13h2M14 13h2M8 14h3M8 15h2M14 17h1M13 18h3"
              />
              <path
                stroke="#efce57"
                d="M4 17h1M4 18h3M17 18h2M5 19h13M6 20h10"
              />
              <path
                stroke="#ceac2e"
                d="M19 17h1M19 18h1M4 19h1M18 19h2M5 20h1M16 20h3M6 21h12"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-8 -mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 2h21M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h1M6 5h1M10 5h1M14 5h1M18 5h1M22 5h1M2 6h21M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h1M6 9h1M10 9h1M14 9h1M18 9h1M22 9h1M2 10h21M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h1M6 13h1M10 13h1M14 13h1M18 13h1M22 13h1M2 14h21M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h1M6 17h1M10 17h1M14 17h1M18 17h1M22 17h1M2 18h21M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h1M6 21h1M10 21h1M14 21h1M18 21h1M22 21h1M2 22h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 5h3M7 5h3M11 5h3M15 5h3M19 5h3M3 7h3M7 7h3M15 7h3M19 7h3M3 8h3M7 8h3M15 8h3M19 8h3M3 9h3M7 9h3M15 9h3M19 9h3M3 11h3M7 11h3M15 11h3M19 11h3M3 12h3M7 12h3M15 12h3M19 12h3M3 13h3M7 13h3M15 13h3M19 13h3M3 15h3M11 15h3M19 15h3M3 16h3M11 16h3M19 16h3M3 17h3M11 17h3M19 17h3M3 19h3M7 19h3M11 19h3M15 19h3M19 19h3M3 20h3M7 20h3M11 20h3M15 20h3M19 20h3M3 21h3M7 21h3M11 21h3M15 21h3M19 21h3"
              />
              <path
                stroke="#6aab4d"
                d="M11 7h3M11 8h3M11 9h3M7 15h3M15 15h3M7 16h3M15 16h3M7 17h3M15 17h3"
              />
              <path stroke="#4d7eab" d="M11 11h3M11 12h3M11 13h3" />
            </svg>
          </header>
        </div>
        {/*STEAK */}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-92 h-52 ">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-3 "
          >
            Steak
          </header>

          <header className="relative w-[360px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-5  scale-88 mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path stroke="#e6c39f" d="M7 1h1M6 2h1M9 2h1M5 3h1M4 5h1M4 6h1" />
              <path
                stroke="#ddaf81"
                d="M8 1h1M10 3h1M5 4h1M10 4h1M10 5h1M11 6h2M4 7h1M13 7h1M4 8h1M14 8h2M4 9h1M16 9h1M4 10h1M17 10h2M5 11h1M19 11h1M5 12h1M19 12h1M6 13h1M19 13h1M6 14h1M19 14h1M7 15h1M19 15h1M7 16h1M8 17h1M9 18h1M17 18h1M10 19h1M16 19h1M11 20h4"
              />
              <path
                stroke="#7c3325"
                d="M7 2h2M6 3h1M9 3h1M6 4h1M9 4h1M5 5h1M9 5h1M5 6h1M10 6h1M5 7h1M11 7h2M5 8h1M13 8h1M5 9h1M14 9h2M5 10h1M16 10h1M6 11h1M17 11h2M6 12h1M18 12h1M7 13h1M18 13h1M7 14h1M18 14h1M8 15h1M18 15h1M8 16h1M18 16h1M9 17h1M17 17h1M10 18h1M16 18h1M11 19h5"
              />
              <path
                stroke="#893424"
                d="M7 3h2M7 4h2M6 5h1M8 5h1M6 6h1M9 6h1M6 7h1M10 7h1M6 8h1M11 8h2M6 9h2M12 9h2M6 10h2M14 10h2M7 11h1M15 11h2M7 12h2M16 12h2M8 13h1M17 13h1M8 14h2M17 14h1M9 15h2M17 15h1M9 16h3M16 16h2M10 17h3M15 17h2M11 18h5"
              />
              <path
                stroke="#9b2f1a"
                d="M7 5h1M7 6h2M7 7h3M7 8h4M8 9h4M8 10h6M8 11h7M9 12h4M15 12h1M9 13h3M13 13h2M16 13h1M10 14h2M13 14h2M16 14h1M11 15h2M15 15h2M12 16h4M13 17h2"
              />
              <path
                stroke="#facfa3"
                d="M4 11h1M13 12h2M12 13h1M15 13h1M5 14h1M12 14h1M15 14h1M13 15h2M6 16h1M6 17h1M7 18h1M8 19h1M19 19h1M9 20h1M18 20h1M10 21h8"
              />
              <path
                stroke="#f2c18f"
                d="M5 13h1M6 15h1M7 17h1M8 18h1M19 18h1M9 19h1M18 19h1M10 20h1M17 20h1"
              />
              <path
                stroke="#d9a878"
                d="M19 16h1M18 17h2M18 18h1M17 19h1M15 20h2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-8 -mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 2h21M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h1M6 5h1M10 5h1M14 5h1M18 5h1M22 5h1M2 6h21M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h1M6 9h1M10 9h1M14 9h1M18 9h1M22 9h1M2 10h21M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h1M6 13h1M10 13h1M14 13h1M18 13h1M22 13h1M2 14h21M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h1M6 17h1M10 17h1M14 17h1M18 17h1M22 17h1M2 18h21M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h1M6 21h1M10 21h1M14 21h1M18 21h1M22 21h1M2 22h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 5h3M7 5h3M11 5h3M15 5h3M19 5h3M3 7h3M11 7h3M15 7h3M19 7h3M3 8h3M11 8h3M15 8h3M19 8h3M3 9h3M11 9h3M15 9h3M19 9h3M3 11h3M15 11h3M19 11h3M3 12h3M15 12h3M19 12h3M3 13h3M15 13h3M19 13h3M3 15h3M7 15h3M15 15h3M19 15h3M3 16h3M7 16h3M15 16h3M19 16h3M3 17h3M7 17h3M15 17h3M19 17h3M3 19h3M7 19h3M11 19h3M15 19h3M19 19h3M3 20h3M7 20h3M11 20h3M15 20h3M19 20h3M3 21h3M7 21h3M11 21h3M15 21h3M19 21h3"
              />
              <path
                stroke="#6aab4d"
                d="M7 7h3M7 8h3M7 9h3M7 11h3M7 12h3M7 13h3M11 15h3M11 16h3M11 17h3"
              />
              <path stroke="#4d7eab" d="M11 11h3M11 12h3M11 13h3" />
            </svg>
          </header>
        </div>
        {/* EGGS */}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-92 h-52">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-3 "
          >
            Eggs
          </header>

          <header className="relative w-[360px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-48 -ml-5 scale-88 mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#ffffff"
                d="M14 0h2M5 1h2M11 1h6M3 2h8M12 2h5M2 3h8M11 3h4M16 3h1M2 4h16M2 5h3M6 5h13M2 6h18M2 7h7M14 7h7M2 8h6M15 8h6M2 9h5M16 9h2M19 9h2M2 10h5M16 10h5M2 11h5M16 11h5M2 12h5M16 12h5M2 13h6M15 13h6M2 14h7M14 14h4M2 15h15M3 16h3M8 16h9M4 17h12M8 18h4M13 18h3M9 19h4M14 19h2M10 20h5M12 21h3"
              />
              <path
                stroke="#d3d3d3"
                d="M16 0h1M4 1h1M17 1h1M11 2h1M17 2h1M10 3h1M15 3h1M17 3h1M18 4h1M5 5h1M19 5h1M20 6h1M21 8h1M18 9h1M21 9h1M21 10h1M21 11h1M1 12h1M21 12h1M1 13h1M21 13h1M1 14h1M18 14h3M1 15h1M17 15h1M2 16h1M6 16h2M17 16h1M3 17h1M16 17h1M7 18h1M12 18h1M16 18h1M8 19h1M13 19h1M16 19h1M9 20h1M15 20h1M11 21h1M15 21h1"
              />
              <path
                stroke="#fef708"
                d="M9 7h5M8 8h7M7 9h9M7 10h9M7 11h9M7 12h9M8 13h7M9 14h5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-8 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 1h21M2 2h1M6 2h1M10 2h1M14 2h1M18 2h1M22 2h1M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h21M2 6h1M6 6h1M10 6h1M14 6h1M18 6h1M22 6h1M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h21M2 10h1M6 10h1M10 10h1M14 10h1M18 10h1M22 10h1M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h21M2 14h1M6 14h1M10 14h1M14 14h1M18 14h1M22 14h1M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h21M2 18h1M6 18h1M10 18h1M14 18h1M18 18h1M22 18h1M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 2h3M7 2h3M11 2h3M15 2h3M19 2h3M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 6h3M7 6h3M15 6h3M19 6h3M3 7h3M7 7h3M15 7h3M19 7h3M3 8h3M7 8h3M15 8h3M19 8h3M3 10h3M7 10h3M19 10h3M3 11h3M7 11h3M19 11h3M3 12h3M7 12h3M19 12h3M3 14h3M7 14h3M15 14h3M19 14h3M3 15h3M7 15h3M15 15h3M19 15h3M3 16h3M7 16h3M15 16h3M19 16h3M3 18h3M7 18h3M11 18h3M15 18h3M19 18h3M3 19h3M7 19h3M11 19h3M15 19h3M19 19h3M3 20h3M7 20h3M11 20h3M15 20h3M19 20h3"
              />
              <path
                stroke="#6aab4d"
                d="M11 6h3M11 7h3M11 8h3M15 10h3M15 11h3M15 12h3M11 14h3M11 15h3M11 16h3"
              />
              <path stroke="#4d7eab" d="M11 10h3M11 11h3M11 12h3" />
            </svg>
          </header>
        </div>
        {/* RICE */}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-92 h-52">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-3 "
          >
            Rice
          </header>

          <header className="relative w-[360px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-48 -ml-5 scale-88 mt-2 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#ffffff"
                d="M11 4h3M10 5h5M9 6h3M13 6h3M8 7h2M12 7h2M15 7h2M7 8h11M6 9h4M16 9h1M18 9h1M5 10h2M8 10h1M17 10h3M4 11h2M7 11h1M18 11h3M4 12h4M18 12h1M20 12h1M5 13h3M18 13h3M6 14h2M18 14h1"
              />
              <path
                stroke="#d3d3d3"
                d="M14 4h1M15 5h1M12 6h1M16 6h1M10 7h2M14 7h1M17 7h1M18 8h1M17 9h1M19 9h1M7 10h1M20 10h1M6 11h1M21 11h1M19 12h1M21 12h1M4 13h1M21 13h1M5 14h1M19 14h2M6 15h2M18 15h2"
              />
              <path
                stroke="#006400"
                d="M10 9h6M9 10h3M14 10h3M8 11h2M13 11h5M8 12h10M8 13h1M10 13h1M12 13h1M14 13h1M16 13h2M9 14h1M11 14h1M13 14h1M15 14h1M17 14h1"
              />
              <path stroke="#106b1b" d="M12 10h2M10 11h3" />
              <path
                stroke="#013220"
                d="M9 13h1M11 13h1M13 13h1M15 13h1M8 14h1M10 14h1M12 14h1M14 14h1M16 14h1M8 15h10"
              />
              <path
                stroke="rgba(255,255,255,0.09803921568627451)"
                d="M3 15h1"
              />
              <path
                stroke="rgba(255,255,255,0.07058823529411765)"
                d="M4 15h1"
              />
              <path
                stroke="rgba(255,255,255,0.03137254901960784)"
                d="M5 15h1"
              />
              <path
                stroke="rgba(255,255,255,0.00784313725490196)"
                d="M21 15h1"
              />
              <path
                stroke="rgba(255,255,255,0.03529411764705882)"
                d="M22 15h1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-50 -ml-8 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 1h21M2 2h1M6 2h1M10 2h1M14 2h1M18 2h1M22 2h1M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h21M2 6h1M6 6h1M10 6h1M14 6h1M18 6h1M22 6h1M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h21M2 10h1M6 10h1M10 10h1M14 10h1M18 10h1M22 10h1M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h21M2 14h1M6 14h1M10 14h1M14 14h1M18 14h1M22 14h1M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h21M2 18h1M6 18h1M10 18h1M14 18h1M18 18h1M22 18h1M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 2h3M7 2h3M15 2h3M19 2h3M3 3h3M7 3h3M15 3h3M19 3h3M3 4h3M7 4h3M15 4h3M19 4h3M3 6h3M7 6h3M11 6h3M15 6h3M19 6h3M3 7h3M7 7h3M11 7h3M15 7h3M19 7h3M3 8h3M7 8h3M11 8h3M15 8h3M19 8h3M3 10h3M7 10h3M15 10h3M19 10h3M3 11h3M7 11h3M15 11h3M19 11h3M3 12h3M7 12h3M15 12h3M19 12h3M3 14h3M7 14h3M11 14h3M15 14h3M19 14h3M3 15h3M7 15h3M11 15h3M15 15h3M19 15h3M3 16h3M7 16h3M11 16h3M15 16h3M19 16h3M7 18h3M11 18h3M15 18h3M7 19h3M11 19h3M15 19h3M7 20h3M11 20h3M15 20h3"
              />
              <path
                stroke="#106b1b"
                d="M11 2h3M11 3h3M11 4h3M3 18h3M19 18h3M3 19h3M19 19h3M3 20h3M19 20h3"
              />
              <path stroke="#4d7eab" d="M11 10h3M11 11h3M11 12h3" />
            </svg>
          </header>
        </div>
        {/* ICE CREAM*/}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-92 h-53">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-3 "
          >
            Ice Cream
          </header>

          <header className="relative w-[368px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-48 -ml-5 scale-88 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#d6addd"
                d="M10 6h1M9 7h1M8 8h1M7 9h1M8 11h2M13 11h2"
              />
              <path
                stroke="#ca91d3"
                d="M11 6h2M10 7h3M9 8h5M8 9h7M7 10h9M6 11h2M10 11h3M15 11h2M6 12h4M11 12h4M8 13h1"
              />
              <path
                stroke="#be84c7"
                d="M13 6h1M13 7h2M14 8h2M15 9h2M16 10h1M10 12h1M15 12h1M7 13h1M9 13h1M11 13h2M14 13h1"
              />
              <path
                stroke="#a96eb2"
                d="M17 11h1M16 12h2M10 13h1M13 13h1M15 13h2M8 14h1M11 14h2M14 14h2"
              />
              <path stroke="#9c8b65" d="M7 14h1M7 15h2" />
              <path stroke="#948055" d="M9 14h1M13 14h1M9 15h1M12 15h2" />
              <path stroke="#9a875e" d="M10 14h1M10 15h2M14 15h1" />
              <path stroke="#89764d" d="M16 14h1M15 15h2" />
              <path
                stroke="#cab894"
                d="M8 16h1M8 17h1M10 17h1M9 18h2M9 19h1M10 20h1M10 21h1"
              />
              <path
                stroke="#bdac89"
                d="M9 16h1M11 16h2M14 16h2M15 17h1M14 19h1M13 20h1M12 21h2M11 22h2"
              />
              <path stroke="#b5a480" d="M10 16h1M9 17h1" />
              <path stroke="#b19d72" d="M13 16h1M12 17h1M11 18h1M10 19h1" />
              <path
                stroke="#c7b48c"
                d="M11 17h1M13 17h2M12 18h2M11 19h2M11 20h1"
              />
              <path stroke="#a38f65" d="M14 18h1M13 19h1M12 20h1M11 21h1" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-48 -ml-8 mt-3"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 1h21M2 2h1M6 2h1M10 2h1M14 2h1M18 2h1M22 2h1M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h21M2 6h1M6 6h1M10 6h1M14 6h1M18 6h1M22 6h1M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h21M2 10h1M6 10h1M10 10h1M14 10h1M18 10h1M22 10h1M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h21M2 14h1M6 14h1M10 14h1M14 14h1M18 14h1M22 14h1M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h21M2 18h1M6 18h1M10 18h1M14 18h1M18 18h1M22 18h1M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 2h3M7 2h3M11 2h3M15 2h3M19 2h3M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 6h3M7 6h3M15 6h3M19 6h3M3 7h3M7 7h3M15 7h3M19 7h3M3 8h3M7 8h3M15 8h3M19 8h3M3 10h3M7 10h3M15 10h3M19 10h3M3 11h3M7 11h3M15 11h3M19 11h3M3 12h3M7 12h3M15 12h3M19 12h3M3 14h3M7 14h3M15 14h3M19 14h3M3 15h3M7 15h3M15 15h3M19 15h3M3 16h3M7 16h3M15 16h3M19 16h3M3 18h3M7 18h3M15 18h3M19 18h3M3 19h3M7 19h3M15 19h3M19 19h3M3 20h3M7 20h3M15 20h3M19 20h3"
              />
              <path
                stroke="#6aab4d"
                d="M11 6h3M11 7h3M11 8h3M11 14h3M11 15h3M11 16h3M11 18h3M11 19h3M11 20h3"
              />
              <path stroke="#4d7eab" d="M11 10h3M11 11h3M11 12h3" />
            </svg>
          </header>
        </div>
        {/* MAC 'N' CHEESE*/}
        <div className="border-2 border-yellow-500 rounded-lg bg-[#e0d8bb] w-92 h-53">
          <header
            className="text-2xl tracking-wider italic text-transparent
             bg-clip-text relative top-1 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500
             font-['Press_Start_2P'] -mb-5 ml-3 "
          >
            Mac'n'Cheese
          </header>

          <header className="relative w-[368px] h-[190px] flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-48 -ml-5 scale-88 "
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="rgba(92,64,51,0.9882352941176471)"
                d="M9 4h4M7 5h2M13 5h1M6 6h1M14 6h1M5 7h1M14 7h1M4 8h1M13 8h1M4 9h1M10 9h3M3 10h1M9 10h1M3 11h1M9 11h1M3 12h1M9 12h1M3 13h1M10 13h1M3 14h1M11 14h2M4 15h1M13 15h1M4 16h1M13 16h1M5 17h1M6 18h1M13 18h1M7 19h2M12 19h1M9 20h3"
              />
              <path stroke="rgba(89,67,55,0.09019607843137255)" d="M13 4h1" />
              <path
                stroke="#ffd700"
                d="M9 5h4M7 6h5M7 7h5M6 8h4M5 9h4M5 10h3M5 11h3M5 12h3M5 13h4M5 14h6M5 15h7M6 16h5M7 17h4"
              />
              <path
                stroke="#daa620"
                d="M12 6h2M6 7h1M12 7h2M5 8h1M10 8h3M9 9h1M4 10h1M8 10h1M4 11h1M8 11h1M4 12h1M8 12h1M4 13h1M9 13h1M4 14h1M12 15h1M5 16h1M11 16h2M6 17h1M11 17h2M7 18h6M9 19h1M11 19h1"
              />
              <path stroke="#5c4033" d="M13 17h1" />
              <path stroke="#daa520" d="M10 19h1" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 24 24"
              shape-rendering="crispEdges"
              className="w-50 h-48 -ml-8 mt-3"
            >
              <metadata>
                Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
              </metadata>
              <path
                stroke="#2d2d2d"
                d="M2 1h21M2 2h1M6 2h1M10 2h1M14 2h1M18 2h1M22 2h1M2 3h1M6 3h1M10 3h1M14 3h1M18 3h1M22 3h1M2 4h1M6 4h1M10 4h1M14 4h1M18 4h1M22 4h1M2 5h21M2 6h1M6 6h1M10 6h1M14 6h1M18 6h1M22 6h1M2 7h1M6 7h1M10 7h1M14 7h1M18 7h1M22 7h1M2 8h1M6 8h1M10 8h1M14 8h1M18 8h1M22 8h1M2 9h21M2 10h1M6 10h1M10 10h1M14 10h1M18 10h1M22 10h1M2 11h1M6 11h1M10 11h1M14 11h1M18 11h1M22 11h1M2 12h1M6 12h1M10 12h1M14 12h1M18 12h1M22 12h1M2 13h21M2 14h1M6 14h1M10 14h1M14 14h1M18 14h1M22 14h1M2 15h1M6 15h1M10 15h1M14 15h1M18 15h1M22 15h1M2 16h1M6 16h1M10 16h1M14 16h1M18 16h1M22 16h1M2 17h21M2 18h1M6 18h1M10 18h1M14 18h1M18 18h1M22 18h1M2 19h1M6 19h1M10 19h1M14 19h1M18 19h1M22 19h1M2 20h1M6 20h1M10 20h1M14 20h1M18 20h1M22 20h1M2 21h21"
              />
              <path
                stroke="#e0d8bb"
                d="M3 2h3M7 2h3M11 2h3M15 2h3M19 2h3M3 3h3M7 3h3M11 3h3M15 3h3M19 3h3M3 4h3M7 4h3M11 4h3M15 4h3M19 4h3M3 6h3M7 6h3M15 6h3M19 6h3M3 7h3M7 7h3M15 7h3M19 7h3M3 8h3M7 8h3M15 8h3M19 8h3M3 10h3M15 10h3M19 10h3M3 11h3M15 11h3M19 11h3M3 12h3M15 12h3M19 12h3M3 14h3M7 14h3M15 14h3M19 14h3M3 15h3M7 15h3M15 15h3M19 15h3M3 16h3M7 16h3M15 16h3M19 16h3M7 18h3M11 18h3M15 18h3M7 19h3M11 19h3M15 19h3M7 20h3M11 20h3M15 20h3"
              />
              <path
                stroke="#6cac4f"
                d="M11 6h3M11 7h3M11 8h3M7 10h3M7 11h3M7 12h3M11 14h3M11 15h3M11 16h3"
              />
              <path stroke="#4d7eab" d="M11 10h3M11 11h3M11 12h3" />
              <path
                stroke="#dfd7ba"
                d="M3 18h3M19 18h3M3 19h3M19 19h3M3 20h3M19 20h3"
              />
            </svg>
          </header>
        </div>
      </div>
    </section>
  );
}

export default GameCards;
