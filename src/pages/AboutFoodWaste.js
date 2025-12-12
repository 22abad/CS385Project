import "../styles.css";

import Apple from "../content/FoodFacts/Apple.png";
import Banana from "../content/FoodFacts/Banana.png";
import Carrot from "../content/FoodFacts/Carrot.png";
import Donut from "../content/FoodFacts/Donut.png";
import Egg from "../content/FoodFacts/Egg.png";
import Fries from "../content/FoodFacts/Fries.png";
import Grapes from "../content/FoodFacts/Grapes.png";
import Hotdog from "../content/FoodFacts/Hotdog.png";
import IcebergLettuce from "../content/FoodFacts/IcebergLettuce.png";
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

//Alternating color function for displaying donut "sprinkles"
const AlternatingColorText = ({ text }) => {
  const words = text.split(" ");

  return (
    <p>
      {words.map((word, i) => (
        <span key={i} style={{ color: i % 2 === 0 ? "orange" : "inherit" }}>
          {word + " "}
        </span>
      ))}
    </p>
  );
};

//Alternating color function for displaying yogurt toppings
const AlternatingColorText2 = ({ text }) => {
  const words = text.split(" ");

  return (
    <p>
      {words.map((word, i) => (
        <span key={i} style={{ color: i % 2 === 0 ? "#c64d6a" : "inherit" }}>
          {word + " "}
        </span>
      ))}
    </p>
  );
};

