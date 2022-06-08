import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import themes from "../styles";
import Header from "../components/organisms/Header";
import Loader from "../components/atoms/Loader";
import AppContext from "../AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  const themeProps = {
    ...(theme == "light" ? themes.lightTheme : themes.darkTheme),
    ...themes.typography,
  };

  return (
    <AppContext.Provider
      value={{
        state: {
          cartItemCount: count
        },
        setCount: setCount,
      }}
    >
      <ThemeProvider theme={themeProps}>
        <themes.GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Loader />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
