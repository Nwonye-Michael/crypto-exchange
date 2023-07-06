import React, { useEffect, useState } from "react"
import axios from "axios"

const CoinRates = () => {
  const [rates, setRates] = useState([])

  useEffect(() => {
    const fetchCoinRates = async () => {
      try {
        const response = await axios.get(
          "https://rest.coinapi.io/v1/exchangerate/all",
          {
            headers: {
              "X-CoinAPI-Key": "1EE30549-E4BA-4CD6-8EAC-59FB69BAEAC2",
            },
          }
        )

        setRates(response.data)
        console.log(rates)
      } catch (err) {
        console.log("Error fetching coin rates", err)
      }
    }

    fetchCoinRates()
  }, [])
  return <div></div>
}

export default CoinRates
