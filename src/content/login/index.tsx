import { Box, Container, Card, Button, FormControl, InputLabel, Input,Grid,TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
      <Container maxWidth="sm">
        <Card sx={{ p: 4, mb: 10, borderRadius: 2 }}>
          <Box
            display="flex"
            justifyContent="center"
            py={2}
            alignItems="center"
            flexDirection="column"
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
            to="/dashboards/crypto"
            size="large"
            variant="contained"
          >
            login
          </Button>
          </Box>
         
        </Card>
      </Container>
  );
}

export default Overview;
