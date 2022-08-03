import { toast } from "react-toastify";

export const isExistInLocalStorage = (property: string, value: string) => {
  return localStorage.getItem(property) === value ? true : false;
};

export const toastError = (message: string) => {
  toast.error(message);
};
export const toastSuccess = (message: string) => {
  toast.success(message);
};
export const  toastWarn = (message: string) => {
  toast.warn(message);
};
