export default function Searchbar({filterText,  onFilterTextChange}:{filterText:string, onFilterTextChange:Function}){
return(
    <form>
        <input type="text"
        value={filterText}
        placeholder="Suche..."
        onChange={(e) => onFilterTextChange(e.target.value)} />

    </form>



)

}