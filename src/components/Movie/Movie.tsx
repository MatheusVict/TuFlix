import { useEffect, useState } from 'react';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom';
import { api } from '../../Config/ApiConfig';
import { IfilmesAPI, MovieCard } from '../Cards/MovieCard';
import { NavBar } from '../NaveBar/NavBar';
import style from './Movie.module.css'

export const Movie = () => {
    const { title } = useParams()
    const [movie, setMovie] = useState<IfilmesAPI>()

    useEffect(()=> {
        api.get<IfilmesAPI>(`filmes/${title}`).then((filme) => {
                setMovie(filme.data)
        })
       

    }, [title])
    

    

    return(
        <div>
            <NavBar/>
            <div className={style.moviePage}>
                {movie && (
                    <div className={style.movieCard}>
                        <MovieCard 
                        photo={movie.photo}
                        alt={movie.alt}
                        title={movie.title}
                        year={movie.year}
                        description={movie.description}
                        aprove={movie.aprove}
                        key={movie.title}  
                        show={false}/>
                    </div>
                )}
                        <div className={style.info}>
                            <h3>
                                <BsWallet2/> Bilheteria:
                            </h3>
                            <p>Tal</p>
                        </div>
                        <div className={style.info}>
                            <h3>
                                <BsGraphUp /> Lucro:
                            </h3>
                            <p>Tal</p>
                        </div>
                        <div className={style.info}>
                            <h3>
                                <BsHourglassSplit /> Duração:
                            </h3>
                            <p>Tal</p>
                        </div>
                        <div className={style.description}>
                            <h3>
                                <BsFillFileEarmarkTextFill /> Descrição:
                            </h3>
                            <p>{movie?.description}</p>
                        </div>
                
            </div>
        </div>
    );
};