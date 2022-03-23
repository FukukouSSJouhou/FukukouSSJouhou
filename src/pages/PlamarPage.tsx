import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Link, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import DrawerSetkun from '../components/DrawerSetkun';
export default function PlamarPage(): React.ReactElement {
    return (
        <DrawerSetkun title="福島高校SS部情報班">
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: '#d6d6d6',
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
                            PLAMAR
                        </Typography>
                        <Typography variant="h6" align="center" color="text.secondary" paragraph>
                            福島高校校舎の3DマップをAR表示するアプリです。
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
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            申し訳ございません。<br />
                        当ページは工事中です。<br /><br /><br />
                            <Link href="/" underline='hover'>トップページ {">"}</Link>
                        </Typography>
                </Container>
            </Box>
        </DrawerSetkun>);
}