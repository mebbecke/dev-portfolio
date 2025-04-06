import { useEffect, useState } from "react"
import { Track } from "../types"
import GradientBox from "./gradient-box"
import GradientSubtitle from "./gradient-subtitle"

const mockTrack: Track = {
  item: {
    album: {
      images: [
        {
          url: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2019/01/07/capas-de-discos-ciencia-int01-pinkfloyd.jpg",
        },
      ],
    },
    artists: [
      {
        name: "Pink Floyd",
      },
    ],
    name: "The Dark Side of the Moon",
  },
}

const SpotifyCardContent = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)

  useEffect(() => {
    setCurrentTrack(mockTrack)
  }, [])

  return (
    // <GradientBox className="fixed bottom-4 right-4 z-10 flex cursor-default flex-col gap-2 px-4 py-2 text-darkPurple dark:text-gray-300">
    <GradientBox className="z-10 flex cursor-default flex-col gap-2 px-4 py-2 text-darkPurple dark:text-gray-300">
      {/* <h1 className="text-lg font-semibold">Ouvindo agora</h1> */}
      <GradientSubtitle>Ouvindo agora</GradientSubtitle>

      {currentTrack ? (
        <div className="flex cursor-pointer flex-row items-center gap-2">
          <img
            src={currentTrack.item.album.images[0].url}
            alt="Capa do álbum"
            width={60}
            height={60}
          />

          <div className="flex flex-col">
            <h2 className="text-base font-medium">{currentTrack.item.name}</h2>
            <p className="text-sm">{currentTrack.item.artists[0].name}</p>
          </div>
        </div>
      ) : (
        <p>Nenhuma música tocando no momento</p>
      )}
    </GradientBox>
  )
}

export default SpotifyCardContent
