"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.esploraClient = void 0;
const EsploraClient_1 = require("./EsploraClient");
let esploraClient;
exports.esploraClient = esploraClient;
const init = (baseUrl) => {
    exports.esploraClient = esploraClient = new EsploraClient_1.EsploraClient(baseUrl);
    return esploraClient;
};
exports.init = init;
//# sourceMappingURL=index.js.map