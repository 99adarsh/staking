"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const secretjs_1 = require("secretjs");
const wallet1 = new secretjs_1.Wallet("grant rice replace explain federal release fix clever romance raise often wild taxi quarter soccer fiber love must tape steak together observe swap guitar");
const wallet2 = new secretjs_1.Wallet("jelly shadow frog dirt dragon use armed praise universe win jungle close inmate rain oil canvas beauty pioneer chef soccer icon dizzy thunder meadow");
const wallet3 = new secretjs_1.Wallet("chair love bleak wonder skirt permit say assist aunt credit roast size obtain minute throw sand usual age smart exact enough room shadow charge");
// const wallet4 = new Wallet(
//   "grant rice replace explain federal release fix clever romance raise often wild taxi quarter soccer fiber love must tape steak together observe swap guitar",
// );
// const myAddress = wallet.address;
const url = "https://1317-uditgulati-gitpodlocals-a7jxuz4kvjf.ws-us98.gitpod.io/";
// To create a signer secret.js client, also pass in a wallet
const secretjs1 = new secretjs_1.SecretNetworkClient({
    url,
    chainId: "secretdev-1",
    wallet: wallet1,
    walletAddress: wallet1.address,
});
const secretjs2 = new secretjs_1.SecretNetworkClient({
    url,
    chainId: "secretdev-1",
    wallet: wallet2,
    walletAddress: wallet2.address,
});
const secretjs3 = new secretjs_1.SecretNetworkClient({
    url,
    chainId: "secretdev-1",
    wallet: wallet3,
    walletAddress: wallet3.address,
});
const validator = "secretvaloper1ap26qrlp8mcq2pg6r47w43l0y8zkqm8aynpdzc";
async function run() {
    const amount = await secretjs1.query.bank.balance({
        address: "secret1ap26qrlp8mcq2pg6r47w43l0y8zkqm8a450s03",
        denom: "uscrt",
    } /*,
    // optional: query at a specific height (using an archive node)
    [["x-cosmos-block-height", "2000000"]]
    */);
    console.log(" balance: ", amount);
    const tx = await secretjs1.tx.staking.delegate({
        delegator_address: wallet1.address,
        validator_address: validator,
        //   amount: stringToCoin("3000002801235681742uscrt"),
        amount: (0, secretjs_1.stringToCoin)("899999999998950000uscrt"),
    }, {
        gasLimit: 50000,
    });
    console.log(tx);
    const tx1 = await secretjs2.tx.staking.delegate({
        delegator_address: wallet2.address,
        validator_address: validator,
        //   amount: stringToCoin("3000002801235681742uscrt"),
        amount: (0, secretjs_1.stringToCoin)("899999999998950000uscrt"),
    }, {
        gasLimit: 50000,
    });
    console.log(tx1);
    const tx2 = await secretjs3.tx.staking.delegate({
        delegator_address: wallet3.address,
        validator_address: validator,
        //   amount: stringToCoin("3000002801235681742uscrt"),
        amount: (0, secretjs_1.stringToCoin)("899999999998950000uscrt"),
    }, {
        gasLimit: 50000,
    });
    console.log(tx2);
}
run();
// const msg = new MsgSend({
//   from_address: myAddress,
//   to_address: bob,
//   amount: stringToCoins("1uscrt"),
// });
// const tx = await secretjs.tx.broadcast([msg], {
//   gasLimit: 20_000,
//   gasPriceInFeeDenom: 0.1,
//   feeDenom: "uscrt",
// });
//# sourceMappingURL=script.js.map