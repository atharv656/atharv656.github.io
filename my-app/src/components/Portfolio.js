import React from "react";
import "./style/style.css"

export default function AboutMe(){
  return (
    <portfolio>
      <div class="Banner" id="contactBanner">
        <div class="InnerBanner" id="Portfolio">
          <h1>Portfolio</h1>
          <ul>
            <li>
              <a href="https://github.com/atharvagashe/DeFi_Data_Logger">DeFi Bot</a>
              <br></br>
              <p>	About a year ago, I started learning about Decentralized Finance (DeFi), a wave of technologies in the Crypto world that created decentralized counterparts to centralized financial systems for fiat currencies. The counterpart to FOREX, the Decentralized Exchange (or DEX for short), particularly caught my attention because it allowed created a system that didn’t require order books to determine price, opting for liquidity pools where the ratio between the liquidity of a pair of assets determined their price relative to each other. The key here is that the price only changes when a transaction is made (going up when bought and down when sold). This means that if bitcoins price goes up on exchange A, it doesn’t go up on exchange B until people buy on exchange B (raising the price on B) in order to sell on exchange A (lowering the price on A), making profit on the way — this system relied on arbitrage to operate. So, I created a bot to find these arbitrage opportunities. This bot uses Selenium to scrape the top 100 sites exchanges in Volume, checks the exchange rate between 10 currency pairs, and logs the price to a SQL database. There is a separate discord bot that runs from my house (and is unfortunately not in this repo) that combs through the database and messages you when a profitable arbitrage opportunity is found. This bot has resulted in a 327% ROI to date!
              </p>
            </li>
            <li>
              <a href="https://github.com/fidgetspinnerkid/face_recognition_doorbell">Face Recognition Doorbell</a>
              <br></br>
              <p>
                A couple years ago, I went to the MAHacks Hackathon in Boston with a couple of friends. We built the Smart Lock, a security system that used facial recognition to differentiate between friendly faces and unknown people to identify potential threats and notify users of security threats rapidly. Given around 3-5 images of a person, it could whitelist them so that the door would automatically unlock for them (allowing family members to enter whenever). It could also be toggled to recognize some faces as friends who could enter with permission from the owners, as well as identify and notify owners of “threats” — faces that loitered around the property for extended periods of time.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </portfolio>
  )
}
