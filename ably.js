// Replace with your Ably API key
const ABLY_API_KEY = "YOUR_ABLY_API_KEY_HERE";

const ably = new Ably.Realtime(ABLY_API_KEY);

function getChannelForRoom(roomCode) {
  return ably.channels.get("r6-guesser-" + roomCode);
}
