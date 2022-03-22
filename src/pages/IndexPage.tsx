import { Typography,Link } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';
import DrawerSetkun from '../components/DrawerSetkun';
export default function IndexPage():React.ReactElement {
        let arraykun=[];
        for(let i=0;i<50;i++){
            arraykun.push(i)
        }
        return (
            <DrawerSetkun title="福島高校SS部情報班 " >
                <h1>Index Page</h1>
                {arraykun.map((v,i)=><>{v}<br /></>)}
            </DrawerSetkun>
        );
}