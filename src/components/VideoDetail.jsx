import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { Videos, Loader } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState('');
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });
    // related videos to show in side column
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) {
    return <h1>Loading....</h1>;
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  console.log(channelId, channelTitle, 'Channel!!!');
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box
            sx={{ width: '90%', position: 'sticky', top: '70px', ml: '50px' }}
          >
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              // sx={{ width: '60vh', height: '70vh' }}
            />
            <Typography color="#fff" variant="h6" fontWeight="bold" p={1}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff', mb: '30px' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h5' }}
                  color="#fff"
                  sx={{ fontFamily: 'sans-serif' }}
                >
                  {channelTitle}
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="20px"
                alignItems="center"
                paddingBottom="20px"
              >
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, fontFamily: 'sans-serif' }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* Right side bar of related videos */}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
