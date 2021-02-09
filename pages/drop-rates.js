import Head from "next/head";

export default function DropRates() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Drop Rates</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="dark-overlay"></div>
      <div className="container">
        <div>
          <h1 className="x-large text-primary center">Drop Rates</h1>
          <p>
            These are drop rates for gems from each souce. Some mobs, crops and
            ores will not drop gems as the plugin does not recognise any of
            itmes regardless of what format is used. to gain gems you must kill
            the mob, mine the block or harvest the crop yourself gems will not
            drop with automation. Keep this in mind if you are building
            automatic farms.
          </p>
          <br></br>
          <h2 className="large text-primary center">Mobs</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Mob</th>
                <th>Drop Chance</th>
                <th>Gem Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="drops">Cat</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Chicken</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Cod</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Cow</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Donkey</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Fox</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Horse</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Mule</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Ocelot</td>
                <td className="drops">100%</td>
                <td className="drops">1-4</td>
              </tr>
              <tr>
                <td className="drops">Parrot</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Pig</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Polar Bear</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Rabbit</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Salmon</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Sheep</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Skeleton Horse</td>
                <td className="drops">100%</td>
                <td className="drops">1-4</td>
              </tr>
              <tr>
                <td className="drops">Squid</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Strider</td>
                <td className="drops">90%</td>
                <td className="drops">1-4</td>
              </tr>
              <tr>
                <td className="drops">Tropical Fish</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Turtle</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Vilalger</td>
                <td className="drops">10%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Wandering Trader</td>
                <td className="drops">90%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Bee</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Dolphin</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Iron Golem</td>
                <td className="drops">90%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Llama</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Panda</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Pufferfish</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Wolf</td>
                <td className="drops">90%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Bat</td>
                <td className="drops">50%</td>
                <td className="drops">1-2</td>
              </tr>
              <tr>
                <td className="drops">Cave Spider</td>
                <td className="drops">50%</td>
                <td className="drops">1-6</td>
              </tr>
              <tr>
                <td className="drops">Spider</td>
                <td className="drops">50%</td>
                <td className="drops">1-6</td>
              </tr>
              <tr>
                <td className="drops">Creeper</td>
                <td className="drops">50%</td>
                <td className="drops">1-6</td>
              </tr>
              <tr>
                <td className="drops">Drowned</td>
                <td className="drops">50%</td>
                <td className="drops">1-4</td>
              </tr>
              <tr>
                <td className="drops">Elder Guardian</td>
                <td className="drops">50%</td>
                <td className="drops">1-20</td>
              </tr>
              <tr>
                <td className="drops">Evoker</td>
                <td className="drops">50%</td>
                <td className="drops">1-20</td>
              </tr>
              <tr>
                <td className="drops">Guardian</td>
                <td className="drops">50%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Husk</td>
                <td className="drops">50%</td>
                <td className="drops">1-4</td>
              </tr>
              <tr>
                <td className="drops">Phantom</td>
                <td className="drops">50%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Pilagaer</td>
                <td className="drops">50%</td>
                <td className="drops">1-8</td>
              </tr>
              <tr>
                <td className="drops">Ravager</td>
                <td className="drops">50%</td>
                <td className="drops">1-20</td>
              </tr>
              <tr>
                <td className="drops">Silverfish</td>
                <td className="drops">50%</td>
                <td className="drops">1-4</td>
              </tr>
              <tr>
                <td className="drops">Skeleton</td>
                <td className="drops">50%</td>
                <td className="drops">1-8</td>
              </tr>
              <tr>
                <td className="drops">Slime</td>
                <td className="drops">50%</td>
                <td className="drops">1-6</td>
              </tr>
              <tr>
                <td className="drops">Stray</td>
                <td className="drops">50%</td>
                <td className="drops">1-6</td>
              </tr>
              <tr>
                <td className="drops">Vex</td>
                <td className="drops">50%</td>
                <td className="drops">1-8</td>
              </tr>
              <tr>
                <td className="drops">Vindicator</td>
                <td className="drops">50%</td>
                <td className="drops">1-20</td>
              </tr>
              <tr>
                <td className="drops">Witch</td>
                <td className="drops">50%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Zombie</td>
                <td className="drops">50%</td>
                <td className="drops">1-4</td>
              </tr>
              <tr>
                <td className="drops">Zombie Villager</td>
                <td className="drops">50%</td>
                <td className="drops">1-4</td>
              </tr>
              <tr>
                <td className="drops">Piglin</td>
                <td className="drops">50%</td>
                <td className="drops">1-8</td>
              </tr>
              <tr>
                <td className="drops">Zombified Piglin</td>
                <td className="drops">50%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Blaze</td>
                <td className="drops">50%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Ghast</td>
                <td className="drops">50%</td>
                <td className="drops">1-8</td>
              </tr>
              <tr>
                <td className="drops">Hoglin</td>
                <td className="drops">50%</td>
                <td className="drops">1-8</td>
              </tr>
              <tr>
                <td className="drops">Magma Cube</td>
                <td className="drops">50%</td>
                <td className="drops">1-8</td>
              </tr>
              <tr>
                <td className="drops">Piglin Brute</td>
                <td className="drops">50%</td>
                <td className="drops">1-20</td>
              </tr>
              <tr>
                <td className="drops">Wither Skeleton</td>
                <td className="drops">50%</td>
                <td className="drops">1-20</td>
              </tr>
              <tr>
                <td className="drops">Zoglin</td>
                <td className="drops">50%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Endermite</td>
                <td className="drops">50%</td>
                <td className="drops">1-10</td>
              </tr>
              <tr>
                <td className="drops">Enderman</td>
                <td className="drops">50%</td>
                <td className="drops">1-15</td>
              </tr>
              <tr>
                <td className="drops">Shulker</td>
                <td className="drops">50%</td>
                <td className="drops">1-15</td>
              </tr>
              <tr>
                <td className="drops">Wither</td>
                <td className="drops">100%</td>
                <td className="drops">100</td>
              </tr>
              <tr>
                <td className="drops">Ender Dragon</td>
                <td className="drops">50%</td>
                <td className="drops">200</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h2 className="large text-primary center">Mining</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Block</th>
                <th>Drop Chance</th>
                <th>Gem Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="drops-mining">Coal Ore</td>
                <td className="drops-mining">30%</td>
                <td className="drops-mining">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Lapis Ore</td>
                <td className="drops-mining">30%</td>
                <td className="drops-mining">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Iron Ore</td>
                <td className="drops-mining">30%</td>
                <td className="drops-mining">1-10</td>
              </tr>
              <tr>
                <td className="drops-mining">Gold Ore</td>
                <td className="drops-mining">30%</td>
                <td className="drops-mining">1-10</td>
              </tr>
              <tr>
                <td className="drops-mining">Emerald Ore</td>
                <td className="drops-mining">30%</td>
                <td className="drops-mining">1-20</td>
              </tr>
              <tr>
                <td className="drops-mining">Diamond Ore</td>
                <td className="drops-mining">30%</td>
                <td className="drops-mining">1-20</td>
              </tr>
              <tr>
                <td className="drops-mining">Cobblestone</td>
                <td className="drops-mining">5%</td>
                <td className="drops-mining">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Stone</td>
                <td className="drops-mining">5%</td>
                <td className="drops-mining">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Andersite</td>
                <td className="drops-mining">5%</td>
                <td className="drops-mining">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Granite</td>
                <td className="drops-mining">5%</td>
                <td className="drops-mining">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Diorite</td>
                <td className="drops-mining">5%</td>
                <td className="drops-mining">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Gravel</td>
                <td className="drops-mining">5%</td>
                <td className="drops-mining">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Sand</td>
                <td className="drops-mining">5%</td>
                <td className="drops">1-5</td>
              </tr>
              <tr>
                <td className="drops-mining">Dirt</td>
                <td className="drops-mining">5%</td>
                <td className="drops-mining">1-5</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h2 className="large text-primary center">Farming</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Crop</th>
                <th>Drop Chance</th>
                <th>Gem Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="drops-farming">Wheat</td>
                <td className="drops-farming">20%</td>
                <td className="drops-farming">1-5</td>
              </tr>
              <tr>
                <td className="drops-farming">Carrot</td>
                <td className="drops-farming">20%</td>
                <td className="drops-farming">1-5</td>
              </tr>
              <tr>
                <td className="drops-farming">Potato</td>
                <td className="drops-farming">20%</td>
                <td className="drops-farming">1-5</td>
              </tr>
              <tr>
                <td className="drops-farming">Oak Log</td>
                <td className="drops-farming">10%</td>
                <td className="drops-farming">1-5</td>
              </tr>
              <tr>
                <td className="drops-farming">Spruce Log</td>
                <td className="drops-farming">10%</td>
                <td className="drops-farming">1-5</td>
              </tr>
              <tr>
                <td className="drops-farming">Birch Log</td>
                <td className="drops-farming">10%</td>
                <td className="drops-farming">1-5</td>
              </tr>
              <tr>
                <td className="drops-farming">Jungle Log</td>
                <td className="drops-farming">10%</td>
                <td className="drops-farming">1-5</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h2 className="large text-primary center">Fishing</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Fish</th>
                <th>Drop Chance</th>
                <th>Gem Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="drops-fishing">Raw Fish</td>
                <td className="drops-fishing">20%</td>
                <td className="drops-fishing">1-5</td>
              </tr>
              <tr>
                <td className="drops-fishing">Pufferfish</td>
                <td className="drops-fishing">20%</td>
                <td className="drops-fishing">1-5</td>
              </tr>
              <tr>
                <td className="drops-fishing">Tropical Fish</td>
                <td className="drops-fishing">20%</td>
                <td className="drops-fishing">1-5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
