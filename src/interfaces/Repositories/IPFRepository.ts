import { IProduct } from '../IProduct'
import { IFilter} from '../IFilter';

export interface IPFRepository{
    products?: IProduct[];
    filters?: IFilter[];
}