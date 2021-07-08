import { createContext } from 'react';
import { IFilter } from '../interfaces/IFilter';

const FilterContext = createContext<[IFilter]>(null!);

export default FilterContext;