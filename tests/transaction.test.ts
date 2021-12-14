import { esploraClient, init, Tx, TxDetail, TxOutSpend } from "../src/index";
import { baseUrl } from "./const";

init(baseUrl);

test("Get Latest Transactions", async () => {
  const txs: Tx[] = await esploraClient.txs();

  expect(txs.length).toEqual(10);
});

test("Get Transaction", async () => {
  const tx: TxDetail = await esploraClient.tx("f955851e1af3e97a5a2314417fd75c858a45d95941462b7b8e90a1095d28ed60");

  expect(tx.txid).toEqual("f955851e1af3e97a5a2314417fd75c858a45d95941462b7b8e90a1095d28ed60");
  expect(tx.size).toEqual(4649);
  expect(tx.weight).toEqual(5519);
  expect(tx.vin[0].witness[1]).toEqual("026d2c456592b4ee3167b2e4bdc9cd943caedc466bc1d1e5e538dbecea03d20c64");
  expect(tx.vout[1].scriptpubkey).toEqual("0014888fa152d7e815954b0cfc04df16e1e258ef47a7");
});

test("Get Transaction Outspends", async () => {
  const txOutSpends: TxOutSpend[] = await esploraClient.txOutspends("f955851e1af3e97a5a2314417fd75c858a45d95941462b7b8e90a1095d28ed60");

  // for now
  expect(txOutSpends[0].spent).toEqual(false);
});
