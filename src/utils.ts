function convertToLowerHyphen(name: string): string {
  return name.toLowerCase().split(" ").join("-");
}

export {
  convertToLowerHyphen
}