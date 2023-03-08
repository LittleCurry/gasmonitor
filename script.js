var ETHweb3 = new Web3('https://rpc.ankr.com/eth')
var bscweb3 = new Web3('https://bsc-dataseed.binance.org/')
var maticweb3 = new Web3('https://polygon-rpc.com/')
var ftmweb3 = new Web3('https://rpc.ftm.tools/')
var avaxweb3 = new Web3('https://rpc.ankr.com/avalanche')
var moonriverweb3 = new Web3('https://rpc.api.moonriver.moonbeam.network')
var harmonyweb3 = new Web3('https://api.harmony.one')
var arbiweb3 = new Web3('https://arb1.arbitrum.io/rpc')
var cronosweb3 = new Web3('https://evm.cronos.org')
var huobiweb3 = new Web3('https://http-mainnet.hecochain.com')
var okxweb3 = new Web3('https://exchainrpc.okex.org')
var kccweb3 = new Web3('https://rpc-mainnet.kcc.network')
var moonbeamweb3 = new Web3('https://rpc.api.moonbeam.network')
var celoweb3 = new Web3('https://rpc.ankr.com/celo')
var optimismweb3 = new Web3('https://mainnet.optimism.io')
var telosweb3 = new Web3('https://mainnet.telos.net/evm')
var auroraweb3 = new Web3('https://mainnet.aurora.dev')
var metisweb3 = new Web3('https://andromeda.metis.io/?owner=1088')
var fuseweb3 = new Web3('https://rpc.fuse.io')
var rskweb3 = new Web3('https://public-node.rsk.co')
var syscoinweb3 = new Web3('https://rpc.syscoin.org')
var gnosisweb3 = new Web3('https://rpc.gnosischain.com')
var velasweb3 = new Web3('https://evmexplorer.velas.com/rpc')
var bobaweb3 = new Web3('https://mainnet.boba.network')
var shidenweb3 = new Web3('https://shiden.api.onfinality.io/rpc?apikey=d5da52f9-c548-4d48-8a7b-2ebb4d5d8959')
var cloverweb3 = new Web3('https://api-para.clover.finance')
var confluxweb3 = new Web3('https://evm.confluxrpc.com')
var milkomedaweb3 = new Web3('https://rpc-mainnet-cardano-evm.c1.milkomeda.com')
var iotexweb3 = new Web3('https://babel-api.mainnet.iotex.io')
var fusionweb3 = new Web3('https://mainnet.fusionnetwork.io')
var emeraldweb3 = new Web3('https://emerald.oasis.dev')
var reiweb3 = new Web3('https://rpc.rei.network')
var astarweb3 = new Web3('https://rpc.astar.network:8545')
var bttcweb3 = new Web3('https://rpc.bittorrentchain.io')
var tomoweb3 = new Web3('https://rpc.tomochain.com')
var HSCweb3 = new Web3('https://http-mainnet.hoosmartchain.com/')
var thunderweb3 = new Web3('https://mainnet-rpc.thundercore.com/')
var gateweb3 = new Web3('https://evm.gatenode.cc')
var kavaweb3 = new Web3('https://evm.kava.io')
var klaytnweb3 = new Web3('https://public-node-api.klaytnapi.com/v1/cypress')
var etcweb3 = new Web3('https://www.ethercluster.com/etc')
var kardiaweb3 = new Web3('https://rpc.kardiachain.io/')
var cubeweb3 = new Web3('https://http-mainnet-us.cube.network')
var ontologyweb3 = new Web3('https://dappnode3.ont.io:10339')
var mintmeweb3 = new Web3('https://node1.mintme.com')
var smartBCHweb3 = new Web3('https://global.uat.cash')
var arbiNovaweb3 = new Web3('https://nova.arbitrum.io/rpc')
var caduceusweb3 = new Web3('https://mainnet.block.caduceus.foundation')
var stepweb3 = new Web3('https://rpc.step.network')
var dogeweb3 = new Web3('https://rpc03-sg.dogechain.dog')
var rangersweb3 = new Web3('https://mainnet.rangersprotocol.com/api/jsonrpc')
var bobabeamweb3 = new Web3('https://bobabeam.boba.network')
var godwokenweb3 = new Web3('https://v1.mainnet.godwoken.io/rpc')
var milkomedaA1web3 = new Web3('https://rpc-mainnet-algorand-rollup.a1.milkomeda.com')
var wemix3web3 = new Web3('https://api.wemix.com/')
var bitgertweb3 = new Web3('https://mainnet-rpc.brisescan.com/')
var publicmintweb3 = new Web3('https://rpc.publicmint.io:8545/')
var dynochainweb3 = new Web3('https://rpc.dynochain.io')
var evmosweb3 = new Web3('https://json-rpc.evmos.blockhunters.org')
var xanaweb3 = new Web3('https://mainnet.xana.net/rpc')
var ETHWweb3 = new Web3('https://mainnet.ethereumpow.org')
var HPBweb3 = new Web3('https://hpbnode.com')
var ONUSweb3 = new Web3('https://rpc.onuschain.io')
var Goerliweb3 = new Web3('https://rpc.ankr.com/eth_goerli')
var BNBTestnetweb3 = new Web3('https://bsc-testnet.public.blastapi.io')
var FantomTestnetweb3 = new Web3('https://rpc.ankr.com/fantom_testnet')
var AvalancheFujiTestnetweb3 = new Web3('https://rpc.ankr.com/avalanche_fuji')
var OMAXweb3 = new Web3('https://mainapi.omaxray.com')
var OasisSapphireweb3 = new Web3('https://sapphire.oasis.io')
var Cantoweb3 = new Web3('https://canto.neobase.one')

