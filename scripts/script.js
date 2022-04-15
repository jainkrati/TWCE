async function renderUI() {

}

function createWallet() {
    // let wallet = HDWallet(strength: 128, passphrase: "");
    const mnemonic = bip39.generateMnemonic(); //generates string
    const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
}
renderUI();



