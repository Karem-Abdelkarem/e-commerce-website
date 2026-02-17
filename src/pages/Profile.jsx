import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <section className="w-full bg-white py-10 px-5 md:px-20 shadow-lg rounded-md font-poppins">
      <h1 className="text-secondary text-xl font-medium mb-4">
        {t("myAccount.Edit Your Profile")}
      </h1>
      <form>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12.5">
          <div className="w-full md:w-82.5">
            <label htmlFor="name">{t("myAccount.Name")}</label>
            <input
              className="w-full bg-muted py-3 px-4 mt-2"
              type="text"
              id="name"
              name="name"
              defaultValue={user?.firstName || "john"}
            />
          </div>
          <div className="w-full md:w-82.5">
            <label htmlFor="last-name">{t("myAccount.Last Name")}</label>
            <input
              className="w-full bg-muted py-3 px-4 mt-2"
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Rimel"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12.5 py-6">
          <div className="w-full md:w-82.5">
            <label htmlFor="email">{t("myAccount.Email")}</label>
            <input
              className="w-full bg-muted py-3 px-4 mt-2"
              type="email"
              id="email"
              name="email"
              defaultValue={user?.email || "user@example.com"}
            />
          </div>
          <div className="w-full md:w-82.5">
            <label htmlFor="address">{t("myAccount.Address")}</label>
            <input
              className="w-full bg-muted py-3 px-4 mt-2"
              type="text"
              id="address"
              name="address"
              placeholder="Kingston, 5236, United State"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-177.5">
          <label htmlFor="password">{t("myAccount.Password Changes")}</label>
          <input
            className="w-full bg-muted py-3 px-4 mt-2"
            type="password"
            name="password"
            id="password"
            placeholder={t("myAccount.Current Password")}
          />
          <input
            className="w-full bg-muted py-3 px-4 mt-2"
            type="password"
            name="new-password"
            id="new-password"
            placeholder={t("myAccount.New Password")}
          />
          <input
            className="w-full bg-muted py-3 px-4 mt-2"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder={t("myAccount.Confirm New Password")}
          />
        </div>
        <div className="flex items-center justify-end gap-8 mt-6">
          <button className="cursor-pointer">{t("myAccount.Cancel")}</button>
          <Button>{t("myAccount.Save Changes")}</Button>
        </div>
      </form>
    </section>
  );
};
export default Profile;
