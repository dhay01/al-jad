import Link from "next/link";

const Navbar = () => {
    return (
        <div className="text-black px-3 h-20 flex items-center justify-between">
            <div className="lg:w-1/3">
                <Link href={"/"}>
                    <img
                        src={"/logo.png"}
                        alt="al-jad-logo"
                        className="p-4 cursor-pointer"
                    />
                </Link>
            </div>

        </div>
    );
};

export default Navbar;
