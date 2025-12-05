import "../styles.css";

import Apple from "../content/FoodFacts/Apple.png";
import Banana from "../content/FoodFacts/Banana.png";
import Carrot from "../content/FoodFacts/Carrot.png";
import Donut from "../content/FoodFacts/Donut.png";
import Egg from "../content/FoodFacts/Egg.png";
import Fries from "../content/FoodFacts/Fries.png";
import Grapes from "../content/FoodFacts/Grapes.png";
import Hotdog from "../content/FoodFacts/Hotdog.png";
import Icecream from "../content/FoodFacts/Icrecream.png";
import Jackfruit from "../content/FoodFacts/Jackfruit.png";
import Kiwi from "../content/FoodFacts/Kiwi.png";
import Lemon from "../content/FoodFacts/Lemon.png";
import Milk from "../content/FoodFacts/Milk.png";
import Nuggets from "../content/FoodFacts/Nuggets.png";
import Onion from "../content/FoodFacts/Onion.png";
import Potato from "../content/FoodFacts/Potato.png";
import Quinoa from "../content/FoodFacts/Quinoa.png";
import Raspberry from "../content/FoodFacts/Raspberry.png";
import Salmon from "../content/FoodFacts/Salmon.png";
import Tomato from "../content/FoodFacts/Tomato.png";
import Udon from "../content/FoodFacts/Udon.png";
import Veal from "../content/FoodFacts/Veal.png";
import Watermelon from "../content/FoodFacts/Watermelon.png";
import XOSauce from "../content/FoodFacts/XOSauce.png";
import Yogurt from "../content/FoodFacts/Yogurt.png";
import Zuchini from "../content/FoodFacts/Zuchini.png";

