import jsonData from '../../data/data.json';

export async function GET(request: Request,{ params }: { params: { countryName: string } }) {
    const data = jsonData;

    let shapeData = jsonData.filter((country) => {
        return country.name.toLowerCase() === params.countryName.toLowerCase();
    } )

    const countryDetails = {
        name: shapeData[0].name,
        nativeName: shapeData[0].nativeName,
        capital: shapeData[0].capital,
        region: shapeData[0].region,
        subregion: shapeData[0].subregion,
        population: shapeData[0].population,
        flag: shapeData[0].flag,
        topLevelDomain: shapeData[0].topLevelDomain,
        currencies: shapeData[0].currencies?.map((currency: { name: any; }) => currency.name),
        languages: shapeData[0].languages.map((language: { name: any; }) => language.name),
        borders: shapeData[0].borders
    };

    
    return Response.json({ countryDetails });
}