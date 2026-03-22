// Replace with your Ably API key
const ABLY_API_KEY = "Tc6tgg.2AaD1g:343cd6ZXTJBHgZy3mH7m0JWieoWPjRrKX18E-BF1ZBQ";

const ably = new Ably.Realtime(ABLY_API_KEY);

function getChannelForRoom(roomCode) {
  return ably.channels.get("r6-guesser-" + roomCode);
}
