export default function Stopwatch() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        return t + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="mb-5">Time: {time}</div>;
}
