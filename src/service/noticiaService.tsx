import axios from "axios"
    let baseUrl = process.env.REACT_APP_NOTICIA_API
    async function ListarNoticias() {
        return await axios.get(baseUrl + "/noticias")
            .then((response) => {
            return response.data
        })
    }
    async function CriarNoticia(objeto: object) {
        let noticia = JSON.stringify(objeto)
        return await axios.post(baseUrl + "/noticias",noticia)
            .then((response) => {
            return response.data
        })
    }
    async function BuscarNoticia(id:string) {
        return await axios.get(baseUrl + "/noticias/"+id)
            .then((response) => {
            return response.data
        })
    }
    async function AtualizarNoticia(id: string, objeto: object) {
        let noticia = JSON.stringify(objeto)
        return await axios.put(baseUrl + "/noticias/"+id, noticia)
            .then((response) => {
            return response.data
        })
    }
    async function DeletarNoticia(id:string) {
        return await axios.delete(baseUrl + "/noticias/"+id)
            .then((response) => {
            return response.data
        })
    }
   

const NoticiaService = {
    ListarNoticias,
    CriarNoticia,
    BuscarNoticia,
    AtualizarNoticia,
    DeletarNoticia,
}

export default NoticiaService