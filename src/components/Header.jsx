import React from 'react';
import { Container,Navbar,Nav,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <style type="text/css">
                {`
                    .header{
                        background-color: #363636;
                    }
                    #firstlinkbt{
                        margin-left: 8vw;
                    }
                    .normallinkbt{
                        margin-left: 2vw;
                    }
                `}
            </style>
            <header className="header">
                <Container>
                    <Navbar expand="md" variant="dark">
                        <Navbar.Brand href="/">福島高校SS部情報班</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarResponsive" />
                        <Navbar.Collapse id="navbarResponsive">
                            <Nav as="ul" className="al_auto">
                                <Nav.Item as="li">
                                    <Button id="firstlinkbt" href="/Info.html" className="nav_link" activeClassName="active">Info</Button>
                                    <Button href="/Apps.html" className="nav_link normallinkbt"  activeClassName="active">Applications</Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
            </>
        );
    }
}
export default Header;