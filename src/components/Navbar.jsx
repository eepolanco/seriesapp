import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`search/${searchValue}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a className="navbar-brand m-2">MovieApp</a>
      <div className="container-fluid">
        <ul className="navbar-nav d-flex">
          <li className="nav-item me-2">
            <a className="nav-link" href="/">
              Popular Shows
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button
            className="btn btn-outline-primary"
            disabled={!searchValue || searchValue.length < 3}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
