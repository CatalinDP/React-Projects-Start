import { createContext, useState } from "react";
//useContext para estados globales pequeños.
//Para cambios de estados graves y complejos otros.

// 1. Crear el contexto, el cual es el que vamos a utilizar fuera.
// eslint-disable-next-line react-refresh/only-export-components
export const FiltersContext = createContext()


// 2. Crear el provider para proveer el contexto
export function FiltersProvider ({children}) {
    const [filters, setFilters] = useState({
            category: 'all',
            minPrice: 0
        })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}