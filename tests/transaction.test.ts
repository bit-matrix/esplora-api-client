import { esploraClient, init, Tx, TxDetail, TxOutSpend } from "../src/index";

init("https://blockstream.info/liquid/api/");

test("Get Latest Transactions", async () => {
  const txs: Tx[] = await esploraClient.txs();

  expect(txs.length).toEqual(10);
});

test("Get Transaction", async () => {
  const tx: TxDetail = await esploraClient.tx("2f6a3e8b222bf562d95415bc9e9a2fe59dfb71898494d7077281c69c6a26e731");

  expect(tx.txid).toEqual("2f6a3e8b222bf562d95415bc9e9a2fe59dfb71898494d7077281c69c6a26e731");
  expect(tx.size).toEqual(310);
  expect(tx.weight).toEqual(1111);
  expect(tx.vin[0].scriptsig).toEqual("0325a3180101");
  expect(tx.vout[0].asset).toEqual("6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d");
});

test("Get Transaction Outspends", async () => {
  const txOutSpends: TxOutSpend[] = await esploraClient.txOutspends("2f6a3e8b222bf562d95415bc9e9a2fe59dfb71898494d7077281c69c6a26e731");

  expect(txOutSpends[0].spent).toEqual(false);
});
