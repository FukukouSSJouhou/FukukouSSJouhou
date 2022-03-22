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
export default function Page404():React.ReactElement {
    return (
        <DrawerSetkun toolbarchildren={<ToolbarChkun />} >
            <h1>404 Not Found!</h1>
        </DrawerSetkun>
    );
}