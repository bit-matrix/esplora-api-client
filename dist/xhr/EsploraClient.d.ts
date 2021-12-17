import { Block, TxDetail, Tx, BlockStatus, BlockTipHeight, TxOutSpend, Mempool, Asset } from "..";
export declare class EsploraClient {
    private axios;
    constructor(esploraApiUrl: string);
    blocks: () => Promise<Block[]>;
    blockheight: (blockHeight: number) => Promise<string>;
    block: (blockHash: string) => Promise<Block>;
    blockStatus: (blockHash: string) => Promise<BlockStatus>;
    blockTxs: (blockHash: string) => Promise<TxDetail[]>;
    blockTipHeight: () => Promise<BlockTipHeight>;
    txs: () => Promise<Tx[]>;
    tx: (txid: string) => Promise<TxDetail>;
    txOutspends: (txid: string) => Promise<TxOutSpend[]>;
    asset: (assetId: string) => Promise<Asset>;
    assetTx: (assetId: string) => Promise<TxDetail[]>;
    mempool: () => Promise<Mempool>;
    feeEstimates: () => Promise<any>;
}
