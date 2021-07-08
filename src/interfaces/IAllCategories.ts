import { ICategory } from './ICategory'
import { ICurrent} from '../interfaces/ICurrent'

export interface IAllCategories{
    products?: ICategory[];
    currents?: ICurrent[];
}