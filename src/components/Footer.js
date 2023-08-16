import { Tab } from "@headlessui/react";
import Link from "next/link";


const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="border-yellow border-t-2 bg-grey flex flex-col text-section p-4 md:flex-row items-center justify-between  gap-5 ">
            <p>&copy; {currentYear} · AL-JAD integrated solutions & Electronic services Co. ltd.</p>
            <Tab.Group>
                <Tab.List className={"gap-3 flex "}>
                    <Tab className={"transition-all hover:text-hoverBlue"}>
                        <Link href={"/"}>Home</Link>
                    </Tab>
                    <Tab className={"transition-all hover:text-hoverBlue"}>
                        <h1> contact Us</h1>
                    </Tab>

                </Tab.List>
            </Tab.Group>
        </footer>
    );
};

export default Footer;
