export default function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? "✅ Success" : "❌ Offline"}</h1>;
}
