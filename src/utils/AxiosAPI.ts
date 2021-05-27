import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 100000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGExZTY0ZWNhYTM4ZmZmM2E4Y2RlYWI0NmM2MjQ1MSIsInN1YiI6IjYwMTkxMmVkYTA2NjQ1MDA0MDNiNTc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U8rfb98YgAZqTeHbjL_Sd3lATujdoXyVGBrlDhd4GXE'
  }
})

API.defaults.headers.post['Content-Type'] = 'application/json'

API.defaults.headers.post['Content-Type'] = 'application/json'

API.defaults.params = {
  language: 'ru-RU'
}

API.interceptors.response.use((resolve) => resolve, (error) => {
  switch (error.response.status) {
    case 401: {
      throw new Error('wrong login or password')
      break
    }
  }
})
