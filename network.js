export default {
  id: 'akashnet-2', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Akash Network',
  description:
    'Akash is a decentralized cloud computing marketplace that enables users to rent and provision infrastructure using blockchain technology.',
  logo: `logo.svg`,
  website: 'https://akash.network',
  apiURL: 'https://akash-rest.publicnode.com/cosmos/base/tendermint/v1beta1/', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'https://akash-rpc.publicnode.com:443',
  stakingDenom: 'AKT',
  coinLookup: [
    {
      viewDenom: 'AKT',
      chainDenom: 'uakt',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/akt.png`,
    },
  ],
  addressPrefix: 'akash',
  validatorAddressPrefix: 'akashvaloper',
  validatorConsensusaddressPrefix: 'akashvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 200000,
      feeOptions: [
        {
          denom: 'AKT',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,
  localSigning: false,
}
