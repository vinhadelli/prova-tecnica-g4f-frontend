import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoticiaService from "../../service/noticiaService";
type NoticiaType = {
  id:string,
  titulo: string,
  descricao: string
}

export default function CriarNoticia()
{
  let location = useLocation();
  let idAtualizar: string 
  if(location.state != null)
    idAtualizar = location.state.key
  else
    idAtualizar = ""
  
  useEffect(() => {
    buscarNoticia()
  }, [])

  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  async function buscarNoticia()
  {
    if (idAtualizar != "")
    {
      let noticia: NoticiaType = await NoticiaService.BuscarNoticia(idAtualizar)  
      bindTitulo({ target: { value: noticia.titulo } })
      bindDescricao({ target: { value: noticia.descricao } })
    }
  }
  function bindTitulo(event: { target: { value: string; }; })
  {
    setTitulo(event.target.value)
  }
  function bindDescricao(event: { target: { value: string; }; })
  {
    setDescricao(event.target.value)
  }
  
  async function enviarNoticia()
  {
    let noticia =
    {
      titulo: titulo,
      descricao: descricao
    }
    if (idAtualizar == "")
    {
      let json = await NoticiaService.CriarNoticia(noticia);
      if (json.id != null)
      {
        alert("Notícia criada com sucesso!")  
        navigate(-1)
      }
      else
      {
        alert("Ocorreu um erro, confira o console")
        console.log(json)
      }
    }
    else
    {
      let json = await NoticiaService.AtualizarNoticia(idAtualizar, noticia);
      if (json.id != null)
      {
        alert("Notícia atualizada com sucesso!")  
        navigate(-1)
      }
      else
      {
        alert("Ocorreu um erro, confira o console")
        console.log(json)
      }
    }
  }
  return (
    <div className="App">
      {idAtualizar == "" ? <h3>Portal de Notícias: Criar</h3> : <h3>Portal de Notícias: Atualizar</h3>}
      <div>
      <div>
        <div className="mt-4">
          <label className="label">
            Titulo:
          </label>
          <input type="text" value={titulo} onChange={bindTitulo}/>
        </div>
        <div className="mt-4">
          <label className="label">
            Descrição:
            <textarea rows={4} value={descricao} onChange={bindDescricao}/>
          </label>
        </div>
          <button className="mt-4" onClick={enviarNoticia}>Enviar</button>
        </div>
      </div>
    </div>
  );
}