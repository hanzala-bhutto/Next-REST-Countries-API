import Image from 'next/image';

export const CountryCard = ({country}) => {
    return (
        <div className="w-72 bg-white border border-gray-200 cursor-pointer rounded-lg shadow dark:bg-darkBlueDark dark:border-gray-700">
            <div className="h-48 w-full rounded-se-lg bg-primary-500">
               <Image className='h-full w-full object-contain min-h-0' src={country.flagImg} alt="flag" width={300} height={200}/>
            </div>
            <div className="flex flex-col gap-3 pt-4 pb-8 pl-6 dark:text-white">
                <h1 className="text-xl">{country?country.name:'Name'}</h1>
                <div>
                    <p>Population: {country?country.population:'population'}</p>
                    <p>Region: {country?country.region:'region'}</p>
                    <p>Capital: {country?country.capital:'capital'}</p>
                </div>
            </div>

        </div>
    );
}