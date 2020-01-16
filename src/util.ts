export function valToStr(data:string|object):string {
  if (typeof data === 'object') {
    try {
      return JSON.stringify(data);
    } catch (error) {
      throw new Error(error);
    }
  }
  return data;
}

export function strToObj(data:string|null|undefined) {
  try {
    return JSON.parse(data as string);
  } catch (error) {
    return data === undefined ? null : data;
  }
}
