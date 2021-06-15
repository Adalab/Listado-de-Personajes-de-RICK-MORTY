const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.results.map((user) => {
        return {
          name: user.name,
          id: user.id,
          species: user.species,
          image: user.image,
        };
      });
    });
};

export default getDataFromApi;
