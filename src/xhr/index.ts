import { EsploraClient } from "./EsploraClient";

let esploraClient: EsploraClient;

const init = (baseUrl: string): EsploraClient => {
  esploraClient = new EsploraClient(baseUrl);
  return esploraClient;
};

export { esploraClient, init };
