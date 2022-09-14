import { useEffect, useState } from "react";
import { api } from "../../Config/ApiConfig";
import { IfilmesAPI, MovieCard } from "../Cards/MovieCard";
import style from './Home.module.css'

export const pegar = (title: string) => {
    return title
}

export const Home = () => {
    const [filmes, setFilmes] = useState<IfilmesAPI[]>([])

    useEffect(() => {
        api.get<IfilmesAPI[]>('/filmes').then((filme) => {
            setFilmes(filme.data)
        })
    }, [])

    


    return(
        <div className={style.container}>
            <h2 className={style.title}>Melhores Filmes: </h2>
            <div className={style.moviesConatiner}>
                {filmes.map((movie) => {
                return <MovieCard 
                photo={movie.photo}
                alt={movie.alt}
                title={movie.title}
                description={movie.description}
                aprove={movie.aprove}
                year={movie.year}
                key={movie.title}
                onClick={()=> pegar(movie.title)}
                />
            })}
            </div>
            
        </div>
    );
};