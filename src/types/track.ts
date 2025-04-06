export type Track = {
  item: {
    album: { images: { url: string }[] }
    name: string
    artists: { name: string }[]
  }
}
