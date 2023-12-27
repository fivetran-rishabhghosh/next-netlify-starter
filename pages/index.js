import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
          <script type='text/javascript'>

           ;(function(p,l,o,w,i,n,g) {
                if(!p[i]) {
                    p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
                    p.GlobalSnowplowNamespace.push(i);p[i]=function() {
                        (p[i].q=p[i].q||[]).push(arguments)
                    }
                    ;p[i].q=p[i].q||[];
                    n=l.createElement(o);
                    g=l.getElementsByTagName(o)[0];
                    n.async=1;
                    n.src=w;
                    g.parentNode.insertBefore(n,g)
                }}(window,document,"script",'//cdn.jsdelivr.net/gh/snowplow/sp-js-assets@2.15.0/sp.js',"snowplow"));

              // Initialize a tracker
              window.snowplow('newTracker', 'cf', 'webhooks.fivetran.com/snowplow/ee56030d-cc8b-4998-b101-82ac53a36ece', {
                appId:  'test-rishabh-snowplow-netlify' ,
                cookieDomain: null,
                post: true
              });

              window.snowplow('trackPageView');


            snowplow_name_here("newTracker", "sp", "webhooks.fivetran.com/snowplow/ee56030d-cc8b-4998-b101-82ac53a36ece", {
                appId: "test-rishabh-snowplow-netlify",
                platform: "web",
                contexts: {
                    webPage: true,
                    performanceTiming: true
                }
            });

          </script>

        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
