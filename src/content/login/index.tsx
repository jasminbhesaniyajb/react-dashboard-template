import { Box, Container, Card, Button, Grid, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Card sx={{ p: 4, mb: 10, borderRadius: 2 }}>
          <Box
            display="flex"
            justifyContent="center"
            py={2}
            alignItems="center"
            flexDirection="column"
            height="full"
          >
            <h3>Login</h3>
            <Grid item xs={12}>
              <TextField label="Email"></TextField>
            </Grid>
            <Grid item xs={12} my={2}>
              <TextField label="Password" type={'password'}></TextField>
            </Grid>
            <Button
              component={RouterLink}
              to="management/users-list"
              size="large"
              variant="contained"
            >
              login
            </Button>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default Login;
