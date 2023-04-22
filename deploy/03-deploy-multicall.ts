import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Multicall3__factory } from "../typechain-types";
import { Ship } from "../utils";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy } = await Ship.init(hre);

  console.log("----------------------------------------------------");
  const multicall = await deploy(Multicall3__factory);

  console.log(`Multicall contract deployed to ${multicall.address}`);
};

export default func;
func.tags = ["all", "multicall"];
