import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: ["#FFD700", "#FFA500", "#FF4500", "#FF0000"] },
          move: {
            direction: "none",
            enable: true,
            random: true,
            speed: 1,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.3, random: true },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
