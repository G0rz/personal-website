import Link from "next/link";

const PageNotFound = () => {
    return (<main
            className="relative w-screen h-screen bg-black font-custom tracking-tighter">
            <div
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform scale-y-[120%]">
                <h1 className="w-full md:text-[4.60em] text-3xl">THE END OF</h1>
                <h2 className="w-full md:text-[7.25em] text-5xl md:-mt-4 -mt-1">NAVIGATION</h2>
                <h3 className="w-full md:text-[4em] text-2xl font-bold font-mono">ERROR:404</h3>
                <h4 className="place-self-end md:text-[2.5em]">You can (not)
                    <Link href="/" className="hover:underline-offset-8 hover:underline">go back.</Link>
                </h4>
            </div>
        </main>
    );
};

export default PageNotFound;