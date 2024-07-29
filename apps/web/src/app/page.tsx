import CategoryRow from "../components/celeb/category-row";
import HeroVideo from '../components/hero-video'
import CategoryBlock from "../components/celeb/category-block";

export default function Web() {

  return (
    <div className="space-y-8">
      <HeroVideo />

      <CategoryRow data={{ id: "new-and-noteworthy", title: "New and Noteworthy" }} />
      <CategoryRow data={{ id: "featured", title: "Featured" }} />
      <CategoryRow data={{ id: "cov-19-relief-campaign", title: "COV-19 relief campaign" }} />

      <div className="flex space-x-12 justify-center">
        <CategoryBlock className="bg-[#d4d4d4]" data={{ id: "comedians-for-chess-in-slum", title: "Comedians for Chess In Slum Makoko Initiative" }} />
        <CategoryBlock className="bg-[#dcd0db]"  data={{ id: "creators-for-advocacy-commitee-against-hunger", title: "Creators for Advocacy Commitee Against Hunger" }} />
      </div>
      
      <CategoryRow data={{ id: "benefiting-no-kid-hungry", title: "Benefiting No Kid Hungry" }} />
      <CategoryRow data={{ id: "benefiting-equity-advocates", title: "Benefiting Equity Advocates" }} />

      <div className="flex flex-col items-center justify-between bg-white px-8 py-12 mt-10 border border-1 border-[#ebf0f0]">
        <div className="max-w-[60%] text-center">
          <h1 className="text-xl font-semibold mb-1">Join the movement</h1>
          <p className="text-sm opacity-95">Request personalized video shoutouts from celebrities, with a portion of the fee supporting their initiatives.</p>
        </div>
        <div className="flex justify-center content-center text-xs font-medium mt-8">
          <button className="border border-2 border-[#000000] px-8 py-3 rounded-full">Enrol as a Talent</button>
          <button className="bg-accent text-white px-8 py-3 rounded-full ml-4">Enrol as a Beneficiary</button>
        </div>
      </div>

      <CategoryRow data={{ id: "musicians", title: "Musicians" }} />
      {/* <CategoryRow data={{ id: "more", title: "More" }} /> */}
    </div>
  );
}
