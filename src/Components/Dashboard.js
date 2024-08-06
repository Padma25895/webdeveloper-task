import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chart from "./Chart";
import OrderSection from "./OrderSection";
import FirstSection from "./FirstSection";

const Dashboard = () => {
  return (
    <div class="container-scroller">
      <Sidebar />
      <div class="container-fluid page-body-wrapper">
        <Header />
        <div className="main-panel">
          <div className="content-wrapper">
            <FirstSection />
            <Chart />
            <OrderSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
