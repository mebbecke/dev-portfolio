import { Music } from "lucide-react"
import GradientBox from "./gradient-box"

const SpotifyCardTrigger = () => {
  return (
    <GradientBox className="flex cursor-pointer p-4">
      <Music className="text-darkPurple dark:text-lightGray" />
    </GradientBox>
  )
}

export default SpotifyCardTrigger
