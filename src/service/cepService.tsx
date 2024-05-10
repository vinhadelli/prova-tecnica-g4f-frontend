import axios from "axios"
    let baseUrl = process.env.REACT_APP_CEP_API
    async function BuscarCep(cep:string) {
        return await axios.get(baseUrl + cep+"/json")
            .then((response) => {
            return response.data
        })
    }
const CepService = {
    BuscarCep,
}

export default CepService