const ChainIDTable = {
    1: ETHweb3,
    5: Goerliweb3,
    10: optimismweb3,
    24: kardiaweb3,
    25: cronosweb3,
    30: rskweb3,
    40: telosweb3,
    56: bscweb3,
    57: syscoinweb3,
    58: ontologyweb3,
    61: etcweb3,
    66: okxweb3,
    70: HSCweb3,
    86: gateweb3,
    88: tomoweb3,
    97: BNBTestnetweb3,
    100: gnosisweb3,
    106: velasweb3,
    108: thunderweb3,
    122: fuseweb3,
    128: huobiweb3,
    137: maticweb3,
    199: bttcweb3,
    250: ftmweb3,
    269: HPBweb3,
    288: bobaweb3,
    311:OMAXweb3,
    321: kccweb3,
    336: shidenweb3,
    592: astarweb3,
    1024: cloverweb3,
    1030: confluxweb3,
    1088: metisweb3,
    1111: wemix3web3,
    1234: stepweb3,
    1284: moonbeamweb3,
    1294: bobabeamweb3,
    1285: moonriverweb3,
    1818: cubeweb3,
    1975: ONUSweb3,
    2000: dogeweb3,
    2001: milkomedaweb3,
    2002: milkomedaA1web3,
    2020: dynochainweb3,
    2025: rangersweb3,
    2222: kavaweb3,
    4002: FantomTestnetweb3,
    4689: iotexweb3,
    7363: dynochainweb3,
    7700: Cantoweb3,
    8217: klaytnweb3,
    8888: xanaweb3,
    9001: evmosweb3,
    10000: smartBCHweb3,
    10001: ETHWweb3,
    23294: OasisSapphireweb3,
    24734: mintmeweb3,
    32520: bitgertweb3,
    32659: fusionweb3,
    42161: arbiweb3,
    42170: arbiNovaweb3,
    42220: celoweb3,
    42262: emeraldweb3,
    43113: AvalancheFujiTestnetweb3,
    43114: avaxweb3,
    47805: reiweb3,
    71402: godwokenweb3,
    256256: caduceusweb3,
    1313161554: auroraweb3,
    1666600000: harmonyweb3,
};

