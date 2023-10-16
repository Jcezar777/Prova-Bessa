import React, { useEffect, useState } from "react";

interface Ceo {
    nome: string;
    id: string;
    Profissao: string;
}

function ListCeo() {
    const [Ceo, setCeo] = useState<Ceo[]>([]);
    //Incuir o useState para o campo de busca.
    const [search, setSearch] = useState("");
    const filteredCeo =
        search.length > 0
            ? Ceo.filter((repo) => repo.nome.includes(search))
            : [];
    //fim
    useEffect(() => {
        fetch(
            "http://localhost:4000/CEO's"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCeo(data);
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
                    ? filteredCeo?.map((Ceo) => (
                        <li key={Ceo.nome}>
                            <h4>ID: {Ceo.id} </h4>
                            <h4>Nome: {Ceo.nome}</h4>
                            <h4>Profissão: {Ceo.Profissao}</h4>
                        </li>
                    ))
                    : Ceo?.map((Ceo) => (
                        <li key={Ceo.nome}>
                            <h4>ID: {Ceo.id}</h4>
                            <h4>Nome: {Ceo.nome}</h4>
                            <h4>profissão: {Ceo.Profissao}</h4>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default ListCeo;