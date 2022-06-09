require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note script until install enter obscure switch'; 
let testAccounts = [
"0xf5d41050162a84e64ee3069c060e41fcc8ae9cac562e97779a20028a2521c4ca",
"0x410781fc232a9229417789048ea921a95b98965cfa4c2c99a11241f23e960f11",
"0x1782c82d3cd074fd0e3e654c44a28af427aa712e4ae29af27b323559addbf7eb",
"0x6770a120c0d6a3256f1e0e2ceff0a1d0f6ccfe76a814a084dba076d2ce902995",
"0x4e5076001ff3def1138cf742a77ba15abd532335f01d294b98b01277f29b4544",
"0x64417249235c168f82747506b121e8d246056e95fdce7238c87bf8396b58f470",
"0xbc681889af585cadfb98dad83fd48639434d886acf7c35b24f1cf1d7e7b15383",
"0x023b7372b9791f54ecec5f287917063545b607d5ec54cdfeb57094bbd9cd3bce",
"0x8ecd686f5f4623afb4d04a0e02a3d79ecf6f0be52f6d48a6c3bca9f025d5cf77",
"0x8eb5fb7943630ab289a2dde155f555a2f11b825fd06df37ad85a55c7007c1929"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

