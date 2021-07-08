import { createContext } from 'react';
import {IAllCategories} from '../interfaces/IAllCategories'

const CategoriesContext = createContext<IAllCategories>(null!);

export default CategoriesContext;