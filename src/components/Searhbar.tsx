'use client';
import { useState } from "react";

interface SearchProps {
    search: (searchItem: string) => void;

}

export const Searchbar = ({search} : SearchProps) => {

    const [searchItem, setSearchItem] = useState('');

    const handleChange = (e: { target: { value: any; }; }) => {

        const value = e.target.value;
        setSearchItem(value);
        search(searchItem);
    }

    return (
        <form className=" w-[30rem]">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-10 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input onChange={handleChange} name='searchItem' type="search" id="default-search" className="block w-full p-4 pl-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search For a Country..." />
            </div>
        </form>
    )
}