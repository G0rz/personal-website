import Link from "next/link";

export const PageNotFound = () => {
    return (
        <div
            className="relative w-screen h-screen bg-black text-white font-custom tracking-tighter">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/4">
                <h3 className="w-full md:text-[4em] text-2xl font-bold font-mono">ERROR:404</h3>
                <h2 className="w-full md:text-[7.25em] text-5xl md:-mt-4 -mt-1">NAVIGATION</h2>
                <h4 className="place-self-end md:text-[2.5em]">You can (not)</h4>
                <h1 className="w-full md:text-[4.60em] text-3xl">THE END OF</h1>
                <h4 className="place-self-end md:text-[2.5em]">REDO.</h4>
                <Link href="/"
                      className="place-self-center mt-10 text-xl hover:underline hover:text-primary transition-colors">
                    Return to Home
                </Link>
            </div>
        </div>
    );
};