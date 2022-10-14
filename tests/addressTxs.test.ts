import { esploraClient, init } from "../src/index";
import { baseUrl } from "./const";

init(baseUrl);

test("Get Address Transactions", async () => {
  const addressTxs = await esploraClient.addressTxs("tb1qqy3k9ynmt0emvrjg3smhsku86hgflu3sk422y86qz5luvdfnkw2qzq6sgr");

  console.log(addressTxs);
});
