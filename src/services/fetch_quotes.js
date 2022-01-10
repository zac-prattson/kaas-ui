async function getQuotes() {
  const raw = await fetch(
    "https://1f2lujmt01.execute-api.us-east-1.amazonaws.com/dev",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: await raw.json() };
}

export { getQuotes };
