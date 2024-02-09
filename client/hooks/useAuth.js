import { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";

export default function useAuth() {
  return useContext(UserContext);
}
