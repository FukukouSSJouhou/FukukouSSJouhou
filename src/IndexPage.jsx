import React from 'react';
import Header from './components/Header';
import {Container,Row,Col,footer,Card} from 'react-bootstrap';
import {RevealGlobalStyles,Reveal} from 'react-genie'
import Midasi from "./components/Midasi";
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
                            <h1 id="ofkun">情報班公式サイトへ<br />ようこそ!</h1>
                        </Row>
                    </Reveal>
                </Container>
                <Container>
                    <Midasi>
                        Introduce
                    </Midasi>
                    <Reveal>
                        <Row>
                            <Col className="infokun">
                                福島高校SS部情報班は、プログラミングを主体とするクリエイティブな班です。<br/>
                                初心者、上級者も大歓迎!!
                            </Col>
                        </Row>
                    </Reveal>
                    <Midasi>
                        How to meet us?
                    </Midasi>
                    <Reveal>
                    <Row>
                        <Col className="infokun">
                         基本的にタブレットPC室で活動しています。班員に積極的に話しかけましょう!
                        </Col>
                    </Row>
                    </Reveal>
                    <Midasi>
                        活動内容
                    </Midasi>
                    <Reveal>
                    <Row>
                        <Col className="infokun">
                            アプリケーションなどを開発しています。
                        </Col>
                    </Row>
                    </Reveal>
                    <Midasi>
                        成果物
                    </Midasi>
                    <Reveal>
                    <Row>
                        <Col className="infokun">
                            アプリケーションなどを開発しています。<br />
                            近いうちリリースするかもしれません。
                        </Col>
                    </Row>
                    </Reveal>
                </Container>
                <footer className="footerkun">©2021 Fukushima High School SS Club Jouhouhan</footer>
            </>
        );
    }
}
export default IndexPage;