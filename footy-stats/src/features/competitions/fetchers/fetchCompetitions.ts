const fetchCompetitions = async () => {
  const apiUrl = "/data/competitions.json";
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Error in fetching competitions list ${apiUrl}`);
  }

  return response.json();
};

export default fetchCompetitions;
