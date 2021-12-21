import axiosLib, { AxiosInstance } from "axios";
import { Block, TxDetail, Tx, BlockStatus, BlockTipHeight, TxOutSpend, Mempool, Asset } from "..";

export class EsploraClient {
  private axios: AxiosInstance;

  constructor(esploraApiUrl: string) {
    this.axios = axiosLib.create();
    this.axios.defaults.baseURL = esploraApiUrl;
  }

  blocks = async (startHeight?: number): Promise<Block[]> => this.axios.get<Block[]>("blocks/" + (startHeight || "")).then<Block[]>((response) => response.data);

  blockheight = async (blockHeight: number): Promise<string> => this.axios.get<string>(`block-height/${blockHeight}`).then<string>((response) => response.data);

  block = async (blockHash: string): Promise<Block> => this.axios.get<Block>(`block/${blockHash}`).then<Block>((response) => response.data);

  blockStatus = async (blockHash: string): Promise<BlockStatus> => this.axios.get<BlockStatus>(`block/${blockHash}/status`).then<BlockStatus>((response) => response.data);

  blockTxs = async (blockHash: string): Promise<TxDetail[]> => this.axios.get<TxDetail[]>(`block/${blockHash}/txs/0`).then<TxDetail[]>((response) => response.data);

  blockTipHeight = async (): Promise<BlockTipHeight> => this.axios.get<BlockTipHeight>("blocks/tip/height").then<BlockTipHeight>((response) => response.data);

  txs = async (): Promise<Tx[]> => this.axios.get<Tx[]>("mempool/recent").then<Tx[]>((response) => response.data);

  tx = async (txid: string): Promise<TxDetail> => this.axios.get<TxDetail>(`tx/${txid}`).then<TxDetail>((response) => response.data);

  txOutspends = async (txid: string): Promise<TxOutSpend[]> => this.axios.get<TxOutSpend[]>(`tx/${txid}/outspends`).then<TxOutSpend[]>((response) => response.data);

  asset = async (assetId: string): Promise<Asset> => this.axios.get<Asset>(`asset/${assetId}`).then<Asset>((response) => response.data);

  assetTx = async (assetId: string): Promise<TxDetail[]> => this.axios.get<TxDetail[]>(`asset/${assetId}/txs`).then<TxDetail[]>((response) => response.data);

  mempool = async (): Promise<Mempool> => this.axios.get<Mempool>("mempool").then<Mempool>((response) => response.data);

  feeEstimates = async (): Promise<any> => this.axios.get<any>("fee-estimates").then<any>((response) => response.data);
}
