import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import "./ContentLayout.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import MainLayout from "./MainLayout";
import type { Config } from "../data/config";

const ContentLayout: React.FC = () => {
  const { t } = useTranslation();
  const { name = "" } = useLoaderData() as Config;

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
      name={name}
      headerContent={headerContent}
      body={body}
      footerClass="Content-footer"
    />
  );
};

export default ContentLayout;
