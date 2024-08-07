/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D8bGJjVl0Dp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#4A3AFF]">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="grid grid-cols-3 gap-4 mb-8 relative">
                            <div className="rounded-full overflow-hidden translate-y-8">
                                <img
                                    src="/placeholder.svg"
                                    alt="Portrait 1"
                                    className="w-full h-full object-cover"
                                    width="100"
                                    height="100"
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div className="rounded-full overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Portrait 2"
                                    className="w-full h-full object-cover"
                                    width="200"
                                    height="200"
                                    style={{
                                        aspectRatio: "200/200",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div className="rounded-full overflow-hidden -translate-y-8">
                                <img
                                    src="/placeholder.svg"
                                    alt="Portrait 3"
                                    className="w-full h-full object-cover"
                                    width="150"
                                    height="150"
                                    style={{
                                        aspectRatio: "150/150",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-white text-5xl font-bold mb-4">
                            Illness Wellness?
                        </h1>
                        <p className="text-white text-lg mb-8">
                            Revenue based funding and execution support designed
                            for early stage founders
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button className="bg-[#00C2FF] text-white px-6 py-4 rounded-full">
                                Contact Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
