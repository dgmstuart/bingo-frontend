import React, { ReactNode } from "react";
import "./MainLayout.css";
import Footer from "../components/Footer";
import LanguagePicker from "../components/LanguagePicker";

const MainLayout: React.FC<{
  name: string;
  headerContent: ReactNode;
  body: ReactNode;
  footerClass?: string;
}> = ({ name, headerContent, body, footerClass }) => {
  return (
    <div>
      <section className="Card">
        <div className="noise-overlay"></div>
        <header className="Main-header">
          <h1>
            {name}
            <em className="bingo">
              <span>B</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
              <span>O</span>
            </em>
          </h1>

          {headerContent}
        </header>

        {body}
      </section>
      <Footer className={footerClass} />
      <LanguagePicker />
    </div>
  );
};

export default MainLayout;
