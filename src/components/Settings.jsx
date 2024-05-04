import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";

export default function Settings() {
  const { getSession } = useContext(AccountContext);

  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedin(true);
    });
  }, []);

  return (
    <div>
      {loggedin && (
        <>
          <ChangePassword />
        </>
      )}
    </div>
  );
}
