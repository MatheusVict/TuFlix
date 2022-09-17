import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../Config/ApiConfig";
import { IfilmesAPI, MovieCard } from "../Cards/MovieCard";
import { NavBar } from "../NaveBar/NavBar";
import style from '../Home/Home.module.css'

export const Search = () => {
    const [filmes, setFilmes] = useState<IfilmesAPI>()
    const { title } = useParams()
    
    useEffect(() => {
        api.get<IfilmesAPI>(`filmes/${title}`).then((filme) => {
            setFilmes(filme.data);
        })

    }, [title])
    

    return (
        
        <div>
            <NavBar/>
            <div className={style.container}>
            <h2 className={style.title}>Resultado para: <span className={style.queryText}>{title}</span> </h2>
            <div className={style.moviesConatiner}>
                {filmes && (
                    <MovieCard 
                    photo={filmes.photo}
                    alt={filmes.alt}
                    aprove={filmes.aprove}
                    description={filmes.description}
                    title={filmes.title}
                    year={filmes.year}
                    key={filmes.title}
                    show={true}
                    bilheteria={filmes.bilheteria}
                    duracao={filmes.duracao}
                    lucro={filmes.lucro}
                    />
                )}
                {!filmes && (
                    <h1>Não foi encontrado </h1>
                )}
            </div>
            
        </div>
        </div>
    );
};