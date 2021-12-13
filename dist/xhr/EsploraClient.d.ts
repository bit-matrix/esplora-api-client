import { Block, TxDetail, Tx } from "..";
export declare class EsploraClient {
    private axios;
    constructor(esploraApiUrl: string);
    blocks: () => Promise<Block[]>;
    block: (blockHash: string) => Promise<Block>;
    txs: () => Promise<Tx[]>;
    tx: (txid: string) => Promise<TxDetail>;
}
