import { Typography, Box, Container, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import * as React from 'react';
import DrawerSetkun from '../components/DrawerSetkun';

const ItemList: Array<React.ReactElement> = [
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image="images/1500x500.webp"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    図書館班
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    図書館班です。
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
        </CardActions>
    </Card>
];

export default function IndexPage(): React.ReactElement {
    return (
        <DrawerSetkun title="福島高校SS部情報班">
            <main>
                <Box
                    sx={{
                        bgcolor: '#d6d6d6',
                        backgroundImage: "url(\"images/1500x500.webp\")",
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
                            <Grid item xs={6}>
                                {ItemList[index]}
                            </Grid>
                        ))}
                        {/* TODO: きれいに書き換える */}
                    </Grid>
                </Container>
            </Box>
        </DrawerSetkun>);
}