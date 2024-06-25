
import "./footer.css"
import ImagenesSueltas from "../../assets/ImagenesSueltas"
import { Link, NavLink } from "react-router-dom"


export const Footer = () => {
    return (
      <>
      <footer className="footer">
        <div className="containerfooter">
            <div className="footer-row">
                <img className="Logo" src={ImagenesSueltas [7].img} alt={ImagenesSueltas [7].alt}  />
                <div className="footer-info">
                   <h4>C o n t a c t o</h4>
                   <p>florecer@contacto.cl</p>
                   <p>Teléfono: +562 25698473</p>
                   <p>Whatsapp: +569 86752403</p>
                 </div>
                 <div className="footer-info">
                   <h4>H o r a r i o</h4>
                   <p>Lunes a Domingo</p><br />

                   <p>11:00 a 23:00 hrs.</p>   
                 </div>
                 <div className="footer-info">
                   <h4>U b i c a c i ó n</h4>
                   <p> Los Eucaliptus 5728 Chicureo</p>
                     </div>
                 <div className="footer-info">
                   <h4>S í g u e n o s</h4>
                   <Link className="Redsocial">Faceboock</Link> <br></br>
                   <Link className="Redsocial">Instagram</Link> <br></br>
                   <Link className="Redsocial">Youtube</Link>
                   
                 </div>
            
        </div>
              </div>
                   
      </footer>
      </>
    )
}