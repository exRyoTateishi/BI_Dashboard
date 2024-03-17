"use client";

import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { TableLayout } from "@/components/TableLayout";
import { useState } from "react";

export default function trade() {
  const [data, setData] = useState("　");
  async function getData() {
    const res = await fetch("/api/trade");
    const data = await res.json();
    setData(data);
    // const res = await fetch(
    //   `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=KRW&to_currency=JPY&apikey=${key}`
    // );
    // const data = await res.json();
    // setData(data);
  }

  async function getTrade() {}
  return (
    <main className="ml-64">
      {/* <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert> */}
      {/* <TableLayout></TableLayout> */}
      <button className="bg-gray-200 p-2 mb-5" onClick={getData}>
        データを取得
      </button>
      <p>{data}</p>
    </main>
  );
}
