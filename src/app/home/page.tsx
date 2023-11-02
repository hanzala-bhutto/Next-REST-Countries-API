'use client';
import { useEffect, useState } from "react";
import { CountryCard } from "@/components";
import Link from "next/link";

export default function Home(){

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/countries')
        .then((data) =>  data.json())
        .then((data) => {
            setCountries(data.shapeData);
            console.log(data);
            console.log(countries)
        });
    },[]);

    return (
            <section className="flex flex-row flex-wrap gap-12">
                {countries.length
                ?
                countries.map((country,index) => {
                    return (
                    <Link href={`/details`} key={index}><CountryCard key={index} country={country}/></Link>
                    )
                })
                :
                <p>Loading...</p>}
            </section>

    )
}