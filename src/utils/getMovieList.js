export const getMovieList = async (URL) => {
  try {
    return await fetch(URL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  } catch (error) {
    return error;
  }
};
