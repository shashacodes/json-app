async function fetchsong() {
  const response = fetch(
    "https://raw.githubusercontent.com/shashacodes/json/master/african.json"
  );

  const data = await (await response).json();

  return data;
}

export default async function Page() {
  const data2 = await fetchsong();

  const songlist = data2.songs.map((song) => (
    <section
      key={song.id}
      className="p-5 shadow-xl hover:shadow-2xl rounded-xl shadow-blue-300 gap-2"
    >
      <h2>{song.title}</h2>
      <h2>{song.artist}</h2>
      <h2>{song.album}</h2>
      <h2>{song.genre}</h2>
      <h2>{song.duration}</h2>
      <h2>{song.description}</h2>
    </section>
  ));
  return <div className="grid grid-cols-3 gap-3">{songlist}</div>;
}
