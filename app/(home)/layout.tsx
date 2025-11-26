export default function HomeLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {children}
        </main>
    );
}
