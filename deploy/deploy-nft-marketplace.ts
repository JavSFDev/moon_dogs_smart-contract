// import "@nomiclabs/hardhat-waffle";
// import "@nomiclabs/hardhat-etherscan";
import hre, { ethers } from 'hardhat';

import {
  NftMarketplace
} from '../typechain/pulse';

const verify = async (addr: string, args: any[]) => {
  try {
    await hre.run('verify:verify', {
      address: addr,
      constructorArguments: args
    });
  } catch (ex: any) {
    if (ex.toString().indexOf('Already Verified') == -1) {
      throw ex;
    }
  }
};

async function main() {
  console.log('Starting deployments');
  const accounts = await hre.ethers.getSigners();

  const deployer = accounts[0];

  const NFTMarketplaceFact = await ethers.getContractFactory('NftMarketplace');

  const nftMarketplace = (await NFTMarketplaceFact.connect(
    deployer
  ).deploy()) as NftMarketplace;
  await nftMarketplace.deployed();

  console.log('Deployments done, waiting for etherscan verifications');
  // Wait for the contracts to be propagated inside Etherscan
  await new Promise((f) => setTimeout(f, 20000));

  await verify(nftMarketplace.address, []);

  console.log('All done');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
