const getApiData = () => {
  return fetch(
    "https://rickandmortyapi.com/api/character"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
          origin: character.origin.name,
          episodes: character.episode.length, //longitud del array
        };
      });
    });
};

export default getApiData;
