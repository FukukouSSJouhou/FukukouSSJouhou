import React from 'react';
import {Container,Row,Col,footer,Card} from 'react-bootstrap';
import {RevealGlobalStyles,Reveal} from 'react-genie'
class Midasi extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Reveal>
                <Row className="midasirow">
                    <Col >
                        <h1 className="midasikun">{this.props.children}</h1>
                        </Col>
                    </Row>
            </Reveal>
        );
    }
}
export default Midasi;