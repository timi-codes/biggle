import { Button } from "ui";
import CategoryRow from "../components/celeb/category-row";
import HeroVideo from '../components/hero-video'
import CategoryBlock from "../components/celeb/category-block";

export default function Web() {

  return (
    <div className="space-y-8">
      <HeroVideo />
      <CategoryRow data={{ name: "Featured", celebs: [{}, {}, {}, {}, {}, {}] }} />
      <div className="flex space-x-8 justify-center">
        <CategoryBlock data={{ name: "Creators for Advocacy Committee Against Hunger", celebs: [{}, {}, {}, {}] }} />
        <CategoryBlock data={{ name: "Actors for Advocacy Committee Against Hunger ", celebs: [{}, {}, {}, {}] }} />
      </div>

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
    </div>
  );
}
