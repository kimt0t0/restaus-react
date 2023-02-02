import axios from 'axios'

// faire une constante pour tous les appels à l'API permet de sauver de la mémoire et évite d'instancier axios à chaque requête
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000 // 10 000ms pour 1s, limite le temps autorisé de la requête
})

const getRestaurants = async () => {
  try {
    const response = await api.get('/restaurants?populate=*')
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export {
  getRestaurants
}
