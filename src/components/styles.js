import { makeStyles } from '@mui/styles';

// Whenever we had an arrow function and want to instantly return an object, we shall wrap the {} with ()
export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: 1,
    padding: '2em',
  },
}));
