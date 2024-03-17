export async function GET() {
  const key = "ANVZOL9AHIBH5WSM";
  const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=KRW&to_currency=JPY&apikey=${key}`
  const res = await fetch(url);
  const inputData = await res.json();
  return Response.json({ inputData });
}