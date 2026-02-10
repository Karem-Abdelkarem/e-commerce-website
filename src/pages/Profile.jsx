import { Button } from "../components/ui/button";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <section className="bg-white py-10 px-20 shadow-lg rounded-md font-poppins">
      <h1 className="text-secondary text-xl font-medium mb-4">
        Edit Your Profile
      </h1>
      <form>
        <div className="flex items-center gap-12.5">
          <div className="w-82.5">
            <label htmlFor="name">First Name</label>
            <input
              className="w-full bg-muted py-3 px-4 mt-2"
              type="text"
              id="name"
              name="name"
              placeholder={user?.firstName || "Rimel"}
            />
          </div>
          <div className="w-82.5">
            <label htmlFor="last-name">Last Name</label>
            <input
              className="w-full bg-muted py-3 px-4 mt-2"
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Rimel"
            />
          </div>
        </div>
        <div className="flex items-center gap-12.5 py-6">
          <div className="w-82.5">
            <label htmlFor="email">Email</label>
            <input
              className="w-full bg-muted py-3 px-4 mt-2"
              type="email"
              id="email"
              name="email"
              placeholder={user?.email || "user@example.com"}
            />
          </div>
          <div className="w-82.5">
            <label htmlFor="address">Address</label>
            <input
              className="w-full bg-muted py-3 px-4 mt-2"
              type="text"
              id="address"
              name="address"
              placeholder="Kingston, 5236, United State"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-177.5">
          <label htmlFor="password">Password Changes</label>
          <input
            className="w-full bg-muted py-3 px-4 mt-2"
            type="password"
            name="password"
            id="password"
            placeholder="Current Password"
          />
          <input
            className="w-full bg-muted py-3 px-4 mt-2"
            type="password"
            name="new-password"
            id="new-password"
            placeholder="New Password"
          />
          <input
            className="w-full bg-muted py-3 px-4 mt-2"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="flex items-center justify-end gap-8 mt-6">
          <button className="cursor-pointer">Cancel</button>
          <Button>Save Changes</Button>
        </div>
      </form>
    </section>
  );
};
export default Profile;
