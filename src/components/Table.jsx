import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { searchEpisodes, getPopularShows } from '../services/movie.service';

export const Table = ({ searchInput }) => {
  const navigate = useNavigate();
  const [episodes, setEpisodes] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    if (searchInput) {
      fetchSearchEpisodes();
    } else {
      fetchPopularShows();
    }
  }, [pageNumber, searchInput]);

  const fetchSearchEpisodes = async () => {
    const { tv_shows, total } = await searchEpisodes(searchInput, pageNumber);
    setEpisodes(tv_shows);
    setTotalRecords(parseInt(total));
  };

  const fetchPopularShows = async () => {
    const { tv_shows, total } = await getPopularShows(pageNumber);
    setEpisodes(tv_shows);
    setTotalRecords(parseInt(total));
  };

  const onPageChange = (event) => {
    setPageNumber(event.page + 1);
  };

  const onViewDetails = (idSerie) => {
    navigate(`/details/${idSerie}`);
  };


  return (
    <div className="card m-4 animate__animated animate__fadeIn">
      <DataTable value={episodes} tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name" style={{ width: '25%' }}></Column>
        <Column field="country" header="Country" style={{ width: '25%' }}></Column>
        <Column field="network" header="Network" style={{ width: '25%' }}></Column>
        <Column field="status" header="Status" style={{ width: '25%' }}></Column>
        <Column 
           body={(rowData) => (
            <button className="btn btn-primary" onClick={() => onViewDetails(rowData.id)}>
              <FontAwesomeIcon icon={faEye} />
            </button>
          )}>
        </Column>
      </DataTable>

      <Paginator
        first={pageNumber * rowsPerPage - rowsPerPage}
        rows={rowsPerPage}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
      />
    </div>
  );
};
