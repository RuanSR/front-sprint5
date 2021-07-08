import React, { useContext } from "react";
import {BreadcrumbItemInfo} from '../../../types/BreadcrumbItemInfo';
import CategoriesContext from "../../../contexts/CategoriesContext";


const BreadcrumbItem: React.FC<BreadcrumbItemInfo> = ({ link, label }) => {
    return (
        <li className="breadcrumbs__item">
            { link ?
                <>
                    <a className="breadcrumbs__link" href={link}>{label}</a>
                    <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
                </>
                :
                <span className="breadcrumbs__link">{label}</span>
            }
        </li>
    );
}

const Breadcrumbs: React.FC = () => {
    const categoriesContext = useContext(CategoriesContext);

    return (
        <section className="main__breadcrumbs breadcrumbs">
            <nav>
                <ol className="breadcrumbs__list">
                    {categoriesContext.products && categoriesContext.currents?.map(c => <BreadcrumbItem link={c.link} label={c.name} />)}
                </ol>
            </nav>
        </section>
    )
}

export default Breadcrumbs;