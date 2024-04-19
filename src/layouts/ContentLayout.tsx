import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import "./ContentLayout.css";
import { Link, Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

const ContentLayout: React.FC = () => {
  const { t } = useTranslation();

  const headerContent = (
    <>
      <div className="Content-actions">
        <Link to=".">{t("back")}</Link>
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
