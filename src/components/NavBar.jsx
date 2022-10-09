import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material/';
import SearchBar from './SearchBar';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        // justifyContent: 'space-between',
        justifyContent: 'center',
      }}
    >
      {/* // Link - logo leads to homepage */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant="text"
          startIcon={<OndemandVideoIcon />}
          color="error"
          size="large"
          sx={{ fontSize: 'x-large', fontWeight: '800' }}
        >
          ODYSEE
        </Button>
      </Link>
      {/* //SearchBar */}
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
