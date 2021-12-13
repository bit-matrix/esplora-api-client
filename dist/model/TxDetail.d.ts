import { Status } from "./Status";
import { VIn } from "./VIn";
import { VOut } from "./VOut";
export declare type TxDetail = {
    txid: string;
    version: number;
    locktime: number;
    size: number;
    weight: number;
    fee: number;
    vin: VIn[];
    vout: VOut[];
    status: Status;
};
