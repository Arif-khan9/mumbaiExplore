export const revalidate = 60;

export default async function Page() {
  const res = await fetch(
    "https://nominatim.openstreetmap.org/search?q=Gateway+of+India,+Mumbai&format=jsonv2",
    {
      headers: {
        "User-Agent": "MumbaiExplorer/1.0",
      },
    }
  );

  const data = await res.json();

  console.log("data", data);

  return (
    <div>
      <h1>Place Information</h1>
      <p>Place Name: {data[0].display_name}</p>
    </div>
  );
}