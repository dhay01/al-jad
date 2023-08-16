
import '../styles/Global.css'
import '../components/Navbar'
import Navbar from "@/src/components/Navbar";
import Layout from "@/src/Layout";
export default function App({ Component, pageProps }) {

    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>

        </>


        )


}