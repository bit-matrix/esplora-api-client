export type Block = {
  id: string;
  height: number;
  version: number;
  timestamp: number;
  tx_count: number;
  size: number;
  weight: number;
  merkle_root: string;
  previousblockhash: string;
  mediantime: number;
  ext: {
    current: {
      elided_root: string;
      signblock_witness_limit: number;
      signblockscript: string;
    };
    proposed: any;
    signblock_witness: number[];
  };
};
