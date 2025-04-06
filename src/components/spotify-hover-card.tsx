import { HoverCard } from "radix-ui"
import SpotifyCardContent from "./spotify-card-content"
import SpotifyCardTrigger from "./spotify-card-trigger"

const SpotifyHoverCard = () => (
  <HoverCard.Root openDelay={300} closeDelay={300}>
    <HoverCard.Trigger className="fixed bottom-4 right-4 z-10">
      <SpotifyCardTrigger />
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content side="left" sideOffset={10} align="end">
        <SpotifyCardContent />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
)

export default SpotifyHoverCard
