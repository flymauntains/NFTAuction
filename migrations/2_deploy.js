const NFTAuction = artifacts.require("NFTAuction");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(NFTAuction);
  console.log(deployer.address)
  const nftAuction = await NFTAuction.deployed({from: accounts[1]});

  console.log("NFTAuction deployed at address:", nftAuction.address);
}