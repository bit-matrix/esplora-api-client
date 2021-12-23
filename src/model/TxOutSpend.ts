import { Status } from "./Status";

export type TxOutSpend = {
  spent: boolean;
  status?: Status;
  txid?: string;
  vin?: number;
};
