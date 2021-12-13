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
}
exports.EsploraClient = EsploraClient;
//# sourceMappingURL=EsploraClient.js.map