import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "carNFT",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            marketplace:
                "andr14ptyzmf3a5hj30ka38wk5w6nlmkcpfrwqsv9fl68jerd0r2l5zwq9sgmyw",
            cw721: "andr1cc56h46s0uchzs8f7hnahueq46qmp8dslymhlcu7v8jnkrg090esfe2jh2",
            name: "CarCollection",
            type: ICollectionType.MARKETPLACE,
            id: "marketplace",
        },
    ],
};

export default CONFIG;
