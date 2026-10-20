import { reactive, onMounted } from 'vue'
import axios, { AxiosError } from 'axios'

export default function () {
  let dogList = reactive<string[]>([])

  async function getDog() {
    try {
      let { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.push(data.message)
    } catch (error) {
      const err = <AxiosError>error
    }
  }

  onMounted(() => {
    getDog()
  })

  return { dogList, getDog }
}
