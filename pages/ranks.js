import Head from "next/head";

export default function Ranks() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Ranks</title>
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
          <h1 className="x-large text-primary center">Ranks</h1>
          <p>
            Wykoria uses a rank system for increasing the amount of claim blocks
            a player has as well as giving players new perks as they reach
            higher ransk. to view ranks type{" "}
            <span className="code">/gems shop</span> and go to ranks to view all
            the available ranks. In order to rank up you must have amount of
            gems needed to purchase the rank in your wallet as well as be the
            previous rank to rank up, you cannot skip ranks.
          </p>
          <br></br>
          <p>
            Hovering over a rank in the shop will tell you the cost of the rank
            as well as the perks gained by that rank. Each rank will add a
            suffix to your name displaying your rank in chat. by defualt
            everyone starts at the Wood rank.
          </p>
          <br></br>
          <p>
            Perks and ranks may be adjusted over time introducing new ranks or
            perks. If perks are adjusted your will automatically gain the new
            perk. If ranks are added/sdjusted you will put into the most
            approprite rank based on the new ranks, this may mean you may gain
            or lose some perks you previously had.
          </p>
        </div>
        <br></br>
        <div>
          <h2 className="large text-primary">Rank Progression</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Cost (Gems)</th>
                <th>Claim Block Limit</th>
                <th>Perks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ranks">Stone</td>
                <td className="ranks">500</td>
                <td className="ranks">1,024 (4 Chunks)</td>
                <td className="ranks">N/A</td>
              </tr>
              <tr>
                <td className="ranks">Iron</td>
                <td className="ranks">5,000</td>
                <td className="ranks">2,304 (9 Chunks)</td>
                <td className="ranks">Can subdivide claims</td>
              </tr>
              <tr>
                <td className="ranks">Redstone</td>
                <td className="ranks">10,000</td>
                <td className="ranks">4,096 (16 Chunks)</td>
                <td className="ranks">N/A</td>
              </tr>
              <tr>
                <td className="ranks">Lapis</td>
                <td className="ranks">20,000</td>
                <td className="ranks">6,400 (25 Chunks)</td>
                <td className="ranks">Can transfer claims</td>
              </tr>
              <tr>
                <td className="ranks">Gold</td>
                <td className="ranks">40,000</td>
                <td className="ranks">9,216 (36 Chunks)</td>
                <td className="ranks">N/A</td>
              </tr>
              <tr>
                <td className="ranks">Diamond</td>
                <td className="ranks">80,000</td>
                <td className="ranks">12,544 (49 Chunks)</td>
                <td className="ranks">N/A</td>
              </tr>
              <tr>
                <td className="ranks">Emerald</td>
                <td className="ranks">160,000</td>
                <td className="ranks">16,384 (64 Chunks)</td>
                <td className="ranks">
                  Can use <span className="code">/fly</span> in the Nether
                </td>
              </tr>
              <tr>
                <td className="ranks">Netherite</td>
                <td className="ranks">320,000</td>
                <td className="ranks">20,736 (81 Chunks)</td>
                <td className="ranks">
                  Can use <span className="code">/fly</span> in all worlds
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
