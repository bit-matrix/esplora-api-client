import { Block, esploraClient, init } from "../src/index";

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
