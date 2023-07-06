import React, { useEffect, useState } from "react"
import axios from "axios"
import "../App.css"
import Navbar from "../components/Navbar"
import { BiCaretUp, BiCaretDown } from "react-icons/bi"

function Market() {
  const [rates, setRates] = useState([])
  const [lastUpdated, setLastUpdated] = useState()

  const percentCheck = (percent) => {
    percent = percent.toFixed(1)
    if (percent < 0) {
      percent = percent * -1
      return (
        <div className="text-red-600 flex my-auto">
          {" "}
          <BiCaretDown className="mt-1" /> {percent}
          {"%"}
        </div>
      )
    } else if (percent > 0) {
      return (
        <div className="text-green-600 flex my-auto">
          {" "}
          <BiCaretUp className="mt-1" /> {percent}
          {"%"}
        </div>
      )
    } else {
      return <div className="ml-3 ">0.0%</div>
    }
  }

  useEffect(() => {
    const fetchCoinRates = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        )

        setRates(response.data)
        setLastUpdated(
          new Date(response.data[0].last_updated).toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
        )

        console.log(response.data)
      } catch (err) {
        console.log("Error fetching coin rates", err)
      }
    }

    fetchCoinRates()
  }, [])

  return (
    <div className="relative bg-white">
      <Navbar />
      <div className=" sm:py-8 pt-6  ml-8 font-semibold text-lg text-zinc-600 relative sm:text-3xl">
        Cryptocurrency prices
        <div className="font-normal text-[9px] text-black flex mt-3 ">
          Last updated -{" "}
          <div className="relative  w-[15%] overflow-hidden ml-2">
            <span className=" time-updated relative text-[11px] text-[#f472b6]">
              {lastUpdated}
            </span>
          </div>
        </div>
      </div>

      <div className="sm:mx-8 mx-2 my-6 border border-zinc-700 ">
        <ul>
          <li
            key={"refrence"}
            className="h-12 w-full border flex justify-between"
          >
            <div className=" w-[5vw] text-center my-auto text-xs font-mono font-bold italic">
              {/* <BiSearchAlt className="mx-auto mt-2" /> */}#
            </div>
            <div className="  w-[25vw] sm:w-[20vw]  my-auto text-xs font-mono ">
              Name
            </div>
            <div className="sm:w-[20vw] w-[15vw] my-auto text-xs font-mono ">
              Price($)
            </div>
            <div className=" w-[12vw] sm:w-[20vw]  my-auto text-xs font-mono ">
              24h Δ
            </div>
            <div className="  w-[29vw] sm:w-[20vw] my-auto text-xs font-mono ">
              Market Cap
            </div>
          </li>

          {rates.map((rate, index) => (
            <li
              key={rate.id}
              className="h-12 w-full border flex justify-between my-auto"
            >
              <div className="w-[5vw] text-center my-auto text-xs font-mono ">
                {index + 1}
              </div>
              <div className=" w-[25vw] sm:w-[20vw]  my-auto flex sm:text-xs  text-[10px] font-mono  ">
                <img
                  src={rate.image}
                  alt="thumb"
                  className="max-h-[20px] flex mr-1 sm:mr-2 my-auto"
                />
                <span className="mr-1 font-semibold text-[8px] my-auto hover:text-xs ">
                  {" "}
                  {rate.symbol}
                </span>
                <span className="my-auto"> {rate.name}</span>
              </div>
              <div className=" sm:w-[20vw] w-[15vw] my-auto text-xs font-mono ">
                ${rate.current_price.toLocaleString()}
              </div>
              <div className=" w-[12vw] sm:w-[20vw] my-auto text-xs font-mono  ">
                {percentCheck(rate.price_change_percentage_24h)}
              </div>
              <div className=" w-[29vw] sm:w-[20vw]  my-auto text-xs font-mono  ">
                ${rate.market_cap.toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <div>{
  "time": "2017-08-09T14:31:18.3150000Z", 
  "asset_id_base": "BTC",
  "asset_id_quote": "USD",
  "rate": 3260.3514321215056208129867667
}
</div> */}
    </div>
  )
}

export default Market
