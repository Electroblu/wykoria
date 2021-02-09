import Head from "next/head";
import Link from "next/link";

export default function Economy() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Economy</title>
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
        <h1 className="x-large text-primary center">Economy</h1>
        <p>
          Wykoria uses the Elemental Gems plugin for economy on the server. this
          plugin will cause gems to drop from killing mobs, farming crops and
          mining when a gem drops it can be added to your wallet by right
          clicking while holding the gems. They can be later withdrawn to trade
          with other players or interact with shops. gems can also be used to
          purchase hihger ranks unlocking new perks as well as increasing your
          total claim blocks to grow your protected areas. They can also
          purchase upgrades to the gems system such as increasing the amount of
          gems a mob will drop, increase the chance of gems droping from mobs
          and also increase the discount in the gems shop to upgrade your rank.
        </p>
        <br></br>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/9UHKez8bdOg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br></br>
        <h3 className="large text-primary center">Commands</h3>
        <table className="table">
          <thead>
            <tr>
              <th className="c">Command</th>
              <th className="c">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gems">/gems blanace</td>
              <td className="gems">see balance in your wallet</td>
            </tr>
            <tr>
              <td className="gems">/gems withdraw (amount)</td>
              <td className="gems">
                withdraw the specified amount to your inventory
              </td>
            </tr>
            <tr>
              <td className="gems">/gems upgrade</td>
              <td className="gems">open the gems upgrade pannel</td>
            </tr>
            <tr>
              <td className="gems">/gems shops</td>
              <td className="gems">
                open the gems shop pannel to purchace ranks
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <div>
          <h3 className="large text-primary">Gem Upgrades</h3>
          <p>
            Gem upgrades are in three catergories: Fortune, Luck and Discount.
            Each category has 10 levels with reach level incresing the benefits
            of that category. for more details on the amount of gems you can get
            from each source view the{" "}
            <Link href="/drop-rates">
              <a className="text-light-green">Drop Rates</a>
            </Link>{" "}
            page.
          </p>
          <br></br>
          <div>
            <h3 className="large text-primary">Fortune</h3>
            <p>
              Fortune increases the amount of gems that can drop from any given
              source. Players will start with 0 levels in fortune
            </p>
            <br></br>
            <table className="table">
              <thead>
                <tr>
                  <th className="c">Level</th>
                  <th className="c">Cost (Gems)</th>
                  <th className="c">Increase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fortune c">1</td>
                  <td className="fortune c">500</td>
                  <td className="fortune c">x1.25</td>
                </tr>
                <tr>
                  <td className="fortune c">2</td>
                  <td className="fortune c">1000</td>
                  <td className="fortune c">x1.5</td>
                </tr>

                <tr>
                  <td className="fortune c">3</td>
                  <td className="fortune c">2000</td>
                  <td className="fortune c">x1.75</td>
                </tr>
                <tr>
                  <td className="fortune c">4</td>
                  <td className="fortune c">4000</td>
                  <td className="fortune c">x2</td>
                </tr>
                <tr>
                  <td className="fortune c">5</td>
                  <td className="fortune c">8000</td>
                  <td className="fortune c">x2.25</td>
                </tr>
                <tr>
                  <td className="fortune c">6</td>
                  <td className="fortune c">16000</td>
                  <td className="fortune c">x2.5</td>
                </tr>
                <tr>
                  <td className="fortune c">7</td>
                  <td className="fortune c">32000</td>
                  <td className="fortune c">x2.75</td>
                </tr>
                <tr>
                  <td className="fortune c">8</td>
                  <td className="fortune c">64000</td>
                  <td className="fortune c">x3</td>
                </tr>
                <tr>
                  <td className="fortune c">9</td>
                  <td className="fortune c">128000</td>
                  <td className="fortune c">x4</td>
                </tr>
                <tr>
                  <td className="fortune c">10</td>
                  <td className="fortune c">256000</td>
                  <td className="fortune c">x5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <div>
            <h3 className="large text-primary">Luck</h3>
            <p>
              Luck increase the drop chance of gems that can drop from any given
              source. Players will start with 0 levels in luck
            </p>
            <br></br>
            <table className="table">
              <thead>
                <tr>
                  <th className="c">Level</th>
                  <th className="c">Cost (Gems)</th>
                  <th className="c">Increase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="luck c">1</td>
                  <td className="luck c">500</td>
                  <td className="luck c">+2%</td>
                </tr>
                <tr>
                  <td className="luck c">2</td>
                  <td className="luck c">1000</td>
                  <td className="luck c">+4%</td>
                </tr>
                <tr>
                  <td className="luck c">3</td>
                  <td className="luck c">2000</td>
                  <td className="luck c">+6%</td>
                </tr>
                <tr>
                  <td className="luck c">4</td>
                  <td className="luck c">4000</td>
                  <td className="luck c">+8%</td>
                </tr>
                <tr>
                  <td className="luck c">5</td>
                  <td className="luck c">8000</td>
                  <td className="luck c">+10%</td>
                </tr>
                <tr>
                  <td className="luck c">6</td>
                  <td className="luck c">16000</td>
                  <td className="luck c">+12%</td>
                </tr>
                <tr>
                  <td className="luck c">7</td>
                  <td className="luck c">32000</td>
                  <td className="luck c">+14%</td>
                </tr>
                <tr>
                  <td className="luck c">8</td>
                  <td className="luck c">64000</td>
                  <td className="luck c">+16%</td>
                </tr>
                <tr>
                  <td className="luck c">9</td>
                  <td className="luck c">128000</td>
                  <td className="luck c">+18%</td>
                </tr>
                <tr>
                  <td className="luck c">10</td>
                  <td className="luck c">256000</td>
                  <td className="luck c">+25%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <div>
            <h3 className="large text-primary">Discount</h3>
            <p>
              Discount will increase your discount on purchasing Ranks or any
              other items offered in the gem shop. Players will start with 0
              levels in dicount
            </p>
            <br></br>
            <table className="table">
              <thead>
                <tr>
                  <th className="c">Level</th>
                  <th className="c">Cost (Gems)</th>
                  <th className="c">Discount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="discount c">1</td>
                  <td className="discount c">500</td>
                  <td className="discount c">1%</td>
                </tr>
                <tr>
                  <td className="discount c">2</td>
                  <td className="discount c">1000</td>
                  <td className="discount c">2%</td>
                </tr>
                <tr>
                  <td className="discount c">3</td>
                  <td className="discount c">2000</td>
                  <td className="discount c">3%</td>
                </tr>
                <tr>
                  <td className="discount c">4</td>
                  <td className="discount c">4000</td>
                  <td className="discount c">4%</td>
                </tr>
                <tr>
                  <td className="discount c">5</td>
                  <td className="discount c">8000</td>
                  <td className="discount c">5%</td>
                </tr>
                <tr>
                  <td className="discount c">6</td>
                  <td className="discount c">16000</td>
                  <td className="discount c">10%</td>
                </tr>
                <tr>
                  <td className="discount c">7</td>
                  <td className="discount c">32000</td>
                  <td className="discount c">15%</td>
                </tr>
                <tr>
                  <td className="discount c">8</td>
                  <td className="discount c">64000</td>
                  <td className="discount c">20%</td>
                </tr>
                <tr>
                  <td className="discount c">9</td>
                  <td className="discount c">128000</td>
                  <td className="discount c">25%</td>
                </tr>
                <tr>
                  <td className="discount c">10</td>
                  <td className="discount c">256000</td>
                  <td className="discount c">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
