import axios from "axios"
import { Track } from "../types"

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
const authorizationCode = import.meta.env.VITE_SPOTIFY_AUTHORIZATION_CODE

export const getSpotifyAccessToken = async (): Promise<string> => {
  const credentials = btoa(`${clientId}:${clientSecret}`)
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "authorization_code",
      code: authorizationCode,
      redirect_uri: "https://marinaebbecke.dev.br",
    }),
    {
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  )
  return response.data.access_token
}

export const getCurrentPlayingTrack = async (
  accessToken: string,
): Promise<Track> => {
  const response = await axios.get(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
  return response.data
}
