import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'

export interface IfilmesAPI {
    photo: string;
    title: string;
    description: string;
    aprove: number;
    year: number
    alt: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}



export const MovieCard: React.FC<IfilmesAPI> = ({ photo, alt, aprove, description, title, year, onClick }) => {
    return (
        <div className="movie-card">
            <img src={photo} alt={alt} />
            <h2>{title}</h2>
            <p>
                <FaStar /> {aprove}
            </p>
            <Link to={`/search/${title}`} onClick={onClick}>Ver mais</Link>
        </div>
    );
};