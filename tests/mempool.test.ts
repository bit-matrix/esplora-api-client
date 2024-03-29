import { esploraClient, init, Mempool } from "../src/index";
import { baseUrl } from "./const";

init(baseUrl);

test("Get Mempool", async () => {
  const mempool: Mempool = await esploraClient.mempool();

  expect(mempool.count).toBeGreaterThan(-1);
  expect(mempool.vsize).toBeGreaterThan(-1);
  expect(mempool.total_fee).toBeGreaterThan(-1);
  expect(mempool.fee_histogram.length).toBeGreaterThan(-1);
});
