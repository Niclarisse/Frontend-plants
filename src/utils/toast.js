import { toast } from "react-hot-toast";

export const handleAuthError = (error) => {
  if (error?.response?.status === 401) {
    localStorage.clear();
    window.location = "/redirect=" + window.location.pathname.replace("/", "");
  }
};

export const toastMessage = (type, message) => {
  if (type === "info") {
    toast(message);
  }
  if (type === "error") {
    toast.error(message);
  }
  if (type === "success") {
    toast.success(message, { duration: 4000 });
  }
};

export const errorHandler = (error) => {
  if (error?.response?.data?.error) {
    toastMessage("error", error.response.data.error);
  } else {
    toastMessage("error", error.message);
  }
  handleAuthError(error);
};
