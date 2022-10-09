import { Box, Stack } from '@mui/system';
import React from 'react';
import { VideoCard, ChannelCard } from './';
import PlayListCard from './PlayListCard';

const Videos = ({ videos, direction }) => {
  // if(videos?.length){
  //   console.log('Something went wrong, Please wait...')
  //   return 'Loading...'
  // }

  console.log(videos, ': Videos');
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            {item.id.playlistId && <PlayListCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
