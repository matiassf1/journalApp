import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Google from '@mui/icons-material/Google';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email:'random@gmail.com',
    password: '12345'
  })

  const isAuthenticating = useMemo( () => status === 'checking', [status] )

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( checkingAuthentication(email, password) )
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() )
  }

  return (
    <AuthLayout title='Login'>
      
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name='email'
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='Password'
              fullWidth
              name='password'
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 , mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth type='submit' disabled={ isAuthenticating } >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth onClick={ onGoogleSignIn } disabled={ isAuthenticating } >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Create Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
