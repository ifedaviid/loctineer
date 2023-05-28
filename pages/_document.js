import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Domine&display=swap"
            rel="stylesheet"
          />
        </Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `      
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "1665091083765739");
            chatbox.setAttribute("attribution", "biz_inbox");`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.fbAsyncInit = function() {
              FB.init({
                xfbml: true,
                version: 'v17.0'
              });
            };
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));`,
          }}
        />
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
