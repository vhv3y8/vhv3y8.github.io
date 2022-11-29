export function convertToLowerHyphen(name: string): string {
  return name.toLowerCase().split(" ").join("-");
}