"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsploraClient = void 0;
const axios_1 = __importDefault(require("axios"));
class EsploraClient {
    constructor(esploraApiUrl) {
        this.blocks = () => __awaiter(this, void 0, void 0, function* () { return this.axios.get("blocks").then((response) => response.data); });
        this.blockheight = (blockHeight) => __awaiter(this, void 0, void 0, function* () { return this.axios.get(`block-height/${blockHeight}`).then((response) => response.data); });
        this.block = (blockHash) => __awaiter(this, void 0, void 0, function* () { return this.axios.get(`block/${blockHash}`).then((response) => response.data); });
        this.blockStatus = (blockHash) => __awaiter(this, void 0, void 0, function* () { return this.axios.get(`block/${blockHash}/status`).then((response) => response.data); });
        this.blockTxs = (blockHash) => __awaiter(this, void 0, void 0, function* () { return this.axios.get(`block/${blockHash}/txs/0`).then((response) => response.data); });
        this.blockTipHeight = () => __awaiter(this, void 0, void 0, function* () { return this.axios.get("blocks/tip/height").then((response) => response.data); });
        this.txs = () => __awaiter(this, void 0, void 0, function* () { return this.axios.get("mempool/recent").then((response) => response.data); });
        this.tx = (txid) => __awaiter(this, void 0, void 0, function* () { return this.axios.get(`tx/${txid}`).then((response) => response.data); });
        this.txOutspends = (txid) => __awaiter(this, void 0, void 0, function* () { return this.axios.get(`tx/${txid}/outspends`).then((response) => response.data); });
        this.asset = (assetId) => __awaiter(this, void 0, void 0, function* () { return this.axios.get(`asset/${assetId}`).then((response) => response.data); });
        this.assetTx = (assetId) => __awaiter(this, void 0, void 0, function* () { return this.axios.get(`asset/${assetId}/txs`).then((response) => response.data); });
        this.mempool = () => __awaiter(this, void 0, void 0, function* () { return this.axios.get("mempool").then((response) => response.data); });
        this.feeEstimates = () => __awaiter(this, void 0, void 0, function* () { return this.axios.get("fee-estimates").then((response) => response.data); });
        this.axios = axios_1.default.create();
        this.axios.defaults.baseURL = esploraApiUrl;
    }
}
exports.EsploraClient = EsploraClient;
//# sourceMappingURL=EsploraClient.js.map