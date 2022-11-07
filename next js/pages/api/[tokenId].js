// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Description } from "@ethersproject/properties";

export default function handler(req, res) {
  const tokenId = req.query.tokenId;

  const name =  `Casual Nft Mint # ${tokenId}`;
  const description = `Casual Nft is collection for web3 developer`
  const image = `https://github.com/Mouazzama-dev/Nft-Minting-dapp/blob/main/next%20js/public/cryptodevs/${Number(tokenId)}.svg`

  return res.json({
    name: name,
    description: description,
    image: image,
  });
}
