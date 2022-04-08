export const convertToDateFormater = (PostData: Date): string => {
  const currentDate = new Date(PostData);
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const hour = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hour}:${minutes}`;
};
