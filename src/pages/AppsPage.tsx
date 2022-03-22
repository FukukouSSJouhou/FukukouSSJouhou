import { Box, Button, Container, Stack, Typography } from "@mui/material";
import * as React from "react";
import DrawerSetkun from '../components/DrawerSetkun';
export default function AppsPage(): React.ReactElement {
    return (
        <DrawerSetkun title="福島高校SS部情報班">
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            backgroundImage:"url(\"images/1500x500.jpg\")",
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
        
        </DrawerSetkun>
    );
}