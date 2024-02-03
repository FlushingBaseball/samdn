export default function NavBar(){

return (
  <div className="Wrapper-NavBar">
    <i id="search-icon" className="fa fa-search" aria-hidden="true"></i>
    <input
      id="navSearch"
      aria-label="Search Notes"
      type="search"
      placeholder="Search for "
     />
  </div>
)
}