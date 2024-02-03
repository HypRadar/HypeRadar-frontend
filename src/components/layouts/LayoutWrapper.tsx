import React from "react";
import { Outlet } from "react-router-dom";
import DashboardLayout from "../../components/layouts/Dashboard";

function LayoutWrapper() {
  return (
    <DashboardLayout screen={true}>
      <div className="flex w-full justify-center">
        <div className="lg:max-w-7xl w-full py-8 justify-center">
          <Outlet />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default LayoutWrapper;
