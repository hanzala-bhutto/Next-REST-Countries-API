'use client';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    fetch('http://localhost:3000/api/countries')
    .then((data) =>  data.json()).then((data) => console.log(data));
  },[]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
