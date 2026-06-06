export default function Home() {
    return `
        <div class="flex flex-col items-center justify-center h-full min-h-[60vh] text-center w-full max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-6xl font-light tracking-widest text-black mb-8">IRO 이로</h2>
            <p class="text-sm md:text-base text-gray-500 tracking-wide font-light max-w-md leading-relaxed">
                All work is a journey toward wholeness.
            </p>
            <div class="mt-20">
                <span class="text-xs uppercase tracking-[0.3em] text-gray-400 block mb-4">Current</span>
                <a href="#/exhibitions" class="text-lg md:text-xl font-light hover:opacity-50 transition-opacity">The Edge of Wholeness — Solo Exhibition, Seoul</a>
            </div>
        </div>
    `;
}
