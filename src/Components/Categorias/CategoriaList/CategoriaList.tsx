import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { Dna } from "react-loader-spinner";
import CardCategorias from "../CardCategoria/CardCategorias";


function CategoriaList() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
        alert('Erro ao encontrar categoria')
        
      }
  }


  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
 
  return (
    <>
    {categorias.length === 0 && (
      <Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper mx-auto"
      />
    )}
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((item) => (
            <>
              <CardCategorias key={item.id} categoria={item} />
            </>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}

export default CategoriaList;