const getApiData = () => {
  return fetch("https://rickandmortyapi.com/documentation/#get-all-characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((user) => {
        return {
          id: user.id,
          name: user.name,
          species: user.species,
          image: user.image,
          status: user.status,
          image: user.picture.large,
          episodes: user.info.count,
        };
      });
      return cleanData;
    });
};

export default getApiData;
