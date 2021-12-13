import { esploraClient, init, Mempool } from "../src/index";

init("https://blockstream.info/liquid/api/");

test("Get Mempool", async () => {
  const mempool: Mempool = await esploraClient.mempool();

  expect(mempool.count).toEqual(1);
  expect(mempool.vsize).toEqual(2515);
  expect(mempool.total_fee).toEqual(629);
});
