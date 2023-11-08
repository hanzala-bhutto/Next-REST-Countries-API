'use client';
import { useEffect, useState } from "react";
import { CountryCard } from "@/components";
import Link from "next/link";
import { Searchbar } from "@/components/Searhbar";
import { Filter } from "@/components/Filter";

interface Country { 
    name: string;
    population: number;
    region: string;
    capital: string;
    flagImg: string;
}

export default function Home(){

    const [countries, setCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    
    useEffect(() => {
        fetch(`${process.env.BASE_URL}/api/countries`)
        .then((data) =>  data.json())
        .then((data) => {
            setCountries(data.shapeData);
            setFilteredCountries(data.shapeData);

            console.log(data);
            console.log(countries)
        });
    },[]);

    const search = (searchItem: string) => {
        if (searchItem === ''){
            setFilteredCountries(countries);
            return;
        }
        const filteredCountries = countries.filter((country: Country) => {
            return country?.name.toLowerCase().includes(searchItem.toLowerCase());
        });
        setFilteredCountries(filteredCountries);
    }

    const filter = (filterItem: string) => {
        if (filterItem === ''){
            setFilteredCountries(countries);
            return;
        }
        const filteredCountries = countries.filter((country: Country) => {
            return country?.region.toLowerCase().includes(filterItem.toLowerCase());
        });
        setFilteredCountries(filteredCountries);
    }

    return (
        <>
            <section className="flex flex-row flex-wrap gap-8 justify-between mb-10">
                <Searchbar search={search}/>
                <Filter filter={filter}/>
            </section>
            <section className="flex flex-row justify-center md:justify-between flex-wrap gap-[2rem] mb-12">
                {filteredCountries.length
                ?
                filteredCountries.map((country,index) => {
                    return (
                    <Link href={`/details/${country.name}`} key={index}><CountryCard key={index} country={country}/></Link>
                    )
                })
                :
                <p className="dark:text-white">No Countries to show!</p>
                }
            </section>
        </>
    )
}