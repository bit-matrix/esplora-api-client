import { Block } from "..";
export declare class EsploraClient {
    private axios;
    constructor(esploraApiUrl: string);
    blocks: () => Promise<Block[]>;
    block: (blockHash: string) => Promise<Block>;
}
