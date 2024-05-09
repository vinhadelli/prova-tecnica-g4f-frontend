import { useNavigate } from "react-router-dom";
export default function Noticia() {
    const navigate = useNavigate();
  return (
    <div className="App">
      <h3>Portal de Notícias:</h3>
        <div className="d-flex mt-4 j-center">
                <button className="ml-4" onClick={() =>{navigate('listar')}}>Listar Todas</button>
                <button className="ml-4" onClick={() =>{navigate('criar')}}>Criar</button>
                {/* <button className="ml-4" onClick={() =>{navigate('buscar')}}>Buscar</button>
                <button className="ml-4" onClick={() =>{navigate('atualizar')}}>Atualizar</button>
                <button className="ml-4" onClick={() =>{navigate('deletar')}}>Deletar</button> */}
        </div>
    </div>
  );
}