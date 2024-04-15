export const fetchMembers = async (offset) => {
  const response = await fetch(
    `https://api.lagtinget.ax/api/persons.json?limit=10&offset=${offset}&state=1`
  );
  const data = await response.json();
  return data;
};
