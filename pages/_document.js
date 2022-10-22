import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                    <meta name="google-site-verification" content="nq64JRC3rbmnmQ7Z9q27ynNguc27bPCBHVDs7p5PvUA" />

                    <meta name='application-name' content='کافه ایران' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='کافه ایران' />
                    <meta name='description' content='کافه ایران |‌ منو دیجیتال کافه و رستوزان ' />
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
                    <meta property='og:description' content='کافه ایران |‌ منو دیجیتال کافه و رستوزان ' />
                    <meta property='og:site_name' content='cafesiran' />
                    {/* <meta property='og:url' content='https://yourdomain.com' /> */}
                    {/* <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}