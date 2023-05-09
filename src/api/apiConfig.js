const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: `91665036ffa5773bb8fe907fe0a3511f`,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
