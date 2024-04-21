import React, { ReactNode } from "react";
import "./MainLayout.css";
import Footer from "../components/Footer";
import LanguagePicker from "../components/LanguagePicker";

const MainLayout: React.FC<{
  headerContent: ReactNode;
  body: ReactNode;
  footerClass?: string;
}> = ({ headerContent, body, footerClass }) => {
  return (
    <div>
      <header className="Main-header">
        <h1>Team Lindy Bingo</h1>

        {headerContent}
      </header>

      {body}

      <Footer className={footerClass} />
      <LanguagePicker />
    </div>
  );
};

export default MainLayout;
