import { Link, useNavigate, useParams } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import style from './NavBar.module.css'
import { useState } from 'react';

export const NavBar = () => {

    const [search, setSeach] = useState('')
    const navigate = useNavigate();

    function submeter(e: any) {
        e.preventDefault();
        if(!search) return;
        navigate(`/filmes/${search}`);
        setSeach('')
    }

    return(
        <nav className={style.navbar}>
            <h2>
                <Link to='/'><BiCameraMovie />Tú Filmes</Link>
            </h2>
            <form onSubmit={submeter}>
                <input type="text" placeholder="Busque um filme" 
                onChange={(e) => setSeach(e.target.value)}
                />
                <button type="submit"><BiSearchAlt2></BiSearchAlt2></button>
            </form>
        </nav>
    );
};