import { Link, NavLink } from "react-router-dom";

const MyAccountSidebar = () => {
  return (
    <aside>
      <ul className="list-none flex flex-col">
        <NavLink to="/account" end className="font-medium text-primary mb-4">
          Manage My Account
        </NavLink>
        <NavLink
          to="/account"
          end
          className={({ isActive }) =>
            `${"ml-9 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          My Profile
        </NavLink>
        <NavLink
          to="/account/address"
          end
          className={({ isActive }) =>
            `${"ml-9 my-2 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          Address Book
        </NavLink>
        <NavLink
          to="/account/payment-options"
          end
          className={({ isActive }) =>
            `${"ml-9 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          My Payment Options
        </NavLink>
        <NavLink
          to="/account/my-orders"
          end
          className={({ isActive }) =>
            `${"font-medium my-4 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          My Orders
        </NavLink>
        <NavLink
          to="/account/returns"
          end
          className={({ isActive }) =>
            `${"ml-9 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          My Returns
        </NavLink>
        <NavLink
          to="/account/cancellations"
          end
          className={({ isActive }) =>
            `${"ml-9 mt-2 mb-4 text-primary"} ${isActive && "text-secondary"}`
          }
        >
          My Cancellations
        </NavLink>
        <Link to="/wishlist" className="font-medium text-primary">
          My WishList
        </Link>
      </ul>
    </aside>
  );
};
export default MyAccountSidebar;
