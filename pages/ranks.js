import Head from "next/head";

export default function Ranks() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Ranks</title>
      </Head>
      <div class="dark-overlay"></div>
      <div class="container">
        <div>
          <h1 class="x-large text-primary center">Ranks</h1>
          <p>
            Wykoria uses a rank system for increasing the amount of claim blocks
            a player has as well as giving players new perks as they reach
            higher ransk. to view ranks type{" "}
            <span class="code">/gems shop</span> and go to ranks to view all the
            available ranks. In order to rank up you must have amount of gems
            needed to purchase the rank in your wallet as well as be the
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
          <h2 class="large text-primary">Rank Progression</h2>
          <table class="table">
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
                <td class="ranks">Stone</td>
                <td class="ranks">500</td>
                <td class="ranks">1,024 (4 Chunks)</td>
                <td class="ranks">N/A</td>
              </tr>
              <tr>
                <td class="ranks">Iron</td>
                <td class="ranks">5,000</td>
                <td class="ranks">2,304 (9 Chunks)</td>
                <td class="ranks">Can subdivide claims</td>
              </tr>
              <tr>
                <td class="ranks">Redstone</td>
                <td class="ranks">10,000</td>
                <td class="ranks">4,096 (16 Chunks)</td>
                <td class="ranks">N/A</td>
              </tr>
              <tr>
                <td class="ranks">Lapis</td>
                <td class="ranks">20,000</td>
                <td class="ranks">6,400 (25 Chunks)</td>
                <td class="ranks">Can transfer claims</td>
              </tr>
              <tr>
                <td class="ranks">Gold</td>
                <td class="ranks">40,000</td>
                <td class="ranks">9,216 (36 Chunks)</td>
                <td class="ranks">N/A</td>
              </tr>
              <tr>
                <td class="ranks">Diamond</td>
                <td class="ranks">80,000</td>
                <td class="ranks">12,544 (49 Chunks)</td>
                <td class="ranks">N/A</td>
              </tr>
              <tr>
                <td class="ranks">Emerald</td>
                <td class="ranks">160,000</td>
                <td class="ranks">16,384 (64 Chunks)</td>
                <td class="ranks">
                  Can use <span class="code">/fly</span> in the Nether
                </td>
              </tr>
              <tr>
                <td class="ranks">Netherite</td>
                <td class="ranks">320,000</td>
                <td class="ranks">20,736 (81 Chunks)</td>
                <td class="ranks">
                  Can use <span class="code">/fly</span> in all worlds
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
