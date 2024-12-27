import React from "react";
import { observer } from "mobx-react-lite";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const MainPage: React.FC = observer(() => {
  return (
    <>
    <Navbar/>
    <Table/>
    </>
  );
});

export default MainPage;