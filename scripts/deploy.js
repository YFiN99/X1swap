async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Factory = await ethers.getContractFactory("X1Factory");
  const factory = await Factory.deploy();
  await factory.waitForDeployment();
  console.log("Factory deployed to:", factory.target);

  const Router = await ethers.getContractFactory("X1Router");
  const router = await Router.deploy(factory.target);
  await router.waitForDeployment();
  console.log("Router deployed to:", router.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
