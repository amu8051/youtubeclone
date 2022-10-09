import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { demoProfilePicture } from '../utils/constants';
import { Link } from 'react-router-dom';

const PlayListCard = ({ channelDetail }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.medium?.url ||
            demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            // borderRadius: '50px',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '1px solid #3e3e3e',
          }}
        />
        <Typography variant="h6">
          PlayList: {channelDetail?.snippet?.title.substring(0, 6)}...
        </Typography>
      </CardContent>
    </Box>
  );
};

export default PlayListCard;
