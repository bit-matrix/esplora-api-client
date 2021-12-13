import { VIn } from "./VIn";
import { VOut } from "./VOut";

export type TxDetail = {
  txid: string;
  version: number;
  locktime: number;
  size: number;
  weight: number;
  fee: number;
  vin: VIn[];
  vout: VOut[];
  status: {
    confirmed: boolean;
    block_height: number;
    block_hash: string;
    block_time: number;
  };
};
