export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] min-h-screen w-full bg-[#000000]">
            {/* Subtle Blue Glow - Top Left */}
            <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[120px]" />

            {/* Subtle Purple/Blue Glow - Bottom Right */}
            <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />

            {/* Very faint noise/grain texture could be added here if needed, but keeping it clean for now */}
        </div>
    );
}
