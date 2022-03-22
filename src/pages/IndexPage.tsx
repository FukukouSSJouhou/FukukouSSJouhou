import { Typography,Link } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';
import DrawerSetkun from '../components/DrawerSetkun';
const ToolbarChkun = () => {
    const navigate = useNavigate();
    const [cursor, setCursor] = React.useState('pointer');
    return (
        <Typography variant="h6" style={{ cursor: cursor }} onClick={()=>navigate("/")} onMouseEnter={()=>{setCursor("pointer")}} onMouseLeave={() => { setCursor("cursor")}} noWrap component="div">
            
            福島高校SS部情報班 
        </Typography>);
}
export default function IndexPage():React.ReactElement {
        let arraykun=[];
        for(let i=0;i<50;i++){
            arraykun.push(i)
        }
        return (
            <DrawerSetkun toolbarchildren={<ToolbarChkun />} >
                <h1>Index Page</h1>
                {arraykun.map((v,i)=><>{v}<br /></>)}
            </DrawerSetkun>
        );
}