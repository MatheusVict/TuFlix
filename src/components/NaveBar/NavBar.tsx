import { Link, useNavigate} from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import style from './NavBar.module.css'
import { FormEventHandler, useState } from 'react';
export const NavBar = () => {

    const [Search, setSearch] = useState('')

    const navigate = useNavigate()

    const enviar: FormEventHandler<HTMLFormElement | string> = (e) => {
        e.preventDefault()
        if(!Search) return 

        navigate(`/search/${Search}`);
        setSearch('')
    }

    return(
        <nav className={style.navbar}>
            <h2>
                <Link to='/'><BiCameraMovie />Tú Filmes</Link>
            </h2>
            <form onSubmit={enviar}>
                <input type="text" placeholder="Busque um filme" 
                onChange={(e) => setSearch(e.target.value)}
                value={Search}
                />
                <button type="submit"><BiSearchAlt2></BiSearchAlt2></button>
            </form>
        </nav>
    );
};