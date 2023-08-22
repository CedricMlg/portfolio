import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  window.onload = function () {
    window.history.scrollRestoration = "manual";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
