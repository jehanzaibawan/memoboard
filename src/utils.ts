const formatDate = (date: Date): string => {
  const months: Array<string> = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const formattedDate = `${date.getDate()}/${
    months[date.getMonth()]
  }/${date.getFullYear()}`;
  return formattedDate;
};

export { formatDate };
