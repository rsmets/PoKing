/**
 * Constants for the application:
 *
 * Addresses, URLs, etc.
 */
export const addresses = {
  token: "FzWSfb8dxbuaeuCfS9grS6r5ZwfQ7ukVCH3UBnbbRrrZ",
};

export const urls = {
  birdeye: `https://birdeye.so/token/${addresses.token}?chain=solana`,
  dexscreener: `https://dexscreener.com/solana/${addresses.token}`,
  raydiumlp: `https://raydium.io/liquidity/add/?coin0=${addresses.token}&coin1=sol&fixed=coin0&ammId=AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA`,
  raydiumbuy: `https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${addresses.token}&outputSymbol=AF&fixed=in`,
  githuborg: "https://github.com/orgs/JT-Labs-LLC",
  telegram: "https://t.me/pokingcoin",
  twitter: "https://twitter.com/POKINGsolana",
  jupiter: `https://t0.jup.ag/swap/AF_${addresses.token}-SOL`,
  explorer: `https://solana.fm/address/${addresses.token}`,
  rugcheck: `https://rugcheck.xyz/tokens/${addresses.token}`,
  launchpad:
    "https://solanapad.io/launchpad-list/4cHPf3qBopHrcCYnGivwEgJP77vEEKdyLeJtbJ5jFrY7",
};
