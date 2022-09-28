import {Link} from "react-router-dom"
import logo from '../assets/background.jpg'


function LandingPageButton() {

    return <Link to="/" class="nav-link">
        <button class="btn btn-secondary" > 
            <span style={{"font-size": "24px"}}>
               Saber más...
            </span>
        </button>
    </Link>
}

function LandingFrameMessage() {


    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }

    return <div style={style}>
        
        <div style={{"font-size": "38px"}}>
            Diosas Griegas
        </div>
        
        <div style={{"font-size": "20px"}}>
            Porque el maquillaje no tiene genero
            Diosas griegas es una pagina diseñada para encontrar los mejores productos de belleza 
            encontraras productos ideales para tu tipo de piel. 
         
        </div>


        <br />

        <LandingPageButton/>
      

    </div>
}



function LandingFrame() {
    const style = {

        "background-image": `url("images/background.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "300%",
        width: "100%",
        
    }

    return <div style={style}>
        <LandingFrameMessage />        
    </div>
}






function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}

export default HomePage