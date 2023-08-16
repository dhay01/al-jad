import Head from "next/head";
// import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlide from "../components/Swiper"
import { register } from "swiper/element/bundle";
register();
export default function Home() {
    return (
        <>
            <Head>
                <title>AL-JAD  &#8211; integrated solutions & Electronic services Co. ltd.</title>
            </Head>
            <main>

                <swiper-container
                    className="mySwiper h-80 bg-blue overflow-hidden"
                    pagination="true"
                    pagination-clickable="true"
                    navigation="true"
                    space-between="30"
                    centered-slides="true"
                    autoplay-delay="3500"
                    autoplay-disable-on-interaction="false"
                    loop="true"
                >
                    <SwiperSlide src={"/sontek-slide-low-dim-1-900x290.jpg"} />
                    <SwiperSlide src={"/sontek-slide-low-dim-1-900x290.jpg"} />

                </swiper-container>


                <section className="bg-section text-black leading-10 p-5 md:flex-row flex-col flex gap-5">
                    <div className=" md:w-9/12">
                        <p>
                            With Great honor and pride, we present our company’s profile,
                            activities, field of applications and experiences which highlights
                            30 years of Our Company Owner’s remarkable achievements, AL Fakhar
                            Co. have been established on 2003 based on the High Potential
                            Market Demands for ( Engineering Solutions ) serving any division
                            of Economic Society ,
                        </p>
                        <p>
                            AL Fakhar Co. is private sector company registered by Iraqi law,
                            and based on Baghdad IRAQ.
                        </p>
                        <p>
                            Field of activity, include Environmental monitoring solutions for
                            ( Water, Air, Soil, Radiation ), and Water Resources monitoring.
                        </p>
                        <p>
                            we represent many global companies in Iraq Xylem YSI, and Envinet.
                            and we distribute their products.
                        </p>
                        <p>
                            Clientele includes official governmental sectors like Ministry of
                            Environment and Ministry of water resources.
                        </p>
                        <p>
                            Our greatest assets are the wide and distinguished experience that
                            our staff possess, the high confidence generated from many
                            projects we Successfully turned their keys, supported by many (
                            fruitful, long-term partnerships ) signed with the most high
                            reputed International ( Brands, manufacturers, and System
                            developers ) all over the world.
                        </p>
                        <p>
                            Our greatest concern is the effective contribution in the process
                            of development, reconstruction and rehabilitation of Iraq, our
                            History of Achievement , performance and dedication granted us a
                            trusted Position as the most welcomed partner Serving any Iraqi
                            Client.
                        </p>
                        <p>Kindest Regards</p>
                        <p>CEO</p>
                    </div>
                    <div className="md:w-3/12">
                        {" "}
                        {/*<img*/}
                        {/*    className="w-full"*/}
                        {/*    src=""*/}
                        {/*    alt="Al-fakhar-logo"*/}
                        {/*/>*/}
                    </div>
                </section>
            </main>
        </>
    );
}
