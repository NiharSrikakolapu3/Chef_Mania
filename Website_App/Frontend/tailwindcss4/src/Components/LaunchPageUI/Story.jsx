import StoryBackground from "../../Assets/story_background.png";
import Title2 from "../../Assets/Title2.png";
import { motion } from "framer-motion";

export default function Story() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="Story"
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 overflow-hidden"
      style={{ backgroundImage: `url(${StoryBackground})` }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0  bg-opacity-50 z-0"></div>

      <div className="text-center mb-16 relative z-20">
        <motion.img
          src={Title2}
          alt="Rise to Rule the Kitchen Kingdom"
          className="w-full max-w-[600px] mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto space-y-16 relative z-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          variants={fadeInUp}
        >
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-red-600 bg-opacity-20 p-6 rounded-lg border-2 border-red-500 w-full max-w-md">
              <img
                src="src/Assets/JeffWorking.png"
                alt="Jeff at his diner"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-serif">
              Jeff's Usual Day at the Diner
            </h2>
            <ol className="list-decimal list-inside text-lg md:text-xl space-y-2 text-white font-medium">
              <li className="hover:text-yellow-300 transition-colors">
                Wake up
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                Open the Restaurant
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                Feed the Customers
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                Get Money
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                Gamble at a Casino
              </li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
          variants={fadeInUp}
        >
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-blue-600 bg-opacity-20 p-6 rounded-lg border-2 border-blue-500 w-full max-w-md">
              <img
                src="src/Assets/JeffAfterBob.png"
                alt="Empty diner after Bob's opened"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-serif">
              Jeff's Life After Bob's Diner Opened
            </h2>
            <ol className="list-decimal list-inside text-lg md:text-xl space-y-2 text-white font-medium">
              <li className="hover:text-yellow-300 transition-colors">
                Wake up
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                Open the Restaurant
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                Not get many customers
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                Not get enough money
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                Not have enough money to Gamble
              </li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-r from-red-900 to-blue-900 p-8 rounded-xl border-2 border-white border-opacity-30 shadow-2xl">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold">
              This made Jeff furious, leading him to issue a challenge to Bob —
              <span className="text-yellow-300 font-bold">
                {" "}
                winner keeps their diner, loser must shut down forever.
              </span>
              <br />
              <span className="font-bold text-yellow-300 mt-4 block text-2xl md:text-3xl">
                Well… that can only be answered by you.
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
