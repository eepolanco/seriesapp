import { Table } from "../components/Table";

export const HomePage = () => {
  return (
    // This page will show all the most popular shows fetching the api of https://www.episodate.com/api
    <div className="animate__animated animate__fadeIn">
        <h1 className="m-4">Most Popular Shows </h1>
        <Table />
    </div>
  )
}
