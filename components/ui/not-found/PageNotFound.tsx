import Link from "next/link";

const PageNotFound = () => {
    return (<section
            className="flex flex-wrap p-[10%] w-screen h-screen justify-center items-center font-custom font-extrabold">
            <h1 className="w-full text-8xl">THE END OF <br/>PAGE NAVIGATION</h1>
            <h3 className="w-full text-7xl mb-4 font-bold font-sans">ERROR:404</h3>
            <h4 className="ms-auto text-6xl">You can (not) <Link href="/" className="hover:underline-offset-8 hover:underline">go back.</Link></h4>
        </section>
    );
};

export default PageNotFound;