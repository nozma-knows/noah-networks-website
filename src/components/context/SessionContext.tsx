import React, { useState, createContext } from "react";
import { Session } from "../../../src/__generated__/graphql";
import { useCookies } from "react-cookie";

const SessionContext = createContext({});

interface SessionContextProviderProps {
  children: JSX.Element;
}

export interface SessionContextInterface {
  session: Session | undefined;
  setSession: ((data: Session) => void) | undefined;
  cookie: any;
  setCookie: ((name: String, value: any, options?: any) => void) | undefined;
  removeCookie: ((cookie: any) => void) | undefined;
}

const SessionContextProvider = ({ children }: SessionContextProviderProps) => {
  const [session, setSession] = useState<Session>();
  const [cookie, setCookie, removeCookie] = useCookies(["session"]);
  return (
    <SessionContext.Provider
      value={{ session, setSession, cookie, setCookie, removeCookie }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionContextProvider };
