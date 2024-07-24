import { Button } from "ui";
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

      <div className="flex space-x-8 justify-center">
        <CategoryBlock data={{ id: "comedians-for-chess-in-slum", title: "Comedians for Chess In Slum", limit: 4 }} />
        <CategoryBlock data={{ id: "creators-for-advocacy-commitee-against-hunger", title: "Creators for Advocacy Commitee Against Hunger", limit: 4 }} />
      </div>
      
      <CategoryRow data={{ id: "benefiting-no-kid-hungry", title: "Benefiting No Kid Hungry" }} />
      <CategoryRow data={{ id: "benefiting-equity-advocates", title: "Benefiting Equity Advocates" }} />

      <div className="flex items-center justify-between bg-white px-8">
        <div>
          <h1 className="text-lg font-semibold ">Join the movement</h1>
          <p className="text-gray-500 text-sm">Book personalized video shoutout from your favorite.</p>
        </div>
        <div className="flex justify-center py-8 text-xs font-medium">
          <button className="border border-2 border-[#000000] px-8 py-3 rounded-full">Enrol as a Talent</button>
          <button className="bg-accent text-white px-8 py-3 rounded-full ml-4">Enrol as a Beneficiary</button>
        </div>
      </div>

      <CategoryRow data={{ id: "musicians", title: "Musicians" }} />
      <CategoryRow data={{ id: "more", title: "More" }} />
    </div>
  );
}
