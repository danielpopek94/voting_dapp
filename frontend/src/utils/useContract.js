import { ethers } from "ethers";
import VotingArtifact from "./artifacts/contracts/Voting.sol/Voting.json";

const contractAddress = "adres_kontraktu";
const abi = VotingArtifact.abi;

export function useContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  return contract;
}
