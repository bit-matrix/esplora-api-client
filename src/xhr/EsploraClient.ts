import axiosLib, { AxiosInstance } from "axios";
import { Block } from "..";

export class EsploraClient {
  private axios: AxiosInstance;

  constructor(esploraApiUrl: string) {
    this.axios = axiosLib.create();
    this.axios.defaults.baseURL = esploraApiUrl;
  }

  blocks = async (): Promise<Block[]> => this.axios.get("blocks").then<Block[]>((response) => response.data);

  block = async (blockHash: string): Promise<Block> => this.axios.get(`block/${blockHash}`).then<Block>((response) => response.data);
}
