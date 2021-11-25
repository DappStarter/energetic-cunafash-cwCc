require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million property install indoor flower select'; 
let testAccounts = [
"0xc6e12dda591ea1e8714021de62c4c3a7fc87d250124b9ba3b4097ac2af1dd069",
"0xb88f031c742ca0dc7f1aacd08fa9c5771d7a0f5e139aed46d6beb0f8371636f8",
"0xc63b6d4c5697ce81428d890a79f61806b419ae423c2bb9cd5291bf5a4b3a7eac",
"0x8b564b1b08458c59f7f4c970a12aea3af170f3ac4d0d65553e01bb6171bc441b",
"0xa13bbcdad9592eb8ec82197f449645f31399853134b72294c133d951f8ade207",
"0x752dfc2940af55cfcd9e598d45701c4e9c58337c14315c38d2d009120a878c70",
"0x3e069306cc13f937e9028d7610e61b3a661d75b5093c936fb05def8be30b4f0a",
"0x71f95f1afdbb7a72f844bbd754fe5a922795d1a84c44adcb7c932739e73a65de",
"0x29fc09671ae3bdee73d39e7650690655f1fa45face1eba343b6714cf395e4c5d",
"0xa199c232febd2b6a78f378af48018d4a60be4b8f682e1ff8d0b91dbe5a69932c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


