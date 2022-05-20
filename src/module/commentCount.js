export const commentsCounter = async (i) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wC4fHH83VpkiJclfAEX8/comments?item_id=${i}`,
  );
  const data = await response.json();
  return data;
};