export default function AboutFoodWaste() {
  return (
    <>
      {/* background image */}
      <div className="bg-image WasteTitleImage">
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <h1 class="mb-0 WasteTitle">About Food Waste</h1>
          </div>
        </div>
      </div>
      <div className="main">
        <div class="FoodWasteDefinition">
          <h1 id="MainHeader">What is Food Waste?</h1>
          <p id="defHeadline">
            The European Commission defines food waste as any food that becomes
            waste under the following conditions:
          </p>

          <p>It has entered the food supply chain (i.e. post harvesting)</p>
          <p>
            It then has been removed or discarded from the food supply chain, or
            at final consumption stage
          </p>
          <p>It is finally destined to be processed as waste</p>
        </div>

        <hr />

        <h1 id="MainHeader">Food Waste Fun Facts</h1>

        <div className="container-fluid text-center FoodFact">
          <div className="row align-items-center fact-row">
            <div className="col-12 col-md-6 order-1 order-md-1 d-flex justify-content-center">
              <img src={Apple} className="img-fluid food-img" alt="Apple" />
            </div>
            <div
              className="col-12 col-md-6 order-2 order-md-2 no-cut"
              id="AppleTxt"
            >
              "It is estimated that approximately 3.7 trillion apples end up in
              landfills each year" (Matei et al.).
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="BananaTxt"
            >
              "A new study by Aldi has revealed that bananas are the most
              commonly discarded fresh food in the UK, with Brits wasting an
              astonishing 3.2 billion bananas every year. This equates to an
              average of 115 bananas per household annually across the UK’s 28.4
              million households" (Shales).
            </div>
            <div className="col-12 col-md-6">
              <img src={Banana} className="img-fluid food-img" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img src={Carrot} className="img-fluid food-img" />
            </div>
            <div className="col-md-6 no-cut" id="CarrotTxt">
              <div class="carrot-body">
                <p>
                  "Results from a total of 4,740 interviews suggested that fresh
                  produce, such as potatoes, broccoli, carrots, bananas, apples,
                  and onions, is more likely to be wasted than other foods...
                  commonly wasted items included carrots (19.9 per cent)"
                  (Jones).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="DonutTxt"
            >
              <div class="donutBody">
                <AlternatingColorText
                  text={`Krispy Kreme, Inc., specifically its UK team, partnered with the food waste saving app ... to notify consumers about end-of-day donuts that are available for purchase at a discount, leading to nearly 275,000 donuts being sold and saving 113.7 tonnes of CO2e, which is equal to 128 flights from London to New York (Sosland).`}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={Donut} className="img-fluid food-img" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img src={Egg} className="img-fluid food-img" />
            </div>
            <div className="col-md-6 no-cut" id="EggTxt">
              <div class="EggBg">
                <div class="EggInfo">
                  <p>
                    "Britons are throwing away 720m eggs every year – three
                    times more than in 2008 and at a cost of £139m – according
                    to research...The research also showed that 29% of Britons
                    throw away eggs solely because they are past their best
                    before date. However, eggs are often still good and safe to
                    eat long after the date on the packaging has passed"
                    (Smithers).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="FriesTxt"
            >
              <div class="friesBody">
                <p>
                  "In 2022, 1.05 billion tonnes of food were wasted—19% of food
                  at the consumer level (retail, food service and households)""
                  (UNEP, 2024).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Fries} className="img-fluid food-img" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img src={Grapes} className="img-fluid food-img" />
            </div>
            <div className="col-md-6 no-cut" id="grapesTxt">
              <div class="grapesBody">
                <p>
                  For grapes, "Mean on-farm losses immediately after harvest was
                  13.9% in 2017 and 5.97% in 2018, ranging from 5.51% to 23.3%
                  for individual farms" (Blanckenberg et al.). Then, after cold
                  storage of 14 days, "mean grape losses were 3.05% in 2017 and
                  2.41% in 2018, which increased to 7.41% in 2017 and 2.99% in
                  2018, after 28 days" (Blanckenberg et al.).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="HotdogTxt"
            >
              <div class="hotdogBody">
                <p>
                  "It is estimated that as much as 23% of production in the meat
                  sector is lost and wasted. The largest share is generated at
                  the consumption level, representing 64% of the total food
                  waste, followed by manufacturing (20%), distribution (12%) and
                  primary production and post-harvest (3.5%)" (Karwowska et
                  al.).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Hotdog} className="img-fluid food-img" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img
                src={IcebergLettuce}
                className="img-fluid food-img"
                id="lettuceImg"
              />
            </div>
            <div className="col-md-6 no-cut" id="LettuceTxt">
              <div class="lettuceBody">
                <p>
                  "Data indicate that up to 41% of salad is wasted during
                  typical fresh-cut iceberg salad processing because of the
                  removal of the external leaves and core, accounting for nearly
                  all the total waste production" (Pinotti et al.).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="JackfruitTxt"
            >
              <div class="jackfruitBody">
                <p>
                  "The importance of jackfruit is still that even with the
                  volumes of this crop that are produced, it is estimated every
                  year that one-third of the crop is being wasted due to
                  improper post-harvest management, absence of infrastructure
                  and post-processing infrastructure" (Shyamsunder et al.).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Jackfruit}
                className="img-fluid food-img"
                id="jackfruitImg"
              />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img src={Kiwi} className="img-fluid food-img" />
            </div>
            <div className="col-md-6 no-cut" id="KiwiTxt">
              <div class="kiwiBody">
                <p>
                  For Kiwis, "This mechanical damage can result in bruising and
                  severely reduce marketability by altering the fruit’s physical
                  and chemical properties. Research indicates that mechanical
                  damage can lead to substantial postharvest losses ranging from
                  30% ~ 50%" (He et al.).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="LemonTxt"
            >
              <div class="lemonBody">
                <p>
                  "According to the latest estimates provided by the Spanish
                  agricultural union COAG, in the 2023-2024 season, around
                  400,000 tons of lemons cannot be sold and will go to waste —
                  about 27% of the planned production. Losses from this massive
                  waste are estimated at €120 million ($129 million)" (Álvarez).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Lemon} className="img-fluid food-img" id="lemonImg" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-12 col-md-6">
              <img src={Milk} className="img-fluid food-img" id="milkImg" />
            </div>
            <div className="col-12 col-md-6 no-cut" id="MilkTxt">
              <div class="milkBody">
                <p>
                  "330,000 tonnes of milk waste each year were identified. From
                  processing to our homes...90% of this milk waste occurs in the
                  home equating to 490 million pints of milk" (“Opportunities to
                  Reduce Waste along the Journey of Milk, from Dairy to Home”).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="NuggetTxt"
            >
              <div class="nuggetBody">
                <p>
                  "Kahiki Foods...had an excessive amount of waste on their
                  chicken nugget product line; their average daily waste was
                  9.72 percent...The daily amount of waste on the line averaged
                  4,976 pounds (for two production lines running two shifts)"
                  (Kinneberg).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Nuggets}
                className="img-fluid food-img"
                id="nuggetImg"
              />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img src={Onion} className="img-fluid food-img" />
            </div>
            <div className="col-md-6 no-cut" id="OnionTxt">
              <div class="onionBody">
                <p>
                  "The total postharvest loss of onion at the farmer, wholesale,
                  retail, and consumer level was found to be 29.775%, of which
                  the higher proportion of losses (35.5%) was observed at the
                  farmer's level"(Yeshiwas et al.).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="PotatoTxt"
            >
              <div class="potatoBody">
                <p>
                  "41–46% of all processing potatoes and 53–56% of all table
                  potatoes are not eaten by consumers... Over 50% of all losses
                  are due to quality defects in the potatoes. Around one-third
                  of all potatoes with quality defects are rejected owing to
                  their potential harmfulness to human health, whilst two-thirds
                  of these potatoes are rejected because they fail to meet the
                  freshness and quality criteria of trading partners and
                  consumers" (Zaugg).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Potato} className="img-fluid food-img" id="potatoImg" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6 no-cut" id="QuinoaTxt">
              <img src={Quinoa} className="img-fluid food-img" id="quinoaImg" />
            </div>
            <div className="col-md-6">
              <div class="quinoaBody">
                <p>
                  Households generate 60% of all food waste—equivalent to 631
                  million tonnes in 2022. Food services contribute 290 million
                  tonnes and retail 131 million (UNEP, 2024).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="RaspberryTxt"
            >
              <div class="raspberryBody">
                <p>
                  "Raspberries can lose up to 60% of shelf life if bruised or
                  harvested overripe" (Perkins-Veazie & Collins, 2002).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Raspberry}
                className="img-fluid food-img"
                id="raspberryImg"
              />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img src={Salmon} className="img-fluid food-img" id="salmonImg" />
            </div>
            <div className="col-md-6 no-cut" id="SalmonTxt">
              <div class="salmonBody">
                <p>
                  "In 2021, approximately 23.8 million tonnes of aquatic foods
                  were lost or wasted, representing 14.8% of global production"
                  (“Investigating Global Aquatic Food Loss and Waste”).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="TomatoTxt"
            >
              <div class="tomatoBody">
                <p>
                  "Only 41% of produced tomatoes are actually consumed, with
                  waste occurring at various stages: 23.5% during harvest, 35%
                  in post-harvest processes, 3.9% at retail, and 20.2% in
                  households" (Bath et al.).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Tomato} className="img-fluid food-img" id="tomatoImg" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6" id="Udon">
              <img src={Udon} className="img-fluid food-img" id="udonImg" />
            </div>
            <div className="col-md-6 no-cut" id="UdonTxt">
              <div class="udonBody">
                <p>
                  "Rotting food in landfills contributes up to 14% of global
                  methane emissions, a greenhouse gas over 80 times more potent
                  than CO₂ over 20 years" (calculated through US EPA, 2025).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="VealTxt"
            >
              <div class="vealBody">
                <p>
                  "The average person wastes 79 kg of food each year—equivalent
                  to at least 1 billion meals wasted every day" (UNEP).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Veal} className="img-fluid food-img" id="vealImg" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img
                src={Watermelon}
                className="img-fluid food-img"
                id="watermelonImg"
              />
            </div>
            <div className="col-md-6 no-cut" id="WatermelonTxt">
              <div class="watermelonBody">
                <p>
                  "100% of a watermelon is edible, including the seeds and the
                  rind. This means watermelon is a zero food waste food. The
                  green skin is even edible but certainly it needs to be cooked"
                  (“Facts & FAQs”).
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="XOTxt"
            >
              <div class="xoBody">
                <p>
                  "The UK wastes approximately 9.52 million tonnes of food every
                  year. This total is enough to feed upwards of 30 million
                  people a year, yet 8.4 million live in food poverty in the UK"
                  (Waste Managed).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={XOSauce} className="img-fluid food-img" id="xoImg" />
            </div>
          </div>
          <div className="row align-items-center fact-row">
            <div className="col-md-6">
              <img src={Yogurt} className="img-fluid food-img" id="yogurtImg" />
            </div>
            <div className="col-md-6 no-cut" id="YogurtTxt">
              <div class="yogurtBody">
                <p>
                  <AlternatingColorText2
                    text={`Today, around 9% of yogurt is wasted by consumers at home
                  according to Label better, less waste | WRAP UK" (“Why Choose
                  between More Taste and Less Waste in Yogurts?”).`}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center fact-row flex-md-row-reverse">
            <div
              className="col-12 col-md-6 order-1 order-md-1 no-cut"
              id="ZuchinniTxt"
            >
              "The food currently wasted in Europe could feed 200 million
              people, in Latin America 300 million people, and in Africa 300
              million people" (Robinson).
            </div>
            <div className="col-md-6">
              <img
                src={Zuchini}
                className="img-fluid food-img"
                id="zucchiniImg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
