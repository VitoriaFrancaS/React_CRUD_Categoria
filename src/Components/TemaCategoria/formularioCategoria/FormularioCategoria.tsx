import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrarCategoria } from "../../../services/Service";

function formularioCategoria() {
    const [categorias, setCategorias] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
    async function buscarPorId(id: string) {
      await buscar(`/categorias/${id}`, setCategorias);
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategorias({
        ...categorias,
        [e.target.name]: e.target.value
      })
  
      console.log(JSON.stringify(categorias))
    }
  
    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (id !== undefined) {
        try {
          await atualizar(`/categorias`, categorias, setCategorias)
  
          alert('Categoria atualizada com sucesso')
          retornar()
  
        } catch (error: any) {
            alert('Erro ao atualizar a categoria')
  
        }
  
      } else {
        try {
          await cadastrarCategoria(`/categorias`, categorias, setCategorias)
  
          alert('Tema cadastrado com sucesso')
  
        } catch (error: any) {
            alert('Erro ao cadastrar a categoria')
      }
    }
  
      retornar() 
    }
  
    function retornar() {
      navigate("/categoria")
    }
  
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo">Tipo da categoria</label>
          <input
            type="text"
            placeholder="categoria"
            name='tipo'
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}


export default formularioCategoria;