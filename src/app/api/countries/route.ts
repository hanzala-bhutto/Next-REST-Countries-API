import jsonData from '../data/data.json';

export async function GET() {
    const data = jsonData;

    const shapeData = jsonData.map(country => {
        return {
            name: country.name,
            population: country.population,
            region: country.region,
            capital: country.capital,
            flagImg: country.flags.svg
        }
    } )


    return Response.json({ shapeData });
}