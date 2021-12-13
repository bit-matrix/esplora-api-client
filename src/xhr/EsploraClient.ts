import axiosLib, { AxiosInstance } from "axios";
import { Block, TxDetail, Tx } from "..";

export class EsploraClient {
  private axios: AxiosInstance;

  constructor(esploraApiUrl: string) {
    this.axios = axiosLib.create();
    this.axios.defaults.baseURL = esploraApiUrl;
  }

  blocks = async (): Promise<Block[]> => this.axios.get("blocks").then<Block[]>((response) => response.data);

  block = async (blockHash: string): Promise<Block> => this.axios.get(`block/${blockHash}`).then<Block>((response) => response.data);

  txs = async (): Promise<Tx[]> => this.axios.get("mempool/recent").then<Tx[]>((response) => response.data);

  tx = async (txid: string): Promise<TxDetail> => this.axios.get(`tx/${txid}`).then<TxDetail>((response) => response.data);
}
