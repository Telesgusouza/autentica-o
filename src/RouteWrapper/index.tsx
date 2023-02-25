import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import store from "../redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Data/firebase";
import { DocumentData } from "firebase/firestore";

interface IPropRouteWrapper {
  children: React.ReactNode;
  isPrivate: boolean;
}

export function RouteWrapper({
  children,
  isPrivate,
}: IPropRouteWrapper): React.ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user: DocumentData | null) => {
      if (user !== null) {
        store.dispatch({
          type: "SaveEmail",
          payload: user.email,
        });
      }

      if (user !== null) {
        store.dispatch({ type: "uidUser", payload: user.uid });
      }

      store.dispatch({
        type: "CheckLoggedIn",
        payload: user !== null,
      });

      const logged: boolean = user !== null;

      if (!logged && isPrivate) {
        return navigate("/");
      }

      if (logged && !isPrivate) {
        return navigate("/home");
      }
    });
  });

  return <>{children}</>;
}
