import axios from 'axios'

export const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://official-joke-api.appspot.com/jokes/ten'
    )
    return response.data
  } catch (err) {
    console.log(err)
  }
}
