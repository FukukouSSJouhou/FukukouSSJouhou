import { Typography, Link, Box, Container, Grid } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';
import DrawerSetkun from '../components/DrawerSetkun';
const ItemList:Array<React.ReactElement>=[
    <>
        
    </>,
    <>tintin</>
];
export default function IndexPage(): React.ReactElement {
    return (
        <DrawerSetkun title="福島高校SS部情報班">
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: '#d6d6d6',
                        backgroundImage: "url(\"images/1500x500.jpg\")",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            FukukouSSJouhou
                        </Typography>
                        <Typography variant="h6" align="center" color="text.secondary" paragraph>
                            福島高校SS部情報班
                        </Typography>
                    </Container>
                </Box>
            </main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                {ItemList[index]}
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </DrawerSetkun>);
}