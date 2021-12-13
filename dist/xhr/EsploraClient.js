"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsploraClient = void 0;
const axios_1 = __importDefault(require("axios"));
class EsploraClient {
    axios;
    constructor(esploraApiUrl) {
        this.axios = axios_1.default.create();
        this.axios.defaults.baseURL = esploraApiUrl;
    }
    blocks = async () => this.axios.get("blocks").then((response) => response.data);
    block = async (blockHash) => this.axios.get(`block/${blockHash}`).then((response) => response.data);
    blockStatus = async (blockHash) => this.axios.get(`block/${blockHash}/status`).then((response) => response.data);
    blockTxs = async (blockHash) => this.axios.get(`block/${blockHash}/txs/0`).then((response) => response.data);
    blockTipHeight = async () => this.axios.get("blocks/tip/height").then((response) => response.data);
    txs = async () => this.axios.get("mempool/recent").then((response) => response.data);
    tx = async (txid) => this.axios.get(`tx/${txid}`).then((response) => response.data);
    txOutspends = async (txid) => this.axios.get(`tx/${txid}/outspends`).then((response) => response.data);
    asset = async (assetId) => this.axios.get(`asset/${assetId}`).then((response) => response.data);
    assetTx = async (assetId) => this.axios.get(`asset/${assetId}/txs`).then((response) => response.data);
    mempool = async () => this.axios.get("mempool").then((response) => response.data);
    feeEstimates = async () => this.axios.get("fee-estimates").then((response) => response.data);
}
exports.EsploraClient = EsploraClient;
//# sourceMappingURL=EsploraClient.js.map