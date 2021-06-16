const getApiData = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          status: character.status,
          image: character.image,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });
    });
};

export default getApiData;
