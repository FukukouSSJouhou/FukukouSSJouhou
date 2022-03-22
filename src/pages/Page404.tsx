import { Typography,Link, Box, Container } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';
import DrawerSetkun from '../components/DrawerSetkun';
export default function Page404():React.ReactElement {
    return (
        <DrawerSetkun title="福島高校SS部情報班">
            
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
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
              404 NOT FOUND
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                お探しのページは見つかりませんでした。<br /><br /><br />
                <Link href="/" underline='hover'>トップページ {">"}</Link>
            </Typography>
          </Container>
        </Box>
        </main>
        </DrawerSetkun>
    );
}