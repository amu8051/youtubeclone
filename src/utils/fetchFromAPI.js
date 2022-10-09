import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  // method: 'GET',
  // url: BASE_URL,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50',
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.API_KEY_YOUTUBE_CLONE,
    'X-RapidAPI-Key': '15a7a56c20mshfbd56df7f9a7658p1c0a13jsn64e0e627e939',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  // console.log(response.data, ':Response Data')
  const { data } = response;
  return data;
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
