import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Link, Stack, Typography } from "@mui/material";
import * as React from "react";
import DrawerSetkun from '../components/DrawerSetkun';
export default function PlamarPage():React.ReactElement{
    return (
        <DrawerSetkun title="福島高校SS部情報班">
          <main>
            {/* Hero unit */}
            <Box
              sx={{
                bgcolor: 'background.paper',
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
                  Applications
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  班で作ったアプリケーションです。<br />
                  下に一覧があります。
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
              <Card sx={{ maxWidth: 500 }} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/images/plamar.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      PLAMAR
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      福島高校校舎の3DマップをAR表示したりするアプリです。
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link underline="none" target="_blank" rel="noopener noreferrer" href="https://market.android.com/details?id=com.PLAMAR2">
                  <Button size="small" color="primary">
                    PLAY STORE
                  </Button>
                  </Link>
                </CardActions>
              </Card>
            </Container>
          </Box>
        </DrawerSetkun>);
}