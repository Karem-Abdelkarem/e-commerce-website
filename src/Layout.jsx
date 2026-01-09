import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import TopHeader from "./components/layout/TopHeader";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = t("dir");
    document.documentElement.lang = i18n.language;
  }, [i18n.language, t]);

  return (
    <>
      <TopHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
