import '../styles/banner.css'
import logo from '../assets/logo.png'

function Banner(){
    const title = "La maison jungle";
    return (
        <div className='lmj-title'>  
            <img className="logo" src={logo} alt="Logo la maison jungle" /> 
            <h1>{title}</h1>
        </div>
    )
}

export default Banner