import Document, {
  Head,
  Main,
  NextScript,
  Html,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface DocumentProps {
  styleTags: React.ReactElement<{}, string | React.JSXElementConstructor<any>>[]
}

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = await renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <Html lang="en">
        <Head>{styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
