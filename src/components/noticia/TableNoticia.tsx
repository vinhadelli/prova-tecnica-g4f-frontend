import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoticiaService from "../../service/noticiaService";
type NoticiaType = {
  id:string,
  titulo: string,
  descricao: string
}

export default function TableNoticia() {
    const navigate = useNavigate();
  const [resultados, setResultados] = useState<NoticiaType[]>([])
  

    
  async function BuscarNoticias()
  {
    
    let json = await NoticiaService.ListarNoticias();
    if (json.length > 0)
    {
      setResultados(json)
    }
  }
  useEffect(() => {
    BuscarNoticias();
  }, [])
  function editarNoticia(id : string)
  {
    navigate('../noticia/criar', {state: {key: id}})
  }
  async function apagarNoticia(id: string)
  {
    if (window.confirm("Você tem certeza que deseja apagar a notícia?"))
    {
      let response : NoticiaType = await NoticiaService.DeletarNoticia(id)  
      if (response.id != null)
      {
        alert("Notícia deletada com sucesso!")
        window.location.reload()
      }
    }
  }
  return (
      <div>
        <div className="mt-4">
        <table className="table-noticias">
          <tr>
            <th className="textoTabela">Titulo</th>
            <th className="textoTabela">Descricao</th>
            <th className="textoTabela tabela-acao">Ação</th>
          </tr>
          {
            resultados.map((noticia, index) => {
              return (
                <tr key={index}>
                  <td className="textoTabela">{ noticia.titulo }</td>
                  <td className="textoTabela">{ noticia.descricao }</td>
                  <td className="textoTabela tabela-acao ml-4">
                    <button onClick={() => { editarNoticia(noticia.id) }}>Editar</button>
                    <button className="ml-4" onClick={() => { apagarNoticia(noticia.id) }}>Deletar</button>
                  </td>
                </tr>
              )
            })
          }
        </table>
        </div>
      </div>
    );
  }