export type Block = {
  height: number;
  id: string;
  mediantime: number;
  merkle_root: string;
  previousblockhash: string | null;
  size: number;
  timestamp: number;
  tx_count: number;
  version: number;
  weight: number;
  ext: any;
};
