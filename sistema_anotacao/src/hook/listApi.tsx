import React, { useEffect, useState } from "react";

interface produtos {
    nome: string;
    id: number;
    preco: string;
}

function ListApi() {
    const [produtos, setProdutos] = useState<produtos[]>([]);
    //Incuir o useState para o campo de busca.
    const [search, setSearch] = useState("");
    const filteredProdutos =
        search.length > 0
            ? produtos.filter((repo) => repo.nome.includes(search))
            : [];
    //fim
    useEffect(() => {
        fetch(
            "http://localhost:4000/produtos"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProdutos(data);
            });
    }, []);
    return (
        //Inclusão do input e da condicional de busca
        <div>
            <input
                name="search"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
            />
            <ul>
                {search.length > 0
                    ? filteredProdutos?.map((produtos) => (
                     <li key={produtos.nome}>
                        <h4>ID: {produtos.id} </h4>
                        <h4>Nome: {produtos.nome}</h4>
                        <h4>Preço: {produtos.preco}</h4>
                     </li>
                    ))
                    : produtos?.map((produtos) => (
                        <li key={produtos.nome}>
                           <h4>ID: {produtos.id}</h4>
                           <h4>Nome: {produtos.nome}</h4>
                           <h4>Preço: {produtos.preco}</h4>
                        </li>
                       ))}
            </ul> 
        </div>
    );
}
export default ListApi;