export default function AboutFoodWaste() {
  return (
    <>
      {/* background image */}
      <div className="bg-image WasteTitleImage">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <h1 className="mb-0 WasteTitle">About Food Waste</h1>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container text-center">
          {/* Apple */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>"It is estimated that approximately 3.7 trillion apples end up in
              landfills each year" (Matei et al.).</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Apple} alt="Apple" />
            </div>
          </div>
          {/* Banana */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Banana} alt="Banana" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>"A new study by Aldi has revealed that bananas are the most
              commonly discarded fresh food in the UK, with Brits wasting an
              astonishing 3.2 billion bananas every year. This equates to an
              average of 115 bananas per household annually across the UK’s 28.4
              million households" (Shales).</p>
            </div>
          </div>
          {/* Carrot */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>"Results from a total of 4,740 interviews suggested that fresh
              produce, such as potatoes, broccoli, carrots, bananas, apples, and
              onions, is more likely to be wasted than other foods...commonly
              wasted items included carrots (19.9 per cent)" (Jones).</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Carrot} alt="Carrot" />
            </div>
          </div>
          {/* Donut */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Donut} alt="Donut" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>"Krispy Kreme, Inc., specifically its UK team, partnered with the
              food waste saving app ... to notify consumers about end-of-day
              donuts that are available for purchase at a discount, leading to
              nearly 275,000 donuts being sold and saving 113.7 tonnes of CO2e,
              which is equal to 128 flights from London to New York" (Sosland).</p>
            </div>
          </div>
          {/* Egg */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>"Britons are throwing away 720m eggs every year – three times more
              than in 2008 and at a cost of £139m – according to research...The
              research also showed that 29% of Britons throw away eggs solely
              because they are past their best before date. However, eggs are
              often still good and safe to eat long after the date on the
              packaging has passed" (Smithers).</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Egg} alt="Egg" />
            </div>
          </div>
          {/* Fries */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Fries} alt="Fries" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Restaurants frequently discard large quantities of leftover french fries, and consumers often don't finish their servings, contributing to significant food waste. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Grapes */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Fresh fruits like grapes are often discarded due to spoilage, cosmetic imperfections, or simply not being consumed before their expiration. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Grapes} alt="Grapes" />
            </div>
          </div>
          {/* Hotdog */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Hotdog} alt="Hotdog" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Processed meats like hotdogs contribute to food waste when they pass their sell-by dates, or are bought in bulk and not consumed in time. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Icecream */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Ice cream waste often comes from freezer burn, power outages, or expiring before consumption. It also contributes to dairy waste if not handled properly. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Icecream} alt="Icecream" />
            </div>
          </div>
          {/* Jackfruit */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Jackfruit} alt="Jackfruit" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>As a large, exotic fruit, jackfruit can contribute to waste if consumers are unsure how to prepare it or buy more than they can use. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Kiwi */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Like many fruits, kiwis can be wasted due to bruising, overripening, or being forgotten in the fridge before consumption. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Kiwi} alt="Kiwi" />
            </div>
          </div>
          {/* Lemon */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Lemon} alt="Lemon" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Lemons are often used for juice or zest, with the remaining fruit being discarded. Cosmetic standards also lead to waste. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Milk */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Milk is one of the most commonly wasted food items globally, often due to exceeding 'best by' dates, improper storage, or over-purchasing. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Milk} alt="Milk" />
            </div>
          </div>
          {/* Nuggets */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Nuggets} alt="Nuggets" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Chicken nuggets, as a processed food, can be wasted when leftovers aren't consumed, or packages are opened but not finished before expiration. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Onion */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Onions are frequently wasted due to sprouting, soft spots, or simply being forgotten in pantries. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Onion} alt="Onion" />
            </div>
          </div>
          {/* Potato */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Potato} alt="Potato" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Potatoes are often wasted due to sprouting, greening (solanine), or being stored improperly, leading to spoilage. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Quinoa */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>While a shelf-stable grain, cooked quinoa can be wasted when prepared in excess and not consumed, or due to improper storage. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Quinoa} alt="Quinoa" />
            </div>
          </div>
          {/* Raspberry */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Raspberry} alt="Raspberry" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Soft fruits like raspberries are highly perishable and prone to spoilage quickly, leading to significant waste if not consumed promptly. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Salmon */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Fish like salmon can be wasted if not cooked or frozen before its expiration date, or if portions are too large for consumption. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Salmon} alt="Salmon" />
            </div>
          </div>
          {/* Tomato */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Tomato} alt="Tomato" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Tomatoes are often discarded due to bruising, overripening, or becoming soft before they can be used in meals. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Udon */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Noodles, whether fresh or dried, can be wasted if prepared in too large quantities, or if leftovers are not properly stored and consumed. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Udon} alt="Udon" />
            </div>
          </div>
          {/* Veal */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Veal} alt="Veal" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Similar to other meats, veal can be wasted when not consumed or frozen before its expiration date, or if it doesn't meet specific culinary standards. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Watermelon */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Large fruits like watermelon can lead to waste when consumers buy more than they can eat, or if they spoil before being fully consumed. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Watermelon} alt="Watermelon" />
            </div>
          </div>
          {/* XOSauce */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={XOSauce} alt="XOSauce" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Condiments and sauces, even if shelf-stable, can be wasted when they pass their 'best by' dates, or if opened jars are forgotten in the fridge. (EcoBites Insight)</p>
            </div>
          </div>
          {/* Yogurt */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-1">
              <p>Dairy products like yogurt are frequently wasted due to 'best by' dates, improper storage leading to spoilage, or simply not being finished. (EcoBites Insight)</p>
            </div>
            <div className="col-md-6 order-md-2">
              <img src={Yogurt} alt="Yogurt" />
            </div>
          </div>
          {/* Zucchini */}
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
              <img src={Zuchini} alt="Zucchini" />
            </div>
            <div className="col-md-6 order-md-1">
              <p>Like many vegetables, zucchini can be wasted due to wilting, softening, or simply being over-purchased and forgotten. (EcoBites Insight)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
