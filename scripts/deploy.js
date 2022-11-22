async function main() {
    const Box = await ethers.getContractFactory("Box")
    // it deploys 3 contracts: proxy, implementation(upgraded contract), admin contract
    // admin contract defines how to work with the proxy contract
    console.log("Deploying Box, ProxyAdmin, and then Proxy...")
    // first successful deployment of proxy > address > 0xe39EbA32DB86188CdD4f1E3410A1c72A6F93fA28
    const proxy = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
    console.log("Proxy of Box deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
