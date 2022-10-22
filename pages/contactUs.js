import Head from "next/head";
import ContactUsPage from "../components/public/ContactUsPage";
import Layout from "../components/public/layout";




const ContactUs = () => {
    return (
        <>
            <Head>
                <title> منو دیجیتال | menu Digital | تماس با ما </title>
            </Head>
            <Layout>
                <ContactUsPage />
            </Layout>
        </>
    );
}

export default ContactUs;