var ChainCurrencyTable = {
    1: 'ETH',
    5: 'ETH-testnet',
    10: 'ETH-OP',
    24: 'CAI',
    25: 'CRO',
    30: 'RBTC',
    40: 'TLOS',
    56: 'BNB',
    57: 'SYS',
    58: 'ONG',
    61: 'ETC',
    66: 'OKT',
    70: 'HOO',
    86: 'GT',
    88: 'TOMO',
    97: 'BNB-testnet',
    100: 'xDAI',
    106: 'VLX',
    108: 'TT',
    122: 'FUSE',
    128: 'HT',
    137: 'MATIC',
    199: 'BTT',
    250: 'FTM',
    269: 'HPB',
    288: 'ETH-boba',
    311: 'OMAX',
    321: 'KCS',
    336: 'SDN',
    592: 'ASTR',
    1024: 'CLV',
    1030: 'CFX',
    1818: 'CUBE',
    1088: 'METIS',
    1111: 'Wemix',
    1234: 'FITFI',
    1284: 'GLMR',
    1285: 'MOVR',
    1294: 'Boba',
    1975: 'ONUS',
    2000: 'DOGE',
    2001: 'mADA',
    2002: 'mALGO',
    2020: 'MINT',
    2025: 'RPG',
    2222: 'KAVA',
    4002: 'FTM-testnet',
    4689: 'IOTX',
    7363: 'DND',
    7700: 'Canto',
    8217: 'KLAY',
    8888: 'XANA',
    9001: 'EVMOS',
    10000: 'BCH',
    10001: 'ETHW',
    23294: 'ROSE',
    24734: 'MINTME',
    32520: 'BRISE',
    32659: 'FSN',
    42161: 'ETH-arbiOne',
    42170: 'ETH-arbiNova',
    42220: 'CELO',
    42262: 'ROSE',
    43113: 'AVAX-testnet',
    43114: 'AVAX',
    47805: 'REI',
    71402: 'pCKB',
    256256: 'CMP',
    1313161554: 'ETH-aurora',
    1666600000: 'ONE',
    XRP: 'XRP',
    NEAR: 'NEAR',
};


var table = document.getElementById("table");

console.log(table.rows.length);

for (let i = 1; i < table.rows.length; i++) {
    let address = table.rows[i].cells[1].innerHTML
    let chainid = table.rows[i].cells[2].innerHTML

    let wei
    let balance
    let threshold = table.rows[i].cells[3].innerHTML

    table.rows[i].cells[7].innerHTML = ChainCurrencyTable[chainid];
    if (Number(chainid) === 1313161554) {
        table.rows[i].cells[4].innerHTML = 'N/A'
        continue;
    }

    if (chainid === "XRP") {
        const XRP_SERVER = "wss://xrplcluster.com/"
        const client = new xrpl.Client(XRP_SERVER)
        client.connect().then(_ => {

            client.getXrpBalance(address).then(balance => {
                table.rows[i].cells[4].innerHTML = balance
            })

        })
        continue
    }
    //near
    // if (chainid === "NEAR") {
    //     // Import the near-api-js library
    //     const nearAPI = require("near-api-js");
    //     const { keyStores } = nearAPI;
    //     const homedir = require("os").homedir();
    //     const CREDENTIALS_DIR = ".near-credentials";
    //     const credentialsPath = require("path").join(homedir, CREDENTIALS_DIR);
    //     const myKeyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);

    //     const { connect } = nearAPI;

    //     const connectionConfig = {
    //         networkId: "mainnet",
    //         keyStore: myKeyStore, // first create a key store
    //         nodeUrl: "https://rpc.mainnet.near.org",
    //         walletUrl: "https://wallet.mainnet.near.org",
    //         helperUrl: "https://helper.mainnet.near.org",
    //         explorerUrl: "https://explorer.mainnet.near.org",
    //     };

    //     async function getAccountBalance() {
    //         const nearConnection = await connect(connectionConfig);

    //         const account = await nearConnection.account(address);

    //         // gets account balance
    //         const balance = await (await account.getAccountBalance()).total;
    //         const balanceInNear = parseInt(balance.slice(0, -24));
    //         table.rows[i].cells[4].innerHTML = balanceInNear;
    //     }

    //     getAccountBalance();
    //     continue;
    // }
    


    try {
        let web3 = ChainIDTable[chainid]

        web3.eth.getBalance(address, function (error, wei) {
            if (!error) {
                balance = web3.utils.fromWei(wei, 'ether');
                //var balance = wei;
                //table.rows[i].cells[4].innerHTML = balance.toFixed(2);
                table.rows[i].cells[4].innerHTML = Number(balance).toFixed(5);
                console.log(chainid);
                console.log(balance);
                console.log(threshold);
                if (Number(balance) < Number(threshold)) {
                    table.rows[i].cells[5].innerHTML = '**** Balance Below Threshold ****'
                }
            }
        });
    } catch (err) {
        table.rows[i].cells[4].innerHTML = err;
    }

}

        //ETHweb3 = new Web3("https://main-light.eth.linkpool.io");
        //ETHweb3.eth.getBalance(0xdB8cC5036954cdeB24ED922c772b86FB9c7Bd7c5);
