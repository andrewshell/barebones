import useFetch from 'react-fetch-hook';

function App() {
  const { isLoading, data } = useFetch('/api/health');

  return isLoading ? (
    <div className="text-3xl font-bold underline">Loading...</div>
  ) : (
    <div className="text-3xl font-bold underline">
      {data.generator} {data.status}
    </div>
  );
}

export default App;
