import { Dropdown } from "flowbite-react";

interface FilterProps {
    filter: (filterItem: string) => void;

}

export const Filter = ({filter}: FilterProps) => {

    const onSelect = (item: string) => {
        filter(item);
    }

    return (
        <Dropdown class="w-48 rounded-xl border border-gray-300 bg-white dark:border-gray-600 dark:bg-darkBlueDark dark:text-white" label="Filter by Region" size="lg">
        <Dropdown.Item onClick={() => onSelect('Africa')}>Africa</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelect('America')}>America</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelect('Asia')}>Asia</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelect('Europe')}>Europe</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelect('Oceania')}>Oceania</Dropdown.Item>
        </Dropdown>   
    );
}