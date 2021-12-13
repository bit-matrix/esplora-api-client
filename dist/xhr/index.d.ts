import { EsploraClient } from "./EsploraClient";
declare let esploraClient: EsploraClient;
declare const init: (baseUrl: string) => EsploraClient;
export { esploraClient, init };
