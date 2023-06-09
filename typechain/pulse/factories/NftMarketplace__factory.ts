/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  NftMarketplace,
  NftMarketplaceInterface,
} from "../NftMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NftMarketPlace__AlreadyListed",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__CanNotBeOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__CancelOfferProceedsTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__CollectionOwnerProceedsTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__MarketplaceProceedsTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__NotApprovedForMarketPlace",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NftMarketPlace__NotListed",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__NotSignedByMarketplaceOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "offerPrice",
        type: "uint256",
      },
    ],
    name: "NftMarketPlace__OfferPriceNotMet",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__PriceMustBeAboveZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "NftMarketPlace__PriceNotMet",
    type: "error",
  },
  {
    inputs: [],
    name: "NftMarketPlace__SellerProceedsTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "offerAddress",
        type: "address",
      },
    ],
    name: "NftMarketplace__AlreadyOffered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "offerAddress",
        type: "address",
      },
    ],
    name: "NftMarketplace__NoOffered",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ItemBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ItemCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ItemListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ItemOfferAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "offerAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ItemOfferCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "offerAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ItemOffered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "marketplaceFee",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "collectionFee",
        type: "uint16",
      },
    ],
    name: "ProceedsTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collectionOwner",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "collectionFee",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "offerAddress",
        type: "address",
      },
    ],
    name: "acceptOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "collectionOwner",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "collectionFee",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "cancelListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "cancelOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getListing",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
        ],
        internalType: "struct NftMarketplace.Listing",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMarketplaceFee",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "offerAddress",
        type: "address",
      },
    ],
    name: "getOffer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "listItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "offerPrice",
        type: "uint256",
      },
    ],
    name: "offer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "offers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "newFee",
        type: "uint16",
      },
    ],
    name: "setMarketplaceFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "updateListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001805461ffff60a01b1916607d60a11b17905534801561002457600080fd5b50600160005561003333610038565b61008a565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b611c6e806100996000396000f3fe6080604052600436106100e85760003560e01c806388700d1c1161008a578063b2ddee0611610059578063b2ddee06146102ee578063d3f494cc1461030e578063f2fde38b1461034c578063f772adf11461036c57600080fd5b806388700d1c146101f957806389bfd38f146102865780638da5cb5b146102a65780639d38ff1f146102ce57600080fd5b806326a7b37b116100c657806326a7b37b14610190578063715018a6146101be57806374a46050146101d3578063796bd8cf146101e657600080fd5b80630168033a146100ed578063058a56ac1461014e5780630a45d4f414610170575b600080fd5b3480156100f957600080fd5b5061013b610108366004611942565b6001600160a01b039283166000908152600360209081526040808320948352938152838220929094168152925290205490565b6040519081526020015b60405180910390f35b34801561015a57600080fd5b5061016e610169366004611984565b61038c565b005b34801561017c57600080fd5b5061016e61018b3660046119c7565b61059b565b34801561019c57600080fd5b50600154600160a01b900461ffff1660405161ffff9091168152602001610145565b3480156101ca57600080fd5b5061016e6105c5565b61016e6101e13660046119e9565b6105d9565b61016e6101f4366004611a60565b6107aa565b34801561020557600080fd5b50610262610214366004611984565b604080518082018252600080825260209182018190526001600160a01b0394851681526002825282812093815292815291819020815180830190925280548252600101549092169082015290565b60408051825181526020928301516001600160a01b03169281019290925201610145565b34801561029257600080fd5b5061016e6102a13660046119e9565b6109ce565b3480156102b257600080fd5b506001546040516001600160a01b039091168152602001610145565b3480156102da57600080fd5b5061016e6102e9366004611ae3565b610c89565b3480156102fa57600080fd5b5061016e610309366004611984565b610ea2565b34801561031a57600080fd5b5061013b610329366004611942565b600360209081526000938452604080852082529284528284209052825290205481565b34801561035857600080fd5b5061016e610367366004611b7a565b61102b565b34801561037857600080fd5b5061016e6103873660046119e9565b6110a4565b61039461123a565b6040516331a9108f60e11b81526004810182905282908290339083906000906001600160a01b03831690636352211e90602401602060405180830381865afa1580156103e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104089190611b97565b9050806001600160a01b0316836001600160a01b0316141561043d57604051630af24daf60e41b815260040160405180910390fd5b6001600160a01b038716600090815260036020908152604080832089845282528083203384529091529020546104a357604051634aa7c3ad60e01b81526001600160a01b0388166004820152602481018790523360448201526064015b60405180910390fd5b6001600160a01b038716600090815260036020908152604080832089845282528083203380855292528083205490518381818185875af1925050503d806000811461050a576040519150601f19603f3d011682016040523d82523d6000602084013e61050f565b606091505b5050905080610531576040516314ca515560e11b815260040160405180910390fd5b6001600160a01b03881660008181526003602090815260408083208b84528252808320338085529252808320839055518a93927f74f47aee1c38f3959502001d4b09d457c2ef6fb8d33498e41e876b859c51c68591a45050505050506105976001600055565b5050565b6105a3611294565b6001805461ffff909216600160a01b0261ffff60a01b19909216919091179055565b6105cd611294565b6105d760006112ee565b565b6040516331a9108f60e11b81526004810183905283908390339083906000906001600160a01b03831690636352211e90602401602060405180830381865afa158015610629573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064d9190611b97565b9050806001600160a01b0316836001600160a01b0316141561068257604051630af24daf60e41b815260040160405180910390fd5b6001600160a01b03881660009081526003602090815260408083208a84528252808320338452909152902054156106e457604051637b35356960e01b81526001600160a01b03891660048201526024810188905233604482015260640161049a565b8534101561071e576040516313ec6f3f60e21b81526001600160a01b0389166004820152602481018890526044810187905260640161049a565b8561073c576040516301e6e2e760e01b815260040160405180910390fd5b6001600160a01b03881660008181526003602090815260408083208b8452825280832033808552908352928190208a9055518981528a9392917f4fa6eac84df74d1007c6a26cb8fdd8f939ab5056976a641bf2df01912a882f47910160405180910390a45050505050505050565b6107b261123a565b6001600160a01b0380831660009081526002602090815260408083208584528252918290208251808401909352805480845260019091015490931690820152839183919061082557604051630173285f60e51b81526001600160a01b03841660048201526024810183905260440161049a565b6001600160a01b0380861660009081526002602090815260408083208884528252918290208251808401909352805480845260019091015490931690820152903410156108a1578051604051632425ddb360e01b81526001600160a01b038816600482015260248101879052604481019190915260640161049a565b6001600160a01b0386811660008181526002602090815260408083208a84528252808320928355600190920180546001600160a01b03191690558401519051632142170760e11b81529216600483015233602483015260448201879052906342842e0e90606401600060405180830381600087803b15801561092257600080fd5b505af1158015610936573d6000803e3d6000fd5b505050506109508a8a8a8a85602001518660000151611340565b856001600160a01b031681602001516001600160a01b0316336001600160a01b03167fe9c622981335737fc4980ad7fa82f2007d350d10c84d88f14dc9d217be2702778885600001516040516109b0929190918252602082015260400190565b60405180910390a4505050506109c66001600055565b505050505050565b6001600160a01b0380841660009081526002602090815260408083208684528252918290208251808401909352805480845260019091015490931690820152849184919015610a425760405163fa1d424f60e01b81526001600160a01b03841660048201526024810183905260440161049a565b6040516331a9108f60e11b81526004810186905286908690339083906000906001600160a01b03831690636352211e90602401602060405180830381865afa158015610a92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab69190611b97565b9050806001600160a01b0316836001600160a01b031614610aea576040516349731c3b60e01b815260040160405180910390fd5b60008911610b0b576040516301e6e2e760e01b815260040160405180910390fd5b60405163020604bf60e21b8152600481018b90528b9030906001600160a01b0383169063081812fc90602401602060405180830381865afa158015610b54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b789190611b97565b6001600160a01b031614610b9f57604051634a7c3fb960e11b815260040160405180910390fd5b60405180604001604052808b8152602001336001600160a01b0316815250600260008e6001600160a01b03166001600160a01b0316815260200190815260200160002060008d81526020019081526020016000206000820151816000015560208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055509050508a8c6001600160a01b0316336001600160a01b03167fd547e933094f12a9159076970143ebe73234e64480317844b0dcb36117116de48d604051610c7391815260200190565b60405180910390a4505050505050505050505050565b610c9161123a565b6040516331a9108f60e11b81526004810185905285908590339083906000906001600160a01b03831690636352211e90602401602060405180830381865afa158015610ce1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d059190611b97565b9050806001600160a01b0316836001600160a01b031614610d39576040516349731c3b60e01b815260040160405180910390fd5b6001600160a01b03808b1660009081526003602090815260408083208d84528252808320938a1683529290522054610d9e57604051634aa7c3ad60e01b81526001600160a01b03808c166004830152602482018b90528716604482015260640161049a565b6001600160a01b038a811660008181526003602090815260408083208e84528252808320948b1680845294909152808220805492905551632142170760e11b81523360048201526024810193909352604483018c9052916342842e0e90606401600060405180830381600087803b158015610e1857600080fd5b505af1158015610e2c573d6000803e3d6000fd5b50505050610e3e8d8d8b8b3386611340565b604080518b8152602081018390526001600160a01b03808e16923392918b16917fe752335f35623c8e598d88c255681fbd747a7022db022654069d90c2c46edfec910160405180910390a4505050505050610e996001600055565b50505050505050565b6040516331a9108f60e11b81526004810182905282908290339083906000906001600160a01b03831690636352211e90602401602060405180830381865afa158015610ef2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f169190611b97565b9050806001600160a01b0316836001600160a01b031614610f4a576040516349731c3b60e01b815260040160405180910390fd5b6001600160a01b0380881660009081526002602090815260408083208a845282529182902082518084019093528054808452600190910154909316908201528891889190610fbd57604051630173285f60e51b81526001600160a01b03841660048201526024810183905260440161049a565b6001600160a01b038a1660008181526002602090815260408083208d845290915280822082815560010180546001600160a01b0319169055518b929133917f9ba1a3cb55ce8d63d072a886f94d2a744f50cddf82128e897d0661f5ec6231589190a450505050505050505050565b611033611294565b6001600160a01b0381166110985760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161049a565b6110a1816112ee565b50565b6110ac61123a565b6040516331a9108f60e11b81526004810183905283908390339083906000906001600160a01b03831690636352211e90602401602060405180830381865afa1580156110fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111209190611b97565b9050806001600160a01b0316836001600160a01b031614611154576040516349731c3b60e01b815260040160405180910390fd5b6001600160a01b0380891660009081526002602090815260408083208b8452825291829020825180840190935280548084526001909101549093169082015289918991906111c757604051630173285f60e51b81526001600160a01b03841660048201526024810183905260440161049a565b6001600160a01b038b1660008181526002602090815260408083208e84528252918290208c905590518b81528c929133917fd547e933094f12a9159076970143ebe73234e64480317844b0dcb36117116de4910160405180910390a450505050505050506112356001600055565b505050565b6002600054141561128d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161049a565b6002600055565b6001546001600160a01b031633146105d75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049a565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61134c868686866115a2565b61136957604051630573b5db60e11b815260040160405180910390fd5b6001546000906127109061138890600160a01b900461ffff1684611bca565b6113929190611be9565b905060006127106113a761ffff871685611bca565b6113b19190611be9565b90506000816113c08486611c0b565b6113ca9190611c0b565b905060006113e06001546001600160a01b031690565b6001600160a01b03168460405160006040518083038185875af1925050503d806000811461142a576040519150601f19603f3d011682016040523d82523d6000602084013e61142f565b606091505b50509050806114515760405163019c09f560e31b815260040160405180910390fd5b6000886001600160a01b03168460405160006040518083038185875af1925050503d806000811461149e576040519150601f19603f3d011682016040523d82523d6000602084013e6114a3565b606091505b50509050806114c5576040516372a2856b60e11b815260040160405180910390fd5b6000876001600160a01b03168460405160006040518083038185875af1925050503d8060008114611512576040519150601f19603f3d011682016040523d82523d6000602084013e611517565b606091505b505090508061153957604051632dd0202d60e21b815260040160405180910390fd5b6001546040805189815261ffff600160a01b90930483166020820152918b16908201526001600160a01b038916907fa9533a8cb48423f468d953b07ab68765b35fac55a0ca61a55ab5a3ba6e46acca9060600160405180910390a2505050505050505050505050565b60408051606084811b6bffffffffffffffffffffffff1990811660208085019190915260f086901b6001600160f01b03191660348501523390921b1660368301528251602a818403018152604a830184528051908201207f19457468657265756d205369676e6564204d6573736167653a0a333200000000606a84015260868084018290528451808503909101815260a690930190935281519101206000919060006116848289898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506116b192505050565b90506116986001546001600160a01b031690565b6001600160a01b03918216911614979650505050505050565b60008060006116c085856116d5565b915091506116cd8161171b565b509392505050565b60008082516041141561170c5760208301516040840151606085015160001a61170087828585611869565b94509450505050611714565b506000905060025b9250929050565b600081600481111561172f5761172f611c22565b14156117385750565b600181600481111561174c5761174c611c22565b141561179a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161049a565b60028160048111156117ae576117ae611c22565b14156117fc5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161049a565b600381600481111561181057611810611c22565b14156110a15760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161049a565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156118a05750600090506003611924565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156118f4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661191d57600060019250925050611924565b9150600090505b94509492505050565b6001600160a01b03811681146110a157600080fd5b60008060006060848603121561195757600080fd5b83356119628161192d565b92506020840135915060408401356119798161192d565b809150509250925092565b6000806040838503121561199757600080fd5b82356119a28161192d565b946020939093013593505050565b803561ffff811681146119c257600080fd5b919050565b6000602082840312156119d957600080fd5b6119e2826119b0565b9392505050565b6000806000606084860312156119fe57600080fd5b8335611a098161192d565b95602085013595506040909401359392505050565b60008083601f840112611a3057600080fd5b50813567ffffffffffffffff811115611a4857600080fd5b60208301915083602082850101111561171457600080fd5b60008060008060008060a08789031215611a7957600080fd5b863567ffffffffffffffff811115611a9057600080fd5b611a9c89828a01611a1e565b9097509550506020870135611ab08161192d565b9350611abe604088016119b0565b92506060870135611ace8161192d565b80925050608087013590509295509295509295565b600080600080600080600060c0888a031215611afe57600080fd5b873567ffffffffffffffff811115611b1557600080fd5b611b218a828b01611a1e565b9098509650506020880135611b358161192d565b9450604088013593506060880135611b4c8161192d565b9250611b5a608089016119b0565b915060a0880135611b6a8161192d565b8091505092959891949750929550565b600060208284031215611b8c57600080fd5b81356119e28161192d565b600060208284031215611ba957600080fd5b81516119e28161192d565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611be457611be4611bb4565b500290565b600082611c0657634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611c1d57611c1d611bb4565b500390565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220f3d1ade8d9f71f4fcefb2f78d9e13f2d57f33d5f9ea3fdd82404c843e411bb2f64736f6c634300080c0033";

type NftMarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NftMarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NftMarketplace__factory extends ContractFactory {
  constructor(...args: NftMarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NftMarketplace> {
    return super.deploy(overrides || {}) as Promise<NftMarketplace>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NftMarketplace {
    return super.attach(address) as NftMarketplace;
  }
  override connect(signer: Signer): NftMarketplace__factory {
    return super.connect(signer) as NftMarketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NftMarketplaceInterface {
    return new utils.Interface(_abi) as NftMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NftMarketplace {
    return new Contract(address, _abi, signerOrProvider) as NftMarketplace;
  }
}
