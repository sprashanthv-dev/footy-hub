// TODO: Fetch competition data based on competition id
const fetchCompetitionHistory = async () => {
  const apiUrl = "/data/competition_by_league_code.json";
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Error in fetching competition history ${apiUrl}`);
  }

  return response.json();
};

export default fetchCompetitionHistory;
