import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Rohith Ravikumar",
      image: "src/Assets/rohithPhoto.png",
      github: "https://github.com/Spacecraft134",
      linkedin: "https://www.linkedin.com/in/rohith-ravikumar-206a87319/",
    },
    {
      name: "Nihar Srikakolapu",
      image: "src/Assets/niharPhoto.png",
      github: "https://github.com/NiharSrikakolapu3",
      linkedin: "https://www.linkedin.com/in/nihar-srikakolapu-014826267/",
    },
    {
      name: "Nikhil Yarlagadda",
      image: "src/Assets/nikhilPhoto.png",
      github: "https://github.com/Nikhil-Yarlagadda",
      linkedin: "https://www.linkedin.com/in/nikhilyarlagadda2/",
    },
  ];

  return (
    <section id="AboutUs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">About Us</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <div className="w-40 h-40 mx-auto bg-red-900 rounded-full p-1 border-2 border-red-700">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-red-400 font-medium mb-4">{member.role}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-900 hover:bg-red-800 p-3 rounded-full transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-900 hover:bg-red-800 p-3 rounded-full transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
