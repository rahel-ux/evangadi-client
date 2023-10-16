import React from 'react'
import "./footer.css"
import footerLogo from "./evangadi-logo-footer.png"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from "@mui/icons-material/YouTube";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footerLogo-wrapper">
        <img src={footerLogo} />
        <div className="icon-wrapper">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <YouTubeIcon />
          </div>
        </div>
      </div>

      <div className="usefulLink">
        {/* <div className=''>Useful Link</div>
        <div>How it workes</div>
        <div>Term Service</div>
        <div>Privacy policy</div> */}
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="cardTitle">Useful Link</Card.Title>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">
              How it workes
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">
              Term Service
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">
              Privacy policy
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
      <div className="usefulLink">
        {/* <div>Contact info</div>
        <div>Evangadi Networks</div>
        <div>support@evangadi.com</div>
        <div>+1-202-386-2702</div> */}
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="cardTitle">Contact info</Card.Title>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">
              Evangadi Networks
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">
              support@evangadi.com
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">
              +1-202-386-2702
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Footer