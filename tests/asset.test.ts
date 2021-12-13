import { Asset, esploraClient, init, TxDetail, NativeAssetStats, UserIssuedAssetStats } from "../src/index";

init("https://blockstream.info/liquid/api/");

test("Get Asset", async () => {
  const asset: Asset = await esploraClient.asset("6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d");

  const typeOfNativeAssetStats = (chain_stats: NativeAssetStats | UserIssuedAssetStats): chain_stats is NativeAssetStats => {
    return (chain_stats as NativeAssetStats).peg_in_amount !== undefined;
  };

  expect(asset.asset_id).toEqual("6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d");
  expect(asset.chain_stats.tx_count).toEqual(4999);

  if (typeOfNativeAssetStats(asset.chain_stats)) {
    expect(asset.chain_stats.peg_in_amount).toEqual(352979554226);
  }
});

test("Get Asset Transactions", async () => {
  const assetTxs: TxDetail[] = await esploraClient.assetTx("6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d");

  expect(assetTxs[0].txid).toEqual("ce815d7d3cfa88cc58457a9cfb9387fad696cb21c64a1a7621eae4b74ea856b9");
  expect(assetTxs[0].vin[0].txid).toEqual("f5abd8a384a2799a9f1fc2f2e72b8eb9961d74bdd1528b86c7ed094279ffa3d7");
  expect(assetTxs[0].vout[0].asset).toEqual("6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d");
});
