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
            base mobs of minecraft.
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
            <h2 className="large text-primary">Mob Catergories</h2>
            <p>
              The custom mobs are split into 4 categories. Basic, Miniboss, Boss
              and Mega Boss. Each category has its own quirks that make them
              unique from regular minecraft mobs.
            </p>
            <br></br>
            <h2 className="large text-primary">Basic Mobs</h2>
            <p>
              Basic mobs can be identified by a red name tag above their heads.
              These mobs will have slightly more health and deal a little extra
              damage compared to their regular mob conterparts. These mobs are
              realatily easy to combat in Iron Armor and with Iron weapons.
            </p>
            <br></br>
            <h2 className="large text-primary">Miniboss Mobs</h2>
            <p>
              Miniboss mobs can be identified by a yellow name tag above their
              heads as well as a yellow boss healthbar on screen. These mobs
              will have unique abilites like summoning other mobs, poision,
              slow, rapid fire. These mobs can be a challage to fight in Iron
              Armor and is recommended to be equiped with diamond gear to fight
              these mobs. Miniboss mobs will drop a diamond named after the
              Miniboss mob, with the exeption of the Skeleton King who will drop
              a custom gold crown, these can be displayed as trophy of
              achievemnet.
            </p>
            <br></br>
            <h2 className="large text-primary">Boss Mobs</h2>
            <p>
              Boss mobs can be identified by a gold name tag above thier heads
              as well as a red boss healthbar on screen. These mobs will have
              more complex abilities than Miniboss mobs as well as dealing large
              amounts of damage to the player. Boss mobs will only spawn in
              specific biomes. These mobs can be tough to fight and is
              recommended to be equiped with fully enchanted diamond gear as
              well as utilising potions to fight these mobs. Boss mobs will drop
              custom armor and weapons apon death.
            </p>
            <br></br>
            <h2 className="large text-primary">Mega Boss</h2>
            <p>
              The Mega Boss mob is currently the greatest challenge and can be
              identified by a purple name tage above thier head as well as a
              purple boss healthbar on screen. These mobs will have several
              abilities, resistances and deal more damage than Boss mobs. It is
              recommened not to fight these mobs without the custom gear dropped
              by Boss mobs, bringing along friends and a variety of potions to
              this encounter will also lead to increased chance of suceess. Apon
              death Mega Boss mobs will drop a unique weapon.
            </p>
            <br></br>
            <table className="table">
              <thead>
                <tr>
                  <th>Mob</th>
                  <th>Category</th>
                  <th>Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mythicmobs">Zombie</td>
                  <td className="mythicmobs">Basic</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Skeleton</td>
                  <td className="mythicmobs">Basic</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Spider</td>
                  <td className="mythicmobs">Basic</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Cave Spider</td>
                  <td className="mythicmobs">Basic</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Creeper</td>
                  <td className="mythicmobs">Basic</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Zombie Queen</td>
                  <td className="mythicmobs">Miniboss</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Skeleton Queen</td>
                  <td className="mythicmobs">Miniboss</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Spider Queen</td>
                  <td className="mythicmobs">Miniboss</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Cave Spider Queen</td>
                  <td className="mythicmobs">Miniboss</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Creeper Boss</td>
                  <td className="mythicmobs">Miniboss</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Skeleton King</td>
                  <td className="mythicmobs">Miniboss</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Sharpshooter</td>
                  <td className="mythicmobs">Boss</td>
                  <td className="mythicmobs">N/A</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Iron Sentinel</td>
                  <td className="mythicmobs">Boss</td>
                  <td className="mythicmobs">Savana Biome</td>
                </tr>
                <tr>
                  <td className="mythicmobs">Silver Archer</td>
                  <td className="mythicmobs">Boss</td>
                  <td className="mythicmobs">Jungle Biome</td>
                </tr>
                <tr>
                  <td className="mythicmobs">The Beast</td>
                  <td className="mythicmobs">Boss</td>
                  <td className="mythicmobs">Badlands or Desert Biome</td>
                </tr>
                <tr>
                  <td className="mythicmobs">The Rabbit</td>
                  <td className="mythicmobs">Boss</td>
                  <td className="mythicmobs">
                    Mountains or Taiga Mountains Biome
                  </td>
                </tr>
                <tr>
                  <td className="mythicmobs">Wizard</td>
                  <td className="mythicmobs">Boss</td>
                  <td className="mythicmobs">
                    Forest, Birch Forest, Dark Forest Biome
                  </td>
                </tr>
                <tr>
                  <td className="mythicmobs">Necromancer</td>
                  <td className="mythicmobs">Boss</td>
                  <td className="mythicmobs">Swamp Biome</td>
                </tr>
                <tr>
                  <td className="mythicmobs">The Fire Elemental</td>
                  <td className="mythicmobs">Mega Boss</td>
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
