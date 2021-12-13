import { Block, BlockStatus, BlockTipHeight, esploraClient, init, TxDetail } from "../src/index";

init("https://blockstream.info/liquid/api/");

test("Get Latest Blocks", async () => {
  const blocks: Block[] = await esploraClient.blocks();

  expect(blocks.length).toEqual(10);
});

test("Get Block", async () => {
  const block: Block = await esploraClient.block("58856396da729ff684c761048f2935ae383a92bc586d884469fbbd31e6a79d47");

  expect(block.id).toEqual("58856396da729ff684c761048f2935ae383a92bc586d884469fbbd31e6a79d47");
  expect(block.height).toEqual(1614629);
  expect(block.merkle_root).toEqual("2f6a3e8b222bf562d95415bc9e9a2fe59dfb71898494d7077281c69c6a26e731");
  expect(block.previousblockhash).toEqual("8ed2dee315074a9a36d660c775173a9f991d2eb06a9c8b3c2347b55ad6a8c5de");
});

test("Get Block Status", async () => {
  const blockStatus: BlockStatus = await esploraClient.blockStatus("58856396da729ff684c761048f2935ae383a92bc586d884469fbbd31e6a79d47");

  expect(blockStatus.in_best_chain).toEqual(true);
  expect(blockStatus.height).toEqual(1614629);
  expect(blockStatus.next_best).toEqual("9b7c5eb732fd7e96ac6f41a84a083b52edbbbb19b44f31c419cbdedf79904aa7");
});

test("Get Block Transactions", async () => {
  const blockTxs: TxDetail[] = await esploraClient.blockTxs("58856396da729ff684c761048f2935ae383a92bc586d884469fbbd31e6a79d47");

  expect(blockTxs[0].txid).toEqual("2f6a3e8b222bf562d95415bc9e9a2fe59dfb71898494d7077281c69c6a26e731");
  expect(blockTxs[0].vin[0].txid).toEqual("0000000000000000000000000000000000000000000000000000000000000000");
  expect(blockTxs[0].vout[0].asset).toEqual("6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d");
});

test("Get Block Tip Height", async () => {
  const blockTipHeight: BlockTipHeight = await esploraClient.blockTipHeight();

  expect(blockTipHeight).toEqual(1614754);
});
