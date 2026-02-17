import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const MyAccountSidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="hidden md:block">
      <ul className="list-none flex flex-col">
        <NavLink to="/account" end className="font-medium text-primary mb-4">
          {t("myAccount.Manage My Account")}
        </NavLink>
        <NavLink
          to="/account"
          end
          className={({ isActive }) =>
            `${"ms-9 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          {t("myAccount.My Profile")}
        </NavLink>
        <NavLink
          to="/account/address"
          end
          className={({ isActive }) =>
            `${"ms-9 my-2 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          {t("myAccount.Address Book")}
        </NavLink>
        <NavLink
          to="/account/payment-options"
          end
          className={({ isActive }) =>
            `${"ms-9 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          {t("myAccount.My Payment Options")}
        </NavLink>
        <NavLink
          to="/account/my-orders"
          end
          className={({ isActive }) =>
            `${"font-medium my-4 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          {t("myAccount.My Orders")}
        </NavLink>
        <NavLink
          to="/account/returns"
          end
          className={({ isActive }) =>
            `${"ms-9 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          {t("myAccount.My Returns")}
        </NavLink>
        <NavLink
          to="/account/cancellations"
          end
          className={({ isActive }) =>
            `${"ms-9 mt-2 mb-4 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          {t("myAccount.My Cancellations")}
        </NavLink>
        <Link to="/wishlist" className="font-medium text-primary">
          {t("myAccount.My WishList")}
        </Link>
      </ul>
    </aside>
  );
};
export default MyAccountSidebar;
