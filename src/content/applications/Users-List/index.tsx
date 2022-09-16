import { Helmet } from 'react-helmet';
import {
  Grid,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Typography
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser } from '../../../store/action';
import '../../../styles/style.css';
import { User } from 'src/types';

const users = () => {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const user: User = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
    email: 'john@email.com',
    mobile: '12939390330',
    gender: 'male',
    age: 24
  };

  return (
    <>
      <Helmet>
        <title>Users - Applications</title>
      </Helmet>
      <Container maxWidth="lg" className="MuiPageTitle-wrapper">
        <Grid
          container
          justifyContent="space-between"
          py={3}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Users
            </Typography>
            <Typography variant="subtitle2">User List</Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={() => dispatch(addUser(user))}
              className="mr-3"
            >
              Add user
            </Button>
            {/* <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={()=> dispatch(getProducts())}
        >
          Product list
        </Button> */}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>
                    <Button variant="contained" className="mr-3">
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => dispatch(deleteUser(index))}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default users;
