import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Schedule() {
    return (
        <div className='w-screen max-w-full'>
            <Link href="/"
                className="md:top-4  left-4 bg-[#f51a13] hover:bg-[#f51a13] text-white py-2 px-4 flex items-center"
            >
                <FaArrowLeft className="mr-2" />
                Página inicial
            </Link>
            <iframe src="https://calendly.com/deydeyvid2022" className='w-full h-[120vh] mx-auto' ></iframe>

        </div>
    );
}
