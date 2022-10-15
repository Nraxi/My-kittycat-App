export const getApi = async () => {
  return await fetch('./catdata.json').then((data) =>
    data.json()
  );
};