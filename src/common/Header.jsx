import {Link} from "react-router-dom"

function Header() {
    
    

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
            
            <div class="container-fluid">

                <a class="ml-5 navbar-brand" href="\">Diosas Griegas</a>

                <ul class="navbar-nav mr-5">
                    <li>
                        <Link to="/" class="nav-link selected">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/" class="nav-link">Contacto</Link>
                    </li>
                </ul>

                
            </div>
        </nav>
    );
}

export default Header;
