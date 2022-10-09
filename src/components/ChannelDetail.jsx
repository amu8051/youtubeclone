import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  console.log('Inside Channel Detail!!!');

  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      console.log(videosData, 'Channel videos!!!');

      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      console.log(data, ': Data Channel Detail!!!');

      setChannelDetail(data?.items[0]);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <>
      {/* <h5 style={{ color: 'white' }}>Channel Details</h5> */}

      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              height: '250px',
              background: '#b5aeae',
              zIndex: 10,
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
        </Box>
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: '100px' } }} />
          {videos === null ? <h1>Loading...</h1> : <Videos videos={videos} />}
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
