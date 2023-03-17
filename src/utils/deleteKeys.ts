export const deleteKeys = (obj: any, array: string[]) => {
  for (let index = 0; index < array.length; index++) {
    delete obj[array[index]];
  }
  return obj;
}

export const date = (value: string) => {
  const tempDate = new Date(value);
  const year = tempDate.getFullYear();
  const month = ('0' + (tempDate.getMonth() + 1)).slice(-2);
  const day = ('0' + (tempDate.getDate())).slice(-2);
  const resultDate = `${year}-${month}-${day}`;
  return resultDate;
}

export const price = (value: string) => {
  if (value.includes('.')) {
    return `$${value}0`
  } else return `$${value}.00`
}

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
