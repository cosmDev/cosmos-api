module.exports = [
  {
    chainId: "cosmoshub-4",
    name: "Atom",
    desc: "Cosmos is an ever-expanding ecosystem of interoperable and sovereign blockchain apps and services, built for a decentralized future.",
    slot: "atom",
    mode: "mainnet",
    apiURL: "https://rest-cosmoshub.ecostake.com",
    rpcURL: "https://rpc-cosmoshub.ecostake.com",
    coinLookup: {
      viewDenom: "ATOM",
      chainDenom: "uatom",
      addressPrefix: "cosmos",
      exponent: 6,
      icon: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
      banner:
        "https://pbs.twimg.com/profile_banners/1019126440233615361/1684483223/1500x500",
    },
    feeMultiplier: 1.3,
    gasPrice: 0.025,
    explorerUrl: "https://www.mintscan.io/cosmos/txs/",
    coingeckoId: "cosmos",
    color: "#87bcea",
    colorChart: ["#d0e4f7", "#73b1e7", "#0a77d5", "#87bcea"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: true,
      group: false,
      mint: true,
    },
  },
  {
    chainId: "akashnet-2",
    name: "Akash",
    desc: "Akash is an open Supercloud network that makes it easy to rapidly scale and access services around the world.",
    slot: "akash",
    mode: "mainnet",
    apiURL: "https://rest-akash.ecostake.com",
    rpcURL: "https://rpc-akash.ecostake.com:443",
    coinLookup: {
      viewDenom: "AKT",
      chainDenom: "uakt",
      addressPrefix: "akash",
      exponent: 6,
      icon: "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg",
      banner:
        "https://raw.githubusercontent.com/BitCannaGlobal/cosmospay-woocommerce/main/public/img/Akash.png",
    },
    feeMultiplier: 1.3,
    gasPrice: 0.025,
    explorerUrl: "https://www.mintscan.io/cosmos/txs/",
    coingeckoId: "akash-network",
    color: "#F34C2D",
    colorChart: ["#b25747", "#F34C2D", "#ad594a", "#89584f"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: true,
    },
  },
  {
    chainId: "gitopia",
    name: "Gitopia",
    desc: "Gitopia is the next-generation Code Collaboration Platform fuelled by a decentralized network and interactive token economy.",
    slot: "gitopia",
    mode: "mainnet",
    apiURL: "https://gitopia-api.polkachu.com:443",
    rpcURL: "https://gitopia-rpc.polkachu.com:443",
    coinLookup: {
      viewDenom: "LORE",
      chainDenom: "ulore",
      addressPrefix: "gitopia",
      exponent: 6,
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png`,
      banner: "https://i.imgur.com/RONXDnZ.png",
    },
    feeMultiplier: 1.3,
    gasPrice: 0.0016,
    color: "#562085",
    colorChart: ["#a66fd6", "#562085", "#390666", "#1c0533"],
    explorerUrl: "https://bigdipper.live/gitopia",
    coingeckoId: "gitopia",
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: true,
      mint: true,
    },
  },
  {
    chainId: "injective-1",
    name: "Injective",
    desc: "Osmosis is the premier DEX and cross-chain DeFi hub in the Cosmos ecosystem.",
    slot: "injective",
    mode: "mainnet",
    apiURL: "https://injective-api.polkachu.com",
    rpcURL: "https://injective-rpc.polkachu.com",
    coinLookup: {
      viewDenom: "INJ",
      chainDenom: "inj",
      addressPrefix: "inj",
      exponent: 18,
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg`, 
    },
    feeMultiplier: 1.6,
    gasPrice: 0.025,
    coingeckoId: "injective-protocol",
    color: "#2EC4F9",
    colorChart: ["#397AFE", "#2EC4F9", "#56D7E9", "#A0FBCC"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: true,
    },
  },
  {
    chainId: "chihuahua-1",
    name: "Chihuahua",
    slot: "chihuahua",
    desc: "Chihuahua is the first interoperable meme coin with a POS blockchain, making it one of the most utilized chains in the Cosmos ecosystem",
    mode: "mainnet",
    apiURL: "https://api.chihuahua.wtf",
    rpcURL: "https://rpc.chihuahua.wtf",
    //apiURL: 'https://rest.cosmos.directory/chihuahua',
    //rpcURL: 'https://rpc.cosmos.directory/chihuahua',
    coinLookup: {
      viewDenom: "HUAHUA",
      chainDenom: "uhuahua",
      addressPrefix: "chihuahua",
      exponent: 6,
      icon: `https://avatars.githubusercontent.com/u/94940349?v=4`,
      banner:
        "https://raw.githubusercontent.com/BitCannaGlobal/cosmospay-woocommerce/main/public/img/Chihuahua.png",
    },
    coingeckoId: "chihuahua-token",
    feeMultiplier: 1.3,
    gasPrice: 1000,
    color: "#F0A841",
    colorChart: ["#efc283", "#F0A841", "#c67f21", "#995803"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: true,
      group: true,
      mint: true,
    },
  },
    {
    chainId: "neutron-1",
    name: "Neutron",
    desc: "Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub's security to provide cross-chain DeFi applications.",
    slot: "neutron",
    mode: "mainnet",
    apiURL: "https://rest-lb.neutron.org",
    rpcURL: "https://rpc-lb.neutron.org",
    coinLookup: {
      viewDenom: "NTRN",
      chainDenom: "untrn",
      addressPrefix: "neutron",
      exponent: 6,
      icon: `https://i.imgur.com/AJutIAb.png`, 
    },
    feeMultiplier: 1.3,
    gasPrice: 1.1,
    coingeckoId: "neutron-3",
    color: "#C4C2C2",
    colorChart: ["#000000", "#333232", "#5e5e5e", "#c4c2c2"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: false,
    },
  },
  {
    chainId: "stargaze-1",
    name: "Stargaze",
    desc: "A Cosmos based project delivering fun art, passive rewards, and redeemable backed value to holders.",
    slot: "stargaze",
    mode: "mainnet",
    apiURL: "https://rest.stargaze-apis.com",
    rpcURL: "https://rpc.stargaze-apis.com",
    coinLookup: {
      viewDenom: "STARS",
      chainDenom: "ustars",
      addressPrefix: "stars",
      exponent: 6,
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg`,
      banner:
        "https://raw.githubusercontent.com/BitCannaGlobal/cosmospay-woocommerce/main/public/img/Stargaze.png",
    },
    feeMultiplier: 1.3,
    gasPrice: 1.1,
    coingeckoId: "stargaze",
    color: "#DB2777",
    colorChart: ["#f2bad1", "#DB2777", "#aa1455", "#7c0639"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: false,
    },
  }, 
  {
    chainId: "jackal-1",
    name: "Jackal",
    desc: "Jackal Network is a decentralized storage platform that aims to provide secure, private, and efficient data storage solutions on the blockchain.",
    slot: "jackal",
    mode: "mainnet",
    apiURL: "https://api.jackalprotocol.com",
    rpcURL: "https://rpc.jackalprotocol.com",
    coinLookup: {
      viewDenom: "JKL",
      chainDenom: "ujkl",
      addressPrefix: "jkl",
      exponent: 6,
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg` 
    },
    coingeckoId: "jackal-protocol",
    feeMultiplier: 1.3,
    gasPrice: 0.25,
    color: "#2EC4F9",
    colorChart: ["#397AFE", "#2EC4F9", "#56D7E9", "#A0FBCC"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: false,
    },
  }, 
  {
    chainId: "teritori-1",
    name: "Teritori",
    desc: "Tori token (TORI) is the Teritoti Network’s native utility token, used as the primary means to govern, secure the blockchain.",
    slot: "teritori",
    mode: "mainnet",
    apiURL: "https://teritori-api.polkachu.com",
    rpcURL: "https://teritori-rpc.polkachu.com",
    coinLookup: {
      viewDenom: "TORI",
      chainDenom: "utori",
      addressPrefix: "tori",
      exponent: 6,
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png`,
      banner: "https://i.imgur.com/qWOgkAo.png",
    },
    coingeckoId: "teritori",
    feeMultiplier: 1.3,
    gasPrice: 0.25,
    color: "#2EC4F9",
    colorChart: ["#397AFE", "#2EC4F9", "#56D7E9", "#A0FBCC"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: false,
    },
  }, 
  {
    chainId: "osmosis",
    name: "osmosis",
    slot: "osmosis",
    desc: "Osmosis is the premier DEX and cross-chain DeFi hub in the Cosmos ecosystem.",
    mode: "mainnet",
    apiURL: "https://lcd.osmosis.zone",
    rpcURL: "https://rpc.osmosis.zone", 
    coinLookup: {
      viewDenom: "OSMO",
      chainDenom: "uosmo",
      addressPrefix: "osmo",
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg`,
      exponent: 6,
    },
    explorerUrl: "https://www.mintscan.io/osmosis/txs/",
    coingeckoId: "osmosis",
    feeMultiplier: 1.6,
    gasPrice: 5000,
    color: "#D8D8D8",
    colorChart: ["#397AFE", "#2EC4F9", "#56D7E9", "#A0FBCC"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: false,
    }
  },
    {
    chainId: "arkh",
    name: "Arkhadian",
    slot: "arkh",
    desc: "arkh",
    mode: "mainnet",
    apiURL: "https://arkh.api.m.anode.team",
    rpcURL: "https://arkh.rpc.m.anode.team", 
    coinLookup: {
      viewDenom: "ARKH",
      chainDenom: "arkh",
      addressPrefix: "arkh",
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg`,
      exponent: 6,
    },
    explorerUrl: "https://www.mintscan.io/osmosis/txs/",
    coingeckoId: "osmosis",
    feeMultiplier: 1.6,
    gasPrice: 5000,
    color: "#D8D8D8",
    colorChart: ["#397AFE", "#2EC4F9", "#56D7E9", "#A0FBCC"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: true,
    }
  },
  {
    chainId: "osmo-test-5",
    name: "osmo-test-5",
    slot: "osmo-test-5",
    desc: "Osmosis is the premier DEX and cross-chain DeFi hub in the Cosmos ecosystem.",
    mode: "testnet",
    apiURL: "https://lcd.osmotest5.osmosis.zone",
    rpcURL: "https://osmosis-testnet-rpc.polkachu.com/",
    wsURL: "wss://rpc.osmotest5.osmosis.zone/websocket",
    coinLookup: {
      viewDenom: "OSMO",
      chainDenom: "uosmo",
      addressPrefix: "osmo",
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg`,
      exponent: 6,
    },
    explorerUrl: "https://www.mintscan.io/osmosis/txs/",
    coingeckoId: "osmosis",
    feeMultiplier: 1.6,
    gasPrice: 5000,
    color: "#D8D8D8",
    colorChart: ["#397AFE", "#2EC4F9", "#56D7E9", "#A0FBCC"],
    modules: {
      feeGrant: true,
      authz: true,
      wasm: false,
      group: false,
      mint: true,
    }
  }
];
