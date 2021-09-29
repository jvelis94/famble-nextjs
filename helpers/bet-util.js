import axios from "axios";

export async function createBet(data) {
    
    const response = await axios.post(`${process.env.API_URL}/api/bets`, data)
    return response
}

export async function getBettors(search_text) {
    const params = {query: search_text}
    const response = await axios.get(`${process.env.API_URL}/api/users`, {params})
    return response
}