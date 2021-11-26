import { useContext } from "react";
import { observer } from "mobx-react-lite";
import UserAccount from "../../../../controllers/userAccount_store";
import Authentication from "../../../../controllers/authentication_store";

function Dashboard() {
  const { user } = useContext(Authentication);
  const {} = UserAccount;

  return (
    <>
      <div className="h-full p-5">
        <p>Welcome to Dashboard</p>
        <p>{user.email}</p>
      </div>
    </>
  );
}

export default observer(Dashboard);
