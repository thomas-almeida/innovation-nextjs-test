import useUserStore from "@/store/userStore"
import axios from "axios"
const api = axios
const baseUrl = "https://apihomolog.innovationbrindes.com.br/api/innova-dinamica"

async function signIn(payload) {
  try {
    const response = await api.post(`${baseUrl}/login/acessar`, payload)

    useUserStore.getState().setUser({
      user: response.data?.dados_usuario,
      token: response.data?.token_de_acesso
    })

    return response
  } catch (error) {
    console.error(error)
  }
}

export default {
  signIn
}
