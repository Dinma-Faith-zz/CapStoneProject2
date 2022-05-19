//  Create Likes
export const createLike = async (i, like) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qwFEh0Dwu7LrqmgqtV9u/likes', {
    method: 'POST',
    body: JSON.stringify(like),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.text();
};

// Get Likes
export const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qwFEh0Dwu7LrqmgqtV9u/likes',
  );
  return response.json();
};
