import { Container } from "react-bootstrap"
import ImgPostres from "../assets/ImgPostres"
import { NavBar } from "../components/NavBar/Navbar"

export const Postres = () => {
    return (
        <>
        <NavBar />
        <center>
             <h1 className="PostresName">P O S T R E S</h1>
             <Container className="Container1">
        <img className="Postres-img" src={ImgPostres [0].img} alt={ImgPostres [0].alt}  />
        <img className="Postres-img1" src={ImgPostres [5].img} alt={ImgPostres [5].alt}  />
        <img className="Postres-img" src={ImgPostres [2].img} alt={ImgPostres [2].alt}  />
        <img className="Postres-img" src={ImgPostres [3].img} alt={ImgPostres [3].alt}  />
        <img className="Postres-img1" src={ImgPostres [4].img} alt={ImgPostres [4].alt}  />
        <img className="Postres-img" src={ImgPostres [1].img} alt={ImgPostres [1].alt}  />
        <img className="Postres-img" src={ImgPostres [6].img} alt={ImgPostres [6].alt}  />
        <img className="Postres-img1" src={ImgPostres [7].img} alt={ImgPostres [7].alt}  />
        <img className="Postres-img" src={ImgPostres [8].img} alt={ImgPostres [8].alt}  />
        <img className="Postres-img" src={ImgPostres [9].img} alt={ImgPostres [9].alt}  />
        <img className="Postres-img1" src={ImgPostres [10].img} alt={ImgPostres [10].alt}  />
        <img className="Postres-img" src={ImgPostres [11].img} alt={ImgPostres [11].alt}  />
        </Container>
        </center>
       
        </>
    )
}