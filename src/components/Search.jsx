import styles from './Search.module.css'
import {FaSearch} from "react-icons/fa"
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/UseQuery';

export function Search() {
    const query= useQuery();
    const search = query.get("search");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();    
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox} >
                <input 
                className={styles.searchInput} 
                type="text" 
                value= {search} 
                placeholder= "Title"
                aria-label= "Search Movies"
                onChange = {(e) => {
                    const value = e.target.value;
                    history.push("/?search=" + value);
                }} 
                />
                {/* <button className={styles.searchButton} type="submit"> */}
                    <FaSearch size= {20} color= "black" className={styles.searchButton}/>
                {/* </button> */}
            </div>
        </form>
    );
}

