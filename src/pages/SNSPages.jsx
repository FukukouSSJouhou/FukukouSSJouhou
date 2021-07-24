import React from 'react';
import Header from '../components/Header';
import {Container,Row,Col,footer,Card,Button,CardGroup} from 'react-bootstrap';
import {RevealGlobalStyles,Reveal} from 'react-genie'
import Midasi from "../components/Midasi";
import umenaviImage from "../images/iconumenavi.svg"
class SNSPages extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <>
            <style type="text/css">
                {
                    `
                    .headercont{
                        height:13vw;
                        width:100%;
                        overflow:hidden;
                        background-color:#434343;
                    }
                    .header_back{
                        background-repeat: repeat;
                    }
                    #header_center{
                        color:white;
                        text-align:center;
                        line-height:13vw;
                        font-size:4.1vw;
                    }
                    body{
                        background-color:#f0f2f5;
                        min-height:100%;                   
                    }
                    .infokun{
                        margin-top:4vw;
                        margin-left:2vw;
                        margin-bottom:3vw;
                    }
                    .footerkun{
                        text-align:center;
                        background-color:#343434;
                        color:#fff;
                    }
                    .midasirow{
                        margin-top:6vw;
                    }
                    #ofkun{
                        margin-top:3vw;
                        text-align:center;
                    }
                    .Contkun{
                        margin-top:3vw;
                        margin-bottom:3vw;
                    }
                    .imgkunCard{
                        width:15vw;
                    }
                    .Cardkun111{
                        width:35%;
                        margin-left:1vw;
                        margin-right:1vw;
                        margin-bottom:5vw;
                    }
                    @media screen and (max-width: 640px) {
                        
                    .headercont{
                        height:26vw;
                        width:100%;
                        overflow:hidden;
                        background-color:#434343;
                    }
                    #header_center{
                        color:white;
                        text-align:center;
                        line-height:26vw;
                        font-size:10vw;
                    }
                    #ofkun{
                        margin-top:6vw;
                        text-align:center;
                        margin-bottom:6vw;
                    }
                    .midasikun{
                        font-size:12vw;
                    }
                    .infokun{
                        font-size:4vw;
                    }
                    
                    .Cardkun111{
                        width:90%;
                    }
                    
                    .imgkunCard{
                        width:45vw;
                    }
                    }
                    `
                }
            </style>
                <Header />
                <RevealGlobalStyles />
                <Container fluid className="headercont">
                    <h1 id="header_center">福島高校SS部情報班</h1>
                </Container>
                <Container>
                    <Reveal>
                        <Row>
                            <h1 id="ofkun">SNSアカウント一覧</h1>
                        </Row>
                    </Reveal>
                </Container>
                
                            
                <Reveal>
                <Container className="Contkun">
                        <CardGroup>
                                <Card className="Cardkun111">
                                    <Card.Img className="imgkunCard" variant="top" src={umenaviImage} style={{overflow:"hidden"}}/>
                                    <Card.Body>
                                        <Card.Title >Twitter</Card.Title>
                                        <Card.Text>
                                            情報班公式Twitterアカウントです。
                                            <br/>
                                            フォローすると班員が喜びます。
                                        </Card.Text>
                                        <Button variant="primary" href="https://twitter.com/SS01869794" target="_blank">Twitter</Button>
                                    </Card.Body>
                                </Card>
                        {/*
                        <Card className="Cardkun111">
                            <Card.Img className="imgkunCard" variant="top" src={umenaviImage} style={{overflow:"hidden"}}/>
                            <Card.Body>
                                <Card.Title >PLAMAR</Card.Title>
                                <Card.Text>
                                    文化祭で使う予定のアプリケーションです。<br />
                                    Webベースであり、インストール不要で使うことができます。
                                </Card.Text>
                                <Button variant="primary">Let's go!</Button>
                            </Card.Body>
                        </Card>
                        */}

                                <Card className="Cardkun111">
                                    <Card.Img className="imgkunCard" variant="top" src={umenaviImage} style={{overflow:"hidden"}}/>
                                    <Card.Body>
                                        <Card.Title >準備中</Card.Title>
                                        <Card.Text>準備中...
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        </CardGroup>
                        
                </Container>
                
                </Reveal>
                <footer className="footerkun">©2021 Fukushima High School SS Club Jouhouhan</footer>
            </>
        )
    }
}
export default SNSPages;