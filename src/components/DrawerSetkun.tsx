import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';

//const pages = ['Products', 'Pricing', 'Blog'];
interface PagesIF{
    name:string;
    url:string;
}
const pages:Array<Array<string>>=[
    ["home","/"],
    ["Apps","/apps.html"],
]


const drawerWidth = 240;
export interface Props {
    children?: React.ReactNode;
    id?: string;
    className?: string;
    window?: () => Window;
    title?: string;
}
export default function DrawerSetkun(props: Props): React.ReactElement {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (pagekun:string) => {
        console.log(pagekun)
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link
                            variant="h6"
                            noWrap style={{ color: "white" }}
                            href="/"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            {props.title}
                        </Link>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            a
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Link href={page[1]} style={{color:"white"}}>
                                <Button
                                    key={page[0]}
                                    onClick={() => handleCloseNavMenu(page[1])}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    
                                    {page[0]}
                                </Button>
                                    </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {props.children}
        </>
    );
}
