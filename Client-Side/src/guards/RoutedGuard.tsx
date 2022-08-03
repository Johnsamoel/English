import { Navigate } from "react-router-dom";
import {isExistInLocalStorage} from "../Utils/HelperFunctions"
export const ProtectProgressRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const isStart = isExistInLocalStorage("status", "start");
  const isInFinished = isExistInLocalStorage("status", "finished");
  return isInFinished||isStart? <Navigate to="/" /> : children;
};
export const ProtectResultRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const isStart = isExistInLocalStorage("status", "inProgress");
  const isInFinished = isExistInLocalStorage("status", "start");
  return isInFinished||isStart? <Navigate to="/" /> : children;
};
