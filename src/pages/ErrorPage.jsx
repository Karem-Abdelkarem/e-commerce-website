import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-292.5 mx-auto pt-20 px-3 pb-35">
      <div className="flex items-center justify-between gap-3 w-fit text-sm mb-20">
        <Link to="/" className="text-muted-foreground">
          {t("home")}
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-primary">404 Error</span>
      </div>
      <div className="flex flex-col items-center justify-center mt-35">
        <h1 className="font-inter font-medium text-[110px]">404 Not Found</h1>
        <p className="font-poppins mt-10 mb-20">
          Your visited page not found. You may go home page.
        </p>
        <Link to={"/"}>
          <Button className="font-poppins">Back to home page</Button>
        </Link>
      </div>
    </section>
  );
};
export default ErrorPage;
