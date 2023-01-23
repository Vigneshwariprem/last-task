import React from "react";
import { Button, Card, CardGroup, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
// import Logo from '../src/Image/Logo.png'
import Logo from '../Image/Logo.png'
import Mainpic from '../Image/Mainpic.png'
import card1pic from '../Image/card1pic.png'
import card2pic from '../Image/card2pic.png'
import card3pic from '../Image/card3pic.png'
import card1 from '../Image/card1.png'
import card2 from '../Image/card2.png'
import card3 from '../Image/card3.png'





function Home() {
    return (
      <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</link>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Mulish:ital,wght@0,300;0,400;0,500;1,800&display=swap" rel="stylesheet"/>    

  <Container>
    <Row className="justify-content-md-center">
      <Col xs={6} sm={6} md={6} lg={6}>
      <img src={Logo} className='img-fluid' />
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} style={{marginTop:20}}>
<Navbar bg="#FFFFFF" expand="xl">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none'}} />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"
        style={{ color:'#1E202F', fontSize:14, letterSpacing:0.5, fontFamily:'Mulish'}}>Why Us?</Nav.Link>
        <Nav.Link href="#link"
        style={{ color:'#1E202F', fontSize:14, letterSpacing:0.5, fontFamily:'Mulish'}}>Marketing</Nav.Link>
        <Nav.Link href="#link"
        style={{ color:'#1E202F', fontSize:14, letterSpacing:0.5, fontFamily:'Mulish'}}>Pricing</Nav.Link>
        <Nav.Link href="#link"
        style={{ color:'#4099F1', fontSize:14, letterSpacing:0.5, fontFamily:'Mulish'}}>Sign Up, It’s Free</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </Col>
    </Row>
    <Row style={{marginTop:60}}>
    <Col xs={12} sm={6} md={6} lg={6}  className="justify-content-center" >
    <p style={{textAlign: 'left', color:'#1E202F', fontSize:64, fontWeight:'bold', letterSpacing:0.45, fontFamily:'Merriweather'}}>
    We take care Marketing things
       </p>
       <Button style={{color:'#4099F1', width:144, height:52,}}>
       <p style={{color:'#FFFFFF', fontSize:14, marginTop:5}}>Pick a Plan</p>
       </Button>
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
        <img src={Mainpic} className='img-fluid'/>
</Col>
    </Row>
<Row style={{marginTop:40}}>
  <Col>
  <svg height="80" width="50">
  <g fill="none">
    <path stroke="#4099F1" d="M5 20 l215 0" />
  </g>
</svg>
<p style={{ position:'absolute', top:9, marginLeft:60, color:'#4099F1', fontSize:14, letterSpacing:0.5, fontFamily:'Mulish', fontWeight:'bold'}}>BLOG</p>
</Col>
</Row>
<Row>
  <Col>
  <p style={{color:'#1E202F', fontSize:32, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'bold'}}>
  Explore Marketing Tips
  </p>
  </Col>
</Row>
    <Row>
    <CardGroup>
  <Card style={{border:'none', paddingRight:20}}>
    <Card.Img variant="top" src={card1pic} />
    <div style={{width:151, height: 48, background:'#FFFFFF', marginTop:-46}}>
    <Row>
    <Col xs={4} sm={4} md={4} lg={4}>
      <img src={card1} style={{width:32, height:32, margin:10}} className='img-fluid'/>
      </Col>
      <Col xs={8} sm={8} md={8} lg={8}>
      <p style={{ marginTop:5, color:'#1E202F', marginTop:12, fontSize:12, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'bold'}}>John Doe</p>
      </Col>
      </Row>

      <p style={{color:'#B2B2B2', fontSize:8, marginLeft:45, marginTop:-20, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'bold'}}>Head of Marketing</p>

    </div>
    <Card.Body>
      <Card.Title
      style={{color:'#1E202F', fontSize:20, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'normal'}}>
        Tips for a good Pitching Presentation</Card.Title>
      <Card.Text
      style={{color:'#888990', fontSize:12, letterSpacing:0.5, fontFamily:'Mulish', fontWeight:'normal'}}>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{border:'none', paddingRight:20}}>
    <Card.Img variant="top" src={card3pic} />
    <div style={{width:151, height: 48, background:'#FFFFFF', marginTop:-46}}>
    <Row>
    <Col xs={4} sm={4} md={4} lg={4}>
      <img src={card2} style={{width:32, height:32, margin:10}} className='img-fluid'/>
      </Col>
      <Col xs={8} sm={8} md={8} lg={8}>
      <p style={{ marginTop:5, color:'#1E202F', marginTop:12, fontSize:12, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'bold'}}>Jane Maria</p>
      </Col>
      </Row>

      <p style={{color:'#B2B2B2', fontSize:8, marginLeft:65, marginTop:-20, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'bold'}}>Designer</p>

    </div>
    <Card.Body>
      <Card.Title
      style={{color:'#1E202F', fontSize:20, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'normal'}}>
Improve Your Content’s Traffic
        </Card.Title>
      <Card.Text
            style={{color:'#888990', fontSize:12, letterSpacing:0.5, fontFamily:'Mulish', fontWeight:'normal'}}>
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{border:'none'}}>
    <Card.Img variant="top" src={card2pic} />
    <div style={{width:151, height: 48, background:'#FFFFFF', marginTop:-46}}>
    <Row>
    <Col xs={4} sm={4} md={4} lg={4}>
      <img src={card3} style={{width:32, height:32, margin:10}} className='img-fluid'/>
      </Col>
      <Col xs={8} sm={8} md={8} lg={8}>
      <p 
      style={{ marginTop:5, color:'#1E202F', marginTop:12, fontSize:12, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'bold'}}>
      Jack Dorsey</p>
      </Col>
      </Row>

      <p style={{color:'#B2B2B2', fontSize:8, marginLeft:45, marginTop:-20, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'bold'}}>Marketing Specialist</p>

    </div>
    <Card.Body>
      <Card.Title
            style={{color:'#1E202F', fontSize:20, letterSpacing:0.5, fontFamily:'Merriweather', fontWeight:'normal'}}>
        Reaching Deal with your Clients
        </Card.Title>
      <Card.Text
            style={{color:'#888990', fontSize:12, letterSpacing:0.5, fontFamily:'Mulish', fontWeight:'normal'}}>
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
    </Row>

    <Row  className="justify-content-md-center">
      <Col>
      <img src={Logo} className='img-fluid' />
      </Col>
  
    </Row>
  </Container>
</div>
    );
  }
  export default Home;