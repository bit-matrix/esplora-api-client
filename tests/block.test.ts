import { Block, BlockStatus, BlockTipHeight, esploraClient, init, TxDetail } from "../src/index";
import { baseUrl } from "./const";

init(baseUrl);

test("Get Latest Blocks", async () => {
  const blocks: Block[] = await esploraClient.blocks();

  expect(blocks.length).toEqual(10);
});

test("Get Latest Blocks 2", async () => {
  const blocks: Block[] = await esploraClient.blocks(100);

  expect(blocks.length).toEqual(10);
  expect(blocks[0].height).toEqual(100);
  expect(blocks[9].height).toEqual(91);
});

test("Get Block", async () => {
  const block: Block = await esploraClient.block("7fd267d9c9615ab0968fb2c958ddcf980e68d82382116f6b22e9f318f9e86d7d");

  expect(block.id).toEqual("7fd267d9c9615ab0968fb2c958ddcf980e68d82382116f6b22e9f318f9e86d7d");
  expect(block.height).toEqual(125502);
  expect(block.merkle_root).toEqual("f6c8d14e8273308c7ff4acf4a46c21a2c3c752510d40c802f64478bade119b2d");
  expect(block.previousblockhash).toEqual("cfcaa75d3d656c7b55bae73913dcb68cb53961a0785a4dd4c964e5aaf460d9e8");
});

test("Get Block Status", async () => {
  const blockStatus: BlockStatus = await esploraClient.blockStatus("7fd267d9c9615ab0968fb2c958ddcf980e68d82382116f6b22e9f318f9e86d7d");

  expect(blockStatus.in_best_chain).toEqual(true);
  expect(blockStatus.height).toEqual(125502);
  expect(blockStatus.next_best).toEqual("7f3400fa4f49d501c870129d1bb7f674b0ad7ec8d0c3e406ea4ed787072fea80");
});

test("Get Block Transactions", async () => {
  const blockTxs: TxDetail[] = await esploraClient.blockTxs("7fd267d9c9615ab0968fb2c958ddcf980e68d82382116f6b22e9f318f9e86d7d");

  expect(blockTxs[0].txid).toEqual("0e286ea93288c3d8b8b36ff2c89d33c51b76f1151f05fcd19fc1cb1331fcf9a3");
  expect(blockTxs[0].vin[0].txid).toEqual("0000000000000000000000000000000000000000000000000000000000000000");
  expect(blockTxs[0].vout[0].asset).toEqual("144c654344aa716d6f3abcc1ca90e5641e4e2a7f633bc09fe3baf64585819a49");
});

test("Get Block Tip Height", async () => {
  const blockTipHeight: BlockTipHeight = await esploraClient.blockTipHeight();

  expect(blockTipHeight).toBeGreaterThan(125903);
});
