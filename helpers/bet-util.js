import axios from "axios";

export async function createBet(data) {
    const response = await axios.post(`${process.env.API_URL}/api/bets`, data)
    return response
}