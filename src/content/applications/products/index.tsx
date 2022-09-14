import React, { useEffect } from 'react';
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
import { addProducts, getProducts } from 'src/store/action/productAction';

const products = () => {
  const products = useSelector((state: any) => state.products);
  console.log('product', products);
  const dispatch = useDispatch();
  const product = {
    name: 'i phone',
    category: 'mobile',
    price: 20000,
    color: 'red'
  };

  const showProduct = async () => {
    dispatch(await getProducts())
  }

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
              onClick={() => dispatch(addProducts(product))}
            >
              Product list
            </Button>
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={<AddTwoToneIcon fontSize="small" />}
            //   onClick={() => dispatch(getProducts())}
            onClick={showProduct}
            >
              show product list
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
                <TableCell>category</TableCell>
                <TableCell>price</TableCell>
                <TableCell>color</TableCell>
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
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.color}</TableCell>
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
