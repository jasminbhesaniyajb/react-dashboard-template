import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { addUser } from '../../../store/action';
import { useDispatch } from 'react-redux';
import { User } from 'src/types';
import { getProducts } from 'src/store/action/productAction';

const PageHeader = () => {
  const dispatch = useDispatch();
  const user: User = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg',
    email: 'john@email.com',
    mobile: '12939390330',
    gender: 'male',
    age: 24
  }

  return (
    <Grid container justifyContent="space-between" alignItems="center">
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
          onClick={()=> dispatch(addUser(user))}
        >
          Add user
        </Button>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={()=> dispatch(getProducts())}
        >
          Product list
        </Button>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
