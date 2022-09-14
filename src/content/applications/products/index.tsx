import { Helmet } from 'react-helmet';
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
  Typography
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../../store/action';
import '../../../styles/style.css';
import { getProducts } from 'src/store/action/productAction';

const products = () => {
  const products = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Products - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Products
            </Typography>
            <Typography variant="subtitle2">User List</Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={() => dispatch(getProducts())}
            >
              Product list
            </Button>
          </Grid>
        </Grid>
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
              {products.map((item, index) => (
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

export default products;
