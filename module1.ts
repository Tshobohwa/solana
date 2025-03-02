import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
async function getBalanceUsingWeb3Js(address: PublicKey) {
  const connection = new Connection(clusterApiUrl("devnet"));
  return connection.getBalance(address);
}

const publicKey = new PublicKey("7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp");
getBalanceUsingWeb3Js(publicKey).then((balance) => console.log(balance));
