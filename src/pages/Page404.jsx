import React from "react";
import Header from "../components/Header";
import {RevealGlobalStyles,Reveal} from 'react-genie'
class Page404 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <style>
                {`
                    .NF{
                        font-size:12vw;
                        text-align:center;
                    }
                    .PNF{
                        font-size:4vw;
                        text-align:center;
                        margin-top:6vw;
                    }
                    .NFM{
                        visibility:hidden;
                    }
                    @media screen and (max-width: 640px) {
                        .NF{
                            visibility:hidden;
                        }
                        .NFM{
                            visibility:visible;
                            font-size:18vw;
                            text-align:center;
                        }
                    }
                `}
            </style>
            <Header />
                <RevealGlobalStyles />
                <Reveal>
                <div className="NF">404 NOT FOUND!</div>
                <div className="NFM">404 <br />NOT <br /> FOUND!</div>
                <div className="PNF">お探しのページは見つかりませんでした!(^^)!</div>
                </Reveal>
            </>
        );
    }
}
export default Page404;