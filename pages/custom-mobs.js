import Head from "next/head";

export default function CustomMobs() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Custom Mobs</title>
      </Head>
      <div class="dark-overlay"></div>
      <div class="container">
        <div>
          <h1 class="x-large text-primary center">Custom Mobs</h1>
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
          <h2 class="large text-primary">Custom Armor and Weapons</h2>
          <p>
            Along with custom mobs there are some custom weapons and armor that
            can drop from Boss and Mega Boss mobs this gear has custom effects
            and enchants that cannot be obtained through normal means. as more
            players gain this gear the difficulty of custom mobs will increase
            as to not prevent everything becoming trivial again.
          </p>
          <br></br>
          <div>
            <h2 class="large text-primary">Spawn Rates</h2>
            <p>
              Below is the spawn rates for each type of custom mob and any extra
              conditions on the spawn. These may be altered in the future if
              encounters with some mobs become too rare or too frequent
            </p>
            <br></br>
            <table class="table">
              <thead>
                <tr>
                  <th>Mob</th>
                  <th>Spawn Chance</th>
                  <th>Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="mythicmobs">Zombie</td>
                  <td class="mythicmobs">10%</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Skeleton</td>
                  <td class="mythicmobs">10%</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Spider</td>
                  <td class="mythicmobs">10%</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Cave Spider</td>
                  <td class="mythicmobs">10%</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Creeper</td>
                  <td class="mythicmobs">10%</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Zombie Queen</td>
                  <td class="mythicmobs">%2</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Skeleton Queen</td>
                  <td class="mythicmobs">%2</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Spider Queen</td>
                  <td class="mythicmobs">%2</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Cave Spider Queen</td>
                  <td class="mythicmobs">%2</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Creeper Boss</td>
                  <td class="mythicmobs">%2</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Skeleton King</td>
                  <td class="mythicmobs">%2</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Sharpshooter</td>
                  <td class="mythicmobs">%2</td>
                  <td class="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Iron Sentinel</td>
                  <td class="mythicmobs">%1</td>
                  <td class="mythicmobs">Savana Biome</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Silver Archer</td>
                  <td class="mythicmobs">%1</td>
                  <td class="mythicmobs">Jungle Biome</td>
                </tr>
                <tr>
                  <td class="mythicmobs">The Beast</td>
                  <td class="mythicmobs">%1</td>
                  <td class="mythicmobs">Badlands or Desert Biome</td>
                </tr>
                <tr>
                  <td class="mythicmobs">The Rabbit</td>
                  <td class="mythicmobs">%1</td>
                  <td class="mythicmobs">Mountains or Taiga Mountains Biome</td>
                </tr>
                <tr>
                  <td class="mythicmobs">Wizard</td>
                  <td class="mythicmobs">%1</td>
                  <td class="mythicmobs">
                    Forest, Birch Forest, Dark Forest Biome
                  </td>
                </tr>
                <tr>
                  <td class="mythicmobs">Necromancer</td>
                  <td class="mythicmobs">%1</td>
                  <td class="mythicmobs">Swamp Biome</td>
                </tr>
                <tr>
                  <td class="mythicmobs">The Fire Elemental</td>
                  <td class="mythicmobs">%0.09</td>
                  <td class="mythicmobs">Tundra, Plains Biome</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
