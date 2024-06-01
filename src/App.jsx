import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo1 } from "./assets";
import { Home, CreatePost } from "./pages";
// import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
// import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [ethBalance, setEthBalance] = useState(0); // State to hold ETH balance

  // useEffect(() => {
  //   const loadProvider = async () => {
  //     if (window.ethereum) {
  //       const provider = await new ethers.providers.Web3Provider(
  //         window.ethereum
  //       );
  //       window.ethereum.on("chainChanged", () => {
  //         window.location.reload();
  //       });
  //       window.ethereum.on("accountsChanged", () => {
  //         window.location.reload();
  //       });
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       const signer = provider.getSigner();
  //       const address = await signer.getAddress();
  //       setAccount(address);
  //       let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  //       const contract = new ethers.Contract(
  //         contractAddress,
  //         Upload.abi,
  //         signer
  //       );
  //       setContract(contract);
  //       setProvider(provider);

  //       // Fetch ETH balance
  //       const balance = await provider.getBalance(address);
  //       setEthBalance(ethers.utils.formatEther(balance));
  //       console.log(balance);
  //     } else {
  //       console.error("Metamask is not installed");
  //     }
  //   };
  //   loadProvider();
  // }, []);

  // const connectWallet = async () => {
  //   try {
  //     await window.ethereum.request({ method: "eth_requestAccounts" });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const truncatedAddress = (address) => {
  //   if (address) {
  //     return (
  //       address.substring(0, 6) + "..." + address.substring(address.length - 4)
  //     );
  //   }
  //   return console.log(address);
  // };

  return (
    <BrowserRouter>
      <header className="z-10 w-full flex justify-between items-center bg-[#0D0C14] sm:px-8 px-4 py-4 border-b border-b-[#0D0C14]">
        <Link to="/">
          <img src={logo1} alt="logo" className=" z-10 w-28 object-contain" />
        </Link>
        <div className="flex items-center z-10">
          {/* {account && (
            <div className="flex items-center mr-4 z-10">
              <Button className="button">
                id: {truncatedAddress(account)}
              </Button>
              <div className="flex items-center z-10">
                <div className="font-inter font-medium bg-[#0D0C14] text-white px-4 py-2 rounded-md flex items-center mr-2">
                  <img
                    className="w-5 h-5 mr-2"
                    src="https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg"
                    alt=""
                  />{" "}
                  {ethBalance}
                </div>
              </div>
            </div>
          )}
          {!account && (
            <Button px="px-4" className="mr-5" onClick={connectWallet}>
              Connect to MetaMask
            </Button>
          )} */}
          <Link to="/create-post">
            <Button>Create</Button>
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#0D0C14] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create-post"
            element={
              <CreatePost
                account={account}
                provider={provider}
                contract={contract}
              />
            }
          />
        </Routes>
        <ButtonGradient />
      </main>
      <ButtonGradient />
    </BrowserRouter>
  );
}

export default App;
