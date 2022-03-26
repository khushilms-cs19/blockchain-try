import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = (props) => {
  return <input {...props} step="0.0001" />;
};
function Welcome() {
  const connectWallet = () => {};
  const [isLoading, setIsLoading] = useState(false);
  const handlerSubmit = () => {};
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10 ">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            {" "}
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Crypto world. Buy and Sell cryptocurrencies easily on
            Krypto
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-gradient-to-r from-blue-500 to-blue-700"
          >
            <p className="text-white text-base font-semibold ">
              Connect Wallet
            </p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Etherium</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum className="text-white text-2xl" />
                </div>
                <BsInfoCircle className="text-white text-1xl" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Etherium
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder={"Address To"}
              name="AddressTo"
              type="text"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              onChange={() => {}}
            />
            <Input
              placeholder={"Amount (ETH)"}
              name="amount"
              type="number"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              onChange={() => {}}
            />
            <Input
              placeholder={"Keyword (Gif)"}
              name="keyword"
              type="text"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              onChange={() => {}}
            />
            <Input
              placeholder={"Enter Message"}
              name="message"
              type="text"
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              onChange={() => {}}
            />
            <div className="h-[1px] w-full b-gray my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handlerSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:border-none"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
