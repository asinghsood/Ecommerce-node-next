import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import themes from "../styles";
import Header from "../components/organisms/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  const themeProps = {
    ...(theme == "light" ? themes.lightTheme : themes.darkTheme),
    ...(themes.typography),
  }

  return (
    <ThemeProvider
      theme={themeProps}
    >
      <themes.GlobalStyles />
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
