export const formatName = name => {
  const words = name.split(' ');
  const formattedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return formattedWords.join(' ');
};

export const formatNumber = number => {
  const figures = number.replace(/\D/g, '');
  return `${figures.substring(0, 3)}-${figures.substring(
    3,
    6
  )}-${figures.substring(6, 10)}`;
};
