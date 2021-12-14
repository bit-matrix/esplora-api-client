import { Status } from "./Status";
export declare type NativeAssetStats = {
    tx_count: number;
    peg_in_count: number;
    peg_in_amount: number;
    peg_out_amount: number;
    peg_out_count: number;
    burn_count: number;
    burned_amount: number;
};
export declare type UserIssuedAssetStats = {
    tx_count: number;
    issuance_count: number;
    issued_amount: number;
    burned_amount: number;
    has_blinded_issuances: boolean;
    reissuance_tokens: number | null;
    burned_reissuance_tokens: number;
};
export declare type NativeAsset = {
    asset_id: string;
    chain_stats: NativeAssetStats;
    mempool_stats: NativeAssetStats;
};
export declare type UserIssuedAsset = {
    asset_id: string;
    chain_stats: UserIssuedAssetStats;
    mempool_stats: UserIssuedAssetStats;
    issuance_txin: {
        txid: string;
        vin: number;
    };
    issuance_prevout: {
        txid: string;
        vin: number;
    };
    status: Status;
    contract_hash?: string;
    reissuance_token: string;
    contract: string;
    entity: {
        domain: string;
    };
    ticker?: string;
    precision?: number;
    name: string;
};
export declare type Asset = NativeAsset | UserIssuedAsset;
