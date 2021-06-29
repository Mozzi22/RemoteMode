export const validateCreatingCard = (array) => {
  const validData = array.map(el => {
    if (!el.imageUrl || typeof el.imageUrl !== 'string') el.imageUrl = '../img/defaultPic.png';
    if (!el.description || !el.expertComment || !el.id || !el.title) return false;
    if (typeof el.description !== 'string' ||
      typeof el.expertComment !== 'string' ||
      typeof el.id !== 'string' ||
      typeof el.title !== 'string') return false;
    return el;
  }).filter(el => el !== false);
  return validData;
};