import React from "react";
import { observer } from "mobx-react-lite";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { clientStore } from "../stores/ClientStore";

const MainPage: React.FC = observer(() => {
  return (
    <>
    <div id="main_body" className={clientStore.darkMode ? 'dark-mode' : 'light-mode'}>
    <Navbar/>
    <Table/>
    </div>
    </>
  );
});

export default MainPage;