import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import MyAccountSidebar from "../components/ui/my-account/MyAccountSidebar";
import { useAuth } from "../context/AuthContext";

const MyAcount = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <main className="max-w-292.5 mx-auto pt-20 pb-35 px-3 font-poppins">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-3 w-fit text-sm">
          <Link to="/" className="text-muted-foreground">
            {t("home")}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary">{t("account")}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-primary">{t("myAccount.welcome")}</span>
          <span className="text-sm text-secondary">
            {user?.firstName || ""}
          </span>
        </div>
      </div>

      <div className="flex items-start gap-25 mt-20">
        <MyAccountSidebar />
        <Outlet />
      </div>
    </main>
  );
};
export default MyAcount;
