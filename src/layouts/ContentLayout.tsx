import React from "react";
import "./ContentLayout.css";
import { Link, Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

const ContentLayout: React.FC<{ pageTitle: string }> = ({ pageTitle }) => {
  const headerContent = (
    <>
      <h2 className="Content-header">{pageTitle}</h2>
      <div className="Content-actions">
        <Link to="/bingo-frontend">Back</Link>
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
