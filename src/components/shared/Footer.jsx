import badgeapple from "../../assets/badge-apple-store.svg"
import googleplay from "../../assets/google-play-badge-bb.svg"
import echoLogo from "../../assets/echoTune_Logo-negativo.png"
import { Col, Row } from "react-bootstrap";

const Footer = () => {
    return (
 <footer className=" bg-dark-subtle py-3 pe-3 ps-3 d-flex justify-content-around">
    <Row>
         <Col md={4} lg={4} className="text-center">
                    <h4 className="text-light">Disponible en mobiles</h4>
                    <div className="d-flex justify-content-center gap-2">
                        <a href="https://www.apple.com/la/app-store/" target="_blank" className="link"><img src={badgeapple} alt="appstore" className=" img-fluid appstore"/></a>
                        <a href="https://play.google.com/store/games?hl=es_AR&pli=1" target="_blank" className="link"><img src={googleplay} alt="playstore" className="img-fluid playstore"/></a>
                    </div>
          </Col>
                <Col md={4} lg={4} className="text-center">
                   <img src={echoLogo} alt="logotipo" className="img-fluid logotipo"/>
                </Col>
                <Col md={4} lg={4} className="text-center">
                <h4 className="text-light">Seguinos en redes</h4>
                <div className="d-flex justify-content-center gap-3">
                    <a href="https://x.com/?lang=es" target="_blank"  className="link text-light"><i className="bi bi-twitter-x text-light fs-2"></i></a>
                    <a href="https://www.facebook.com/?locale=es_LA" target="_blank" className="link text-light"><i className="bi bi-facebook color-facebook fs-2"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" className="link text-light"><i className="bi bi-instagram fs-2 color-instagram"></i></a>
                    </div>
                </Col>
                </Row>
        </footer>
    );
};
export default Footer;