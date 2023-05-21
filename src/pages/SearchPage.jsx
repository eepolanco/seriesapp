import { useNavigate, useParams } from "react-router-dom";
import { Table } from "../components/Table";

export const SearchPage = () => {
  const navigate = useNavigate();
  const { searchInput } = useParams();

  if (!searchInput || searchInput.length < 3) return navigate("/");

  return (
    // This page will manage all the search component
    <div className="animate__animated animate__fadeIn">
      <h1 className="m-4">Results Shows for: <b>{ searchInput }</b> </h1>
      <Table searchInput={searchInput} />
    </div>
  );
};
