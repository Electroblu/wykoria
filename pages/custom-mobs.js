import Head from "next/head";

export default function CustomMobs() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Custom Mobs</title>
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
          <h1 className="x-large text-primary center">Custom Mobs</h1>
          <p>
            Wykoria has many custom mobs and over time more mobs will be added.
            These custom mobs are there to give some extra difficulty to the
            base mobs of minecraft. the first type of custom mobs you will
            likely encounter will be harder varients of regular mobs these mobs
            will have more HP and deal more damage to players. Custom mobs can
            be identifed with a name tag above thier head.
          </p>
          <br></br>
          <p>
            The second type of custom mob are reffered to add Elite mobs these
            mobs are much harder in comparision to the harder mobs suporting
            their own set of skills like summoning other mobs or high amounts of
            poison damage. You will need some basic gear to be able to take on
            these mobs and come out alive.
          </p>
          <br></br>
          <p>
            We then have the Boss mobs mobs with very unique skill sets, high HP
            and deal a lot damage. Boss mobs also drop uniqe armor and weapons
            that will make repeat encounters easier and allow you to take on the
            Mega Boss Mobs
          </p>
          <br></br>
          <p>
            Mega Boss Mobs are currently the strongest form of Mob on the
            server, currently there is only one Mega Boss Mob The Fire
            Elemental, It is not recommened to fight this mob without the armor
            and weapons that drop from the boss mobs.
          </p>
          <br></br>
          <h2 className="large text-primary">Custom Armor and Weapons</h2>
          <p>
            Along with custom mobs there are some custom weapons and armor that
            can drop from Boss and Mega Boss mobs this gear has custom effects
            and enchants that cannot be obtained through normal means. as more
            players gain this gear the difficulty of custom mobs will increase
            as to not prevent everything becoming trivial again.
          </p>
          <br></br>
          <div>
            <h2 className="large text-primary">Spawn Rates</h2>
            <p>
              Below is the spawn rates for each type of custom mob and any extra
              conditions on the spawn. These may be altered in the future if
              encounters with some mobs become too rare or too frequent
            </p>
            <br></br>
            <table className="table">
              <thead>
                <tr>
                  <th>Mob</th>
                  <th>Spawn Chance</th>
                  <th>Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mythicmobs">Zombie</td>
                  <td className="mythicmobs">10%</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Skeleton</td>
                  <td className="mythicmobs">10%</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Spider</td>
                  <td className="mythicmobs">10%</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Cave Spider</td>
                  <td className="mythicmobs">10%</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Creeper</td>
                  <td className="mythicmobs">10%</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Zombie Queen</td>
                  <td className="mythicmobs">%2</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Skeleton Queen</td>
                  <td className="mythicmobs">%2</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Spider Queen</td>
                  <td className="mythicmobs">%2</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Cave Spider Queen</td>
                  <td className="mythicmobs">%2</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Creeper Boss</td>
                  <td className="mythicmobs">%2</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Skeleton King</td>
                  <td className="mythicmobs">%2</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Sharpshooter</td>
                  <td className="mythicmobs">%2</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Iron Sentinel</td>
                  <td className="mythicmobs">%1</td>
                  <td className="mythicmobs">Savana Biome</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Silver Archer</td>
                  <td className="mythicmobs">%1</td>
                  <td className="mythicmobs">Jungle Biome</td>
                </tr>
                <tr>
                  <td className="mythicmobs">The Beast</td>
                  <td className="mythicmobs">%1</td>
                  <td className="mythicmobs">Badlands or Desert Biome</td>
                </tr>
                <tr>
                  <td className="mythicmobs">The Rabbit</td>
                  <td className="mythicmobs">%1</td>
                  <td className="mythicmobs">
                    Mountains or Taiga Mountains Biome
                  </td>
                </tr>
                <tr>
                  <td className="mythicmobs">Wizard</td>
                  <td className="mythicmobs">%1</td>
                  <td className="mythicmobs">
                    Forest, Birch Forest, Dark Forest Biome
                  </td>
                </tr>
                <tr>
                  <td className="mythicmobs">Necromancer</td>
                  <td className="mythicmobs">%1</td>
                  <td className="mythicmobs">Swamp Biome</td>
                </tr>
                <tr>
                  <td className="mythicmobs">The Fire Elemental</td>
                  <td className="mythicmobs">%0.09</td>
                  <td className="mythicmobs">Tundra, Plains Biome</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
