'use client';

import { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";

interface CountryDetails{
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: string[];
    languages: string[];
    borders: string[];
    flag: string;

}

export default function Details({ params }: { params: { countryName: string } }){
    
    const [country, setCountry] = useState<CountryDetails>();

    useEffect(() => {
        fetch(`${process.env.BASE_URL}/api/countries/${params.countryName}`)
        .then((data) =>  data.json())
        .then((data) => {
            console.log(data.countryDetails);
            setCountry(data.countryDetails);
            console.log(country);
        });
    },[]);

    return (
            <>
            <Link href={`/home`}>
                <button className="flex flex-row items-center gap-2 px-7 py-2 dark:text-white dark:bg-darkBlueDark mb-10 shadow-black shadow-sm">
                    <svg className="w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12M1 5l3-4M1 5l3 4"/>
                    </svg>
                    <p className="text-sm">Back</p>
                </button>
            </Link>
            <section className='flex flex-col gap-8 lg:flex lg:flex-row'>
                {country
                ?
                <>
                    <div className="w-full h-full">
                        <Image src={country.flag} width={550} height={500} alt="Country Flag"/>
                    </div>
                    <article className="w-full flex flex-col gap-8 lg:p-8">
                        <h1 className="text-xl font-bold dark:text-white">{country.name}</h1>
                        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                            <div className="">
                                <p className="font-bold dark:text-white">Native Name: <span className=" font-normal dark:text-darkGrayLight">{country.nativeName}</span></p>
                                <p className="font-bold dark:text-white">Population: <span className=" font-normal dark:text-darkGrayLight">{country.population}</span></p>
                                <p className="font-bold dark:text-white">Region: <span className=" font-normal dark:text-darkGrayLight">{country.region}</span></p>
                                <p className="font-bold dark:text-white">Sub Region: <span className=" font-normal dark:text-darkGrayLight">{country.subregion}</span></p>
                                <p className="font-bold dark:text-white">Capital: <span className=" font-normal dark:text-darkGrayLight">{country.capital}</span></p>
                            </div>
                            <div className="">
                                <p className="font-bold dark:text-white">
                                    Top Level Domain:
                                    <span className=" font-normal dark:text-darkGrayLight">
                                        {country.topLevelDomain.map((domain) => {
                                            return ` ${domain}`
                                        })}
                                    </span>
                                </p>
                                <p className="font-bold dark:text-white">
                                    Currencies: 
                                    <span className=" font-normal dark:text-darkGrayLight">
                                        {country.currencies.map((currency,index) => {
                                            return ( index+1==country.currencies.length?` ${currency}` : ` ${currency},`)
                                        })}
                                    </span>
                                </p>
                                <p className="font-bold dark:text-white">
                                    Languages:
                                    <span className=" font-normal dark:text-darkGrayLight">
                                        {country.languages.map((language,index) => {
                                            return ( index+1==country.languages.length?` ${language}` : ` ${language},`)
                                        })}
                                    </span> 
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 mb-4">
                            <p className="font-bold dark:text-white">
                                Border Countries: 
                            </p>
                            <div className="flex flex-row flex-wrap gap-2">
                                    {country.borders
                                    ?
                                    country.borders.map((border,index) => {
                                        return(
                                            <span key={index} className="flex items-center px-6 font-normal dark:text-darkGrayLight dark:bg-darkBlueDark shadow-black shadow-sm">
                                                {border}
                                            </span>
                                        )
                                    })
                                    : <p className="dark:text-white">None</p>
                                    }
                            </div>
                        </div>
                    </article>
                </>
                :
                <h1>No Details Found</h1>
                }
            </section>
            </>
    )
}