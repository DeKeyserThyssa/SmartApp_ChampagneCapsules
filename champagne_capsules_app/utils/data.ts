export const get = async (url: string) => {
  return await fetch(url).then((r) => r.json())
}
