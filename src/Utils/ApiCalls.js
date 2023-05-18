
const getOptions = {
    method: 'GET',
    headers: {
        'Header': 'example header'
    }
};

export const getAllClassic = async () => {
    const response = await fetch('https://example.com', getOptions)
        .then(response => response.json())
        .catch(err => console.error(err));
    return response;
  }