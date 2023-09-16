import { useState } from 'react'
import FilterContext from './FilterContext'

const FilterProvider = ({ children }) => {

    const [filterItem, setFilterItem] = useState([]);

    const addFilterItem = (newFilter) => { 
        setFilterItem(() =>  newFilter);
    }
    
    const removeFilterItem = (filter) => {
        setFilterItem((prevFilterItem) => prevFilterItem.filter((item) => item !== filter));
    };

    return (
        <FilterContext.Provider value={{ filterItem, addFilterItem, removeFilterItem }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider
