import { Typography,Link } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';
import DrawerSetkun from '../components/DrawerSetkun';
export default function Page404():React.ReactElement {
    return (
        <DrawerSetkun title="福島高校SS部情報班">
            <h1>404 Not Found!</h1>
        </DrawerSetkun>
    );
}