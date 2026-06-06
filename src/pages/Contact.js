export default function Contact() {
    return `
        <div class="flex flex-col items-center justify-center h-full min-h-[50vh] text-center w-full max-w-2xl mx-auto pt-10">
            <h2 class="sr-only">Contact</h2>
            
            <div class="space-y-16 w-full">
                <div>
                    <h3 class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">General Inquiries</h3>
                    <a href="mailto:shearin@naver.com" class="text-xl md:text-2xl font-light hover:opacity-50 transition-opacity text-black">shearin@naver.com</a>
                </div>

                <div>
                    <h3 class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">Social</h3>
                    <div class="flex gap-8 justify-center">
                        <a href="#" class="text-lg font-light hover:opacity-50 transition-opacity text-black">Instagram</a>
                        <a href="#" class="text-lg font-light hover:opacity-50 transition-opacity text-black">@iro._.studio</a>
                    </div>
                </div>

                <div class="pt-16 border-t border-gray-100 mt-16">
                    <h3 class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">Studio</h3>
                    <address class="not-italic text-sm text-gray-500 font-light leading-relaxed">
                        31-4, Pirundae-ro, Jongno-gu<br>
                        Seoul, South Korea<br>
                        By appointment only.
                    </address>
                </div>
            </div>
        </div>
    `;
}
