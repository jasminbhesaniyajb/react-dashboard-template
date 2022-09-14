import { Helmet } from 'react-helmet';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
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
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../../store/action';
import '../../../styles/style.css';

const ApplicationsTransactions = () => {
  const users = useSelector((state: any) => state.users);
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Users - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
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
                  <Button variant="contained" className='mr-3'>Edit</Button>
                  <Button variant="contained" color="error" onClick={()=> dispatch(deleteUser(index))} >
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

export default ApplicationsTransactions;
