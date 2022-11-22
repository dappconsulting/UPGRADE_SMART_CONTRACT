async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    // I think it takes the above upgraded contract's ABI code and implements it via below function and then points proxy contract to it, instead of old contract.
    // OR the above contract is already deployed, and below function/tx just links the two up.
    let box = await upgrades.upgradeProxy("0xe39EbA32DB86188CdD4f1E3410A1c72A6F93fA28", BoxV2)
    // now, the below box.address is the proxy contract address. It doesnt change after each upgrade!
    console.log("Your upgraded proxy is done!", box.address)

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
