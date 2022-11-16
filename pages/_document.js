import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='fa'>
            <Head>

                <link rel="shortcut icon" href="/logo_dark.ico" />

                <meta name='application-name' content='کافه ایران' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='کافه ایران' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-TileColor' content='#fdfdfd' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#2E2F2A' />


                <link rel='icon' type='image/png' sizes='32x32' href='/logo_dark.svg' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/assets/icons/icon-512x512.png' color='#2E2F2A' />
                <link rel='shortcut icon' href='/favicon.ico' />

                <meta property='og:type' content='website' />
                <meta property='og:title' content='کافه ایران' />
                <meta property='og:description' content='کافه ایران |‌ منو دیجیتال کافه و رستوران ' />
                <meta property='og:site_name' content='cafesiran' />
                <meta property='og:url' content='https://cafesiran.ir/' />
                {/* <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' /> */}

                {/*! APPLE TOUCH */}
                <link rel="apple-touch-icon" sizes="48x48" href="/assets/icons/icon-48x48.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="96x96" href="/assets/icons/icon-96x96.png" />
                <link rel="apple-touch-icon" sizes="128x128" href="/assets/icons/icon-128x128.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="/assets/icons/icon-192x192.png" />
                <link rel="apple-touch-icon" sizes="384x384" href="/assets/icons/icon-384x384.png" />
                <link rel="apple-touch-icon" sizes="512x512" href="/assets/icons/icon-512x512.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}