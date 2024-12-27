import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { clientStore } from "../stores/ClientStore";
import '../assets/css/mainPage.css';



const Table: React.FC = observer(() =>  {

    useEffect(() => {
        clientStore.fetchClients();
      }, []);


  return (
    <div className="table_main_container" style={{ padding: "20px" }}>
    <h1 className="main_title">Clients</h1>
    <table className="main_table" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Nationality</th>
          <th>Occupation</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {clientStore.clients.map((client, index) => (
          <tr key={index}>
            <td>{client.name}</td>
            <td>{client.nationality}</td>
            <td>{client.occupation}</td>
            <td>{client.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
})

export default Table;