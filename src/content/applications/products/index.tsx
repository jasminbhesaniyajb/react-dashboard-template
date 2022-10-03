import React, { useEffect, useState } from 'react';
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
import '../../../styles/style.css';
import {
  addProduct,
  getProducts,
  removeProduct,
  searchProduct
} from 'src/store/action/productAction';

const products = () => {
  const productList = useSelector((state: any) => state.products);

  const dispatch = useDispatch();
  const product = {
    name: 'i phone',
    category: 'mobile',
    price: 20000,
    color: 'red'
  };

  const removeItem = (id) => {
    dispatch(removeProduct(id));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Helmet>
        <title>Products - Applications</title>
      </Helmet>
      <Container maxWidth="lg" className="MuiPageTitle-wrapper">
        <input
          type="text"
          onChange={(e) => dispatch(searchProduct(e.target.value))
          }
          placeholder="Search"
        />
        <Grid
          container
          justifyContent="space-between"
          py={3}
          alignItems="center"
        >
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
              onClick={() => dispatch(addProduct(product))}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>category</TableCell>
                <TableCell>price</TableCell>
                <TableCell>color</TableCell>
                <TableCell>brand</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productList.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <img
                      src={item.photo}
                      className="object-fit-contain"
                      alt="img"
                      width={100}
                      height={100}
                    />
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.color}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>
                    <Button variant="contained" className="mr-3">
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => removeItem(item.id)}
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
