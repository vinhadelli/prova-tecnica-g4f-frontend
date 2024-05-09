import { useEffect, useState } from "react";
import CepService from "../service/cepService";
type Endereco =
  {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
  }

export default function Cep() {
  const [cep, setCep] = useState('')
  const [enderecoBuscado, setEnderecoBuscado] = useState<Endereco>()

  useEffect(() => {
    setEnderecoBuscado({
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      ibge: "",
      gia: "",
      ddd: "",
      siafi: ""
    })
  }, [])

  function bindCep(event: { target: { value: string; }; })
  {
    setCep(event.target.value)
  }

  async function buscarCep()
  {
    if (cep != "")
    {
      let endereco = await CepService.BuscarCep(cep)
      console.log(endereco)
      setEnderecoBuscado(endereco)
    }
  }
  return (
    <div className="App">
      <h3>Buscar CEP</h3>
      <div className="mt-4">
          <label className="label">
            Digite o CEP
          </label>
          <input type="text" value={cep} onChange={bindCep}/>
      </div>
      <button className="mt-4" onClick={buscarCep}>Enviar</button>
      {enderecoBuscado?.logradouro != "" &&
        <div className="mt-4 lista-cep">
          <h2>Endereço Buscado</h2>
          <div className="d-flex">
            <div className="a-center d-flex ml-4">
              <label>CEP:     </label>
              <p className="ml-4">{enderecoBuscado?.cep}</p>
            </div>
            <div className="a-center d-flex ml-4">
              <label>Logradouro:     </label>
              <p className="ml-4">{enderecoBuscado?.logradouro}</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="a-center d-flex ml-4">
              <label>Complemento:     </label>
              <p className="ml-4">{enderecoBuscado?.complemento}</p>
            </div>
            <div className="a-center d-flex ml-4">
              <label>Bairro:     </label>
              <p className="ml-4">{enderecoBuscado?.bairro}</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="a-center d-flex ml-4">
              <label>Localidade:     </label>
              <p className="ml-4">{enderecoBuscado?.localidade}</p>
            </div>
            <div className="a-center d-flex ml-4">
              <label>UF:     </label>
              <p className="ml-4">{enderecoBuscado?.uf}</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="a-center d-flex ml-4">
              <label>IBGE:     </label>
              <p className="ml-4">{enderecoBuscado?.ibge}</p>
            </div>
            <div className="a-center d-flex ml-4">
              <label>Gia:     </label>
              <p className="ml-4">{enderecoBuscado?.gia}</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="a-center d-flex ml-4">
              <label>DDD:     </label>
              <p className="ml-4">{enderecoBuscado?.ddd}</p>
            </div>
            <div className="a-center d-flex ml-4">
              <label>Siafi:     </label>
              <p className="ml-4">{enderecoBuscado?.siafi}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}