import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const ApiService = {
    async fetchData() {
        const response  = await axios.get(import.meta.env.VITE_APP_API_URL, options)
    
    },
}