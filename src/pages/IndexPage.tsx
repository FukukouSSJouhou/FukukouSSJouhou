import { Typography } from '@mui/material';
import * as React from 'react';
import DrawerSetkun from '../components/DrawerSetkun';
const ToolbarChkun = () => {
    return (
        <Typography variant="h6" noWrap component="div">
            FukukouSSJouhou
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