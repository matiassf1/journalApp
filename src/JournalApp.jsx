import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
        <ToastContainer position="top-center" />
      </AppTheme>
    </>
  );
};
