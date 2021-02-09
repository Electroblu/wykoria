import Head from "next/head";

export default function Shops() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Shops</title>
      </Head>
      <div class="dark-overlay"></div>
      <div class="container">
        <div>
          <h1 class="x-large text-primary center">Player Shops</h1>
          <p>
            Shopkeeper is being used to create player shops. Shops are created
            using an egg given by the /shopkeeper give command
          </p>
          <p>
            There are no limits on the amount of shops you can have. So you can
            have as different shop for each type of item you wish to sell
          </p>
        </div>
        <br></br>
        <div class="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/2VIogoTdSAE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br></br>
        <div>
          <h2 class="large text-primary">How to Use</h2>
          <h3>Step 1</h3>
          <p>
            Type <span class="code">/shopkeeper give</span> command in chat to
            recive the item needed to create a shop
          </p>
          <br></br>
          <h3>Step 2</h3>
          <p>
            Right click in the air with the item in hand until Trading Shop is
            selected
          </p>
          <br></br>
          <h3>Step 3</h3>
          <p>
            Right click on a chest with the item. This will set that chest at
            the container for the shop
          </p>
          <p>
            Single Chests, Double Chests, Trapped Chests, Barrels and Shulkers
            can all be used as the container for the shop
          </p>
          <br></br>
          <h3>Step 4</h3>
          <p>
            Right click on the location you would like your shop villager for
            others to interact with. Max distance 16 blocks from container
          </p>
          <br></br>
          <h3>Step 5</h3>
          <p>Place the items you want to sell in the container chest</p>
          <br></br>
          <h3>Step 6</h3>
          <p>
            Wile holding shift right click your shop villager to edit your shop
          </p>
          <br></br>
          <h3>Step 7</h3>
          <p>
            On the bottom row of the editing GUI you can Change your shop name
            this will be displayed as a nametag on the shop
          </p>
          <p>You can view the inventory in the container chest</p>
          <p>You can toggle on/off baby villagers</p>
          <p>You can select the look of a proffesion for your villager shop</p>
          <p>
            You can select the biome region of your villager shop (this can be
            hard to see what one you have seleced in the GUI)
          </p>
          <p>
            You can select your rank of villager as if you had traded with them
            to increase their rank.
          </p>
          <p>
            You can delete a shop by clicking the bone in the bottom right
            corner
          </p>
          <br></br>
          <h3>Step 8</h3>
          <p>
            Once you are happy with the name and look of your shop you can set
            your selling prices in the shop
          </p>
          <p>
            Each of the different Items in your container chest will be along
            the top row in the GUI the two empty slots underneth are what are
            used to set the trade price
          </p>
          <p>
            place the item/items your which to trade for ie someone can purchase
            Stone from you for Gems etc
          </p>
          <br></br>
          <h3>Step 9</h3>
          <p>
            To set a sell and buy price left click the item you are selling to
            increase amount up to 1 stack and right click to decrease the amount
          </p>
          <p>repeat this for the items you wish to trade for</p>
          <p>
            So you can set your shop to look like 1 stack of Stone for 2 Gems
          </p>
          <br></br>
          <h3>Step 10</h3>
          <p>
            Once you are happy with your prices your shop is done and you can
            walk away for people to interact with
          </p>
          <br></br>
          <h3>Step 11</h3>
          <img class="my-1" src="./images/stonks.jpg" alt="stonks" />
        </div>
        <br></br>
        <div>
          <h2 class="large text-primary">
            Resocking Shops and Collecting Profits
          </h2>
          <p>
            To restock your shop all you need to do is just refill the container
            the chest with the items your set up to sell in your shop
          </p>
          <p>
            Any purchases made in your shop the traded items will be stored in
            the container chest for you to collect at any time
          </p>
          <p>
            Make sure there is enough room in your container chest to collect
            your profits, ie if your selling 16 Smooth Stone for 5 Gems but your
            filling your chest with full stacks leave 1 slot empty so the gems
            can be stored in the chest. If you are selling full stacks you do
            not need to worry about this as the sold item stack will be replaced
            with the gem. this also goes the other way if you selling items for
            greater than 64 Gems you will need to have 1 empty slot per item so
            all the gems can be stored in the chest. Another solution is to set
            up a redstone item filter to drain the gems from the chest into a
            different container so you would only need 1 empty slot then.
          </p>
        </div>
        <br></br>
        <div>
          <h2 class="large text-primary">Using Another Players Shop</h2>
          <p>
            Simply right click on the shop like you would to trade with the
            villager this will open an interface the same as trading with a
            villager
          </p>
          <p>Select the item you wish to buy and trade with the shop</p>
          <p>
            If an item is out of stock a cross will appear over the trade
            indicating the shop is out of stock. Send the player a reminder
            their shop is out of stock
          </p>
        </div>
      </div>
    </div>
  );
}
