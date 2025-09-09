import { Filters } from './Filters.jsx'
import { useFilters } from '../hooks/useFilters.jsx'

export function Header () {
    const {setFilters} = useFilters()
    return (
        <header>
            <h1>React shop</h1>
            <Filters onChange={setFilters}/>
        </header>
    )
}