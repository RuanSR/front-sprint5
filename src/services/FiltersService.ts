import { IFilter } from "../interfaces/IFilter";
// import { FiltersProps } from "../types/FiltersProps";

export default function FiltersService(): Promise<[IFilter]> {
    return fetch('/data/filters.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json();
      })
      .then(data => {
        return data.filters;
      })
}

