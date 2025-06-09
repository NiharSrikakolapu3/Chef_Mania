import StoryBackground from "../../Assets/story_background.png";
import Title2 from "../../Assets/Title2.png";

export default function Story() {
  return (
    <section
      id="Story"
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${StoryBackground})` }}
    >
      <div className="text-center mb-4 relative z-20">
        <img
          src={Title2}
          alt="Rise to Rule the Kitchen Kingdom"
          className="w-[600px] mx-auto"
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-2 text-white">
              Jeff's Usual Day at the Diner
            </h2>
            <ol className="list-decimal list-inside text-lg space-y-1 text-white">
              <li>Wake up</li>
              <li>Open the Restaurant</li>
              <li>Feed the Customers</li>
              <li>Get Money</li>
              <li>Gamble at a Casino</li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-2 text-white">
              Jeff's Life After Bob's Diner Opened
            </h2>
            <ol className="list-decimal list-inside text-lg space-y-1 text-white">
              <li>Wake up</li>
              <li>Open the Restaurant</li>
              <li>Not get many customers</li>
              <li>Not get enough money</li>
              <li>Not have enough money to Gamble</li>
            </ol>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-white leading-relaxed font-semibold">
            This made Jeff furious, leading him to issue a challenge to Bob —
            winner keeps their diner, loser must shut down forever.
            <br />
            <span className="font-bold text-white mt-2 block">
              Well… that can only be answered by you.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
