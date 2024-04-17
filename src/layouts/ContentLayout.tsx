import React from "react";
import "./ContentLayout.css";
import { Link, Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";
import query from "../lib/query";

const ContentLayout: React.FC = () => {
  const headerContent = (
    <>
      <div className="Content-actions">
        <Link to={`/bingo-frontend${query()}`}>Back</Link>
      </div>
    </>
  );

  const body = <Outlet />;

  return (
    <MainLayout
      headerContent={headerContent}
      body={body}
      footerClass="Content-footer"
    />
  );
};

export default ContentLayout;
