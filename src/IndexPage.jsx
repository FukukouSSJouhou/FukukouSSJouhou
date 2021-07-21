import React from 'react';
import Header from './components/Header';
import {Container,Row,Col,footer} from 'react-bootstrap';
import {RevealGlobalStyles} from 'react-genie'
class IndexPage extends React.Component {
    render() {
        return (
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
                    .midasikun{
                        font-size:4.9vw;
                    }
                    body{
                        background-color:#f0f2f5;                   
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
                    `
                }
            </style>
                <Header />
                <RevealGlobalStyles />
                <Container fluid className="headercont">
                    <h1 id="header_center">福島高校SS部情報班</h1>
                </Container>
                <Container>
                    <Row>
                        
                        <Col>
                        <div className="midasikun">Introduce</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="infokun">
                         <h2>福島高校SS部情報班は、プログラミングを主体とするクリエイティブな班です。</h2>
                         <h2>初心者、上級者も大歓迎!!</h2>
                        </Col>
                    </Row>
                    <Row>
                        
                        <Col>
                        <div className="midasikun">How to meet us?</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="infokun">
                         <h2>基本的にタブレットPC室で活動しています。班員に積極的に話しかけましょう!</h2>
                        </Col>
                    </Row>
                </Container>
                <footer className="footerkun">©2021 Fukushima High School SS Club Jouhouhan</footer>
            </>
        );
    }
}
export default IndexPage;