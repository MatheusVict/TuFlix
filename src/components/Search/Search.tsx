import { useEffect, useState } from "react";
import { api } from "../../Config/ApiConfig";
import { IfilmesAPI, MovieCard } from "../Cards/MovieCard";

export const Search = () => {
    const [filmes, setFilmes] = useState<IfilmesAPI[]>([])
    useEffect(()=> {
        api.get<IfilmesAPI[]>(`/filmes/Lain`).then((filme) => {
            setFilmes(filme.data);
            
        })
    }, []);
    

    return (
        
        <div>
            {filmes.map((filmee) => {
                return <MovieCard 
                photo={filmee.photo} alt={filmee.alt}
                title={filmee.title}
                description={filmee.description}
                year={filmee.year}
                aprove={filmee.aprove}
                />
            })}
        </div>
    );
};