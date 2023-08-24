import "./homestyle.css";
import logo from "./imgs/logoMobile.png";
import weblogo from "./imgs/logoWeb.png";
import MiriamPix from "./imgs/MiriamQR.png";
import CupeceQR from "./imgs/CupeceQR.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Home() {
  return (
    <>
      <main className="mainBlock">
        <img src={logo} className="mobileLogo" />
        <img src={weblogo} className="webLogo" />
        <h1 className="mainTitle">CONTRIBUA CONOSCO</h1>
        <div className="pixBlocksWrapper">
          <div className="pixBlock">
            <img src={MiriamPix} />
          </div>
          <div className="pixBlock cupece">
            <img src={CupeceQR} />
          </div>
        </div>
        <div id="transferenciaBancaria">
          <h4>Transferência Bancária</h4>
          <p>Banco Bradesco</p>
          <p>Agência: 619-0</p>
          <p>C/C: 17110-7</p>
        </div>
      </main>
      <footer>
        Nos siga nas redes sociais:
        <div className="wrapperSocialLinks">
          <a href="https://www.instagram.com/cepacchurch/"><InstagramIcon sx={{fontSize: 45}}/></a>
          <a href="https://www.facebook.com/CEPACchurch"><Facebook sx={{fontSize: 45}}/></a>
          <a href="https://www.youtube.com/@CEPACChurch"><YouTubeIcon sx={{fontSize: 45}}/></a>
        </div>
      </footer>
    </>
  );
}
