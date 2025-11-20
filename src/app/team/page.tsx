export default function TeamPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-[#032d64] to-[#15162c] text-white">
            <div
                className="relative container flex h-screen max-h-screen items-center justify-center px-4"
                id="team-hero"
            >
                <div className="flex w-full max-w-[min(92vw,1200px)] flex-col items-center justify-center ">
                    <h1 className="text-4xl font-bold text-yellow-400">Meet the Team</h1>
                </div>
            </div>
            {/* Header is rendered in the layout to keep it fixed to the viewport */}
            {
                /* Stuff to make this scroll */
                Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="my-8 h-32 w-full" />
                ))
            }
        </main>
    );
}