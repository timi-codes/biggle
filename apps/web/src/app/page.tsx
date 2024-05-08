import { Button } from "ui";
import CategoryRow from "../components/celeb/category-row";
import HeroVideo from '../components/hero-video'

export default function Web() {

  return (
    <div className="space-y-8">
      <HeroVideo />
      <CategoryRow data={{ name: "Featured", celebs: [{}, {}, {}, {}, {}, {}, {}] }} />
    </div>
  );
}
