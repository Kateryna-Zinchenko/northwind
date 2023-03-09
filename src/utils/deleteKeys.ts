export const deleteKeys = (obj: any, array: string[]) => {
  for (let index = 0; index < array.length; index++) {
    delete obj[array[index]];
  }
  return obj;
}
