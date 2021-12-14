import { Asset, esploraClient, init, TxDetail, NativeAssetStats, UserIssuedAssetStats } from "../src/index";
import { baseUrl } from "./const";

init(baseUrl);

test("Get Asset", async () => {
  const asset: Asset = await esploraClient.asset("144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49");

  const typeOfNativeAssetStats = (chain_stats: NativeAssetStats | UserIssuedAssetStats): chain_stats is NativeAssetStats => {
    return (chain_stats as NativeAssetStats).peg_in_amount !== undefined;
  };

  expect(asset.asset_id).toEqual("144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49");
  expect(asset.chain_stats.tx_count).toEqual(1);

  if (typeOfNativeAssetStats(asset.chain_stats)) {
    expect(asset.chain_stats.peg_in_amount).toEqual(352979554226);
  }
});

test("Get Asset Transactions", async () => {
  const assetTxs: TxDetail[] = await esploraClient.assetTx("144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49");

  expect(assetTxs[0].txid).toEqual("5dd70e2f7c0f06c514fa5daf9a19d1b2961ae91132d8d2a88dea38f102ffe049");
  expect(assetTxs[0].vin[0].txid).toEqual("0c52d2526a5c9f00e9fb74afd15dd3caaf17c823159a514f929ae25193a43a52");
  expect(assetTxs[0].vout[0].asset).toEqual("144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49");
});
