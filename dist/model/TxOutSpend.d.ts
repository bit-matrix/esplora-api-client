import { Status } from "./Status";
export declare type TxOutSpend = {
    spent: boolean;
    status?: Status;
    txid?: string;
    vin?: number;
};
