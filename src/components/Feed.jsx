import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Crypto');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      console.log(data.items, ': Data');
      return setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'cloumn', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box
        p={2}
        sx={{ overflowY: 'auto', height: '90vh', flex: 2, marginLeft: '20px' }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory}
          <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
