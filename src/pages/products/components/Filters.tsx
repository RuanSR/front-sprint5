import {useState, useEffect } from 'react';
import { IFilter } from '../../../interfaces/IFilter';
import FiltersService from "../../../services/FiltersService";

const FilterItem: React.FC<IFilter> = ({label}) => {
    return (
        <li className="filters__item">
            <span className="filters__label">{label}</span>
            <img className="filters__img" src="/assets/filter.svg" alt="filtro" />
        </li>
    );
}

const Filters: React.FC = () => {
    const [filters, setFilters] = useState<[IFilter]>();

    useEffect(() => loadFilters(), []);

    function loadFilters() {
        FiltersService()
          .then((f) => {
            setFilters(f);
          })
          .catch(() => console.log("Ocorreu um erro ao carregar os produtos..."))
      }

    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                {filters?.map((f) => <FilterItem id={0} label={f.label} />)}
            </ul>
        </section>
    );
}

export default Filters;