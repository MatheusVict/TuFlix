import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'

export interface IfilmesAPI {
    photo: string;
    title: string;
    description: string;
    aprove: number;
    year: number
    alt: string;
    show?: boolean
    bilheteria: number;
    lucro: number;
    duracao: number
}



export const MovieCard: React.FC<IfilmesAPI> = ({ photo, alt, aprove, title, show, bilheteria, description, duracao, lucro, year }) => {
    return (
        <div className="movie-card">
            <img src={photo} alt={alt} />
            <h2>{title}</h2>
            <p>
                <FaStar /> {aprove}
            </p>
            {show && (
                <Link to={`/movies/${title}`}>Ver mais</Link>
            )}
        </div>
    );
};