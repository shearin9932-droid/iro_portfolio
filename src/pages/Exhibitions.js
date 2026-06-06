export default function Exhibitions() {
    return `
        <div class="max-w-3xl mx-auto w-full pt-10">
            <h2 class="sr-only">Exhibitions</h2>
            <div class="flex flex-col border-t border-gray-100">
                
                <!-- Item 1 -->
                <div class="border-b border-gray-100 group">
                    <button class="w-full text-left py-8 md:py-12 flex flex-col md:flex-row md:items-baseline justify-between hover:opacity-50 transition-opacity accordion-toggle">
                        <span class="text-xl md:text-2xl font-light mb-2 md:mb-0">온전함의 가장자리</span>
                        <span class="text-sm text-gray-400 tracking-wider">2026, 갤러리 B</span>
                    </button>
                    <div class="accordion-content">
                        <div class="pb-12 text-gray-600 font-light leading-relaxed">
                            <p class="mb-8 max-w-2xl text-sm md:text-base">
                                모든 작업은 극단적인 욕망들 사이에서 온전함을 찾는 하나의 모험이다. 온전함이란 양극 사이에서 끊임없이 흔들리고 고뇌하는 인간의 모습이라 믿는다. 이번 전시는 그 불안정한 지점을 화면위에 남기려는 시도이다.
                            </p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <img src="/assets/Exhibition_wholeness1.jpg" alt="Exhibition View 1" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                <img src="/assets/Exhibition_wholeness2.jpg" alt="Exhibition View 2" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                <img src="/assets/Exhibition_wholeness3.jpg" alt="Exhibition View 3" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                <img src="/assets/Exhibition_wholeness4.jpg" alt="Exhibition View 4" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                <img src="/assets/Exhibition_wholeness5.jpg" alt="Exhibition View 5" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                <img src="/assets/Exhibition_wholeness6.jpg" alt="Exhibition View 6" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                <img src="/assets/Exhibition_wholeness7.jpg" alt="Exhibition View 7" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="border-b border-gray-100 group">
                    <button class="w-full text-left py-8 md:py-12 flex flex-col md:flex-row md:items-baseline justify-between hover:opacity-50 transition-opacity accordion-toggle">
                        <span class="text-xl md:text-2xl font-light mb-2 md:mb-0">베이스 캠프</span>
                        <span class="text-sm text-gray-400 tracking-wider">2025, 동국대학교 갤러리</span>
                    </button>
                    <div class="accordion-content">
                        <div class="pb-12 text-gray-600 font-light leading-relaxed">
                            <p class="mb-8 max-w-2xl text-sm md:text-base">
                             ‘Base Camp’는 동국대학교 동문 작가들이 다시 한자리에 모여 서로의 현재를 공유하고, 앞으로의 방향을 모색하기 위해 기획된 전시이다. 각자의 자리에서 이어온 작업들이 하나의 거점에 모여, 새로운 출발과 연결의 가능성을 만들어낸다.

                            </p>
                            <img src="/assets/Exhibition_basecamp.jpg" alt="Exhibition View" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                        </div>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="border-b border-gray-100 group">
                    <button class="w-full text-left py-8 md:py-12 flex flex-col md:flex-row md:items-baseline justify-between hover:opacity-50 transition-opacity accordion-toggle">
                        <span class="text-xl md:text-2xl font-light mb-2 md:mb-0">시선교감</span>
                        <span class="text-sm text-gray-400 tracking-wider">2025, 57th Gallery</span>
                    </button>
                    <div class="accordion-content">
                        <div class="pb-12 text-gray-600 font-light leading-relaxed">
                            <p class="mb-8 max-w-2xl text-sm md:text-base">
                             이번 전시에서 '아이'는 온전해지기 위해 스스로를 희생하고, 분노하며, 끝내 모든 것을 먹어치우는 존재가 되었다. 이를 통해 인간 내면의 온전함에 대한 욕구와 결핍그리고 생존본능을 탐구한다.
                            </p>
                             <img src="/assets/Exhibition_gaze1.jpg" alt="Exhibition View" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                             <img src="/assets/Exhibition_gaze2.jpg" alt="Exhibition View" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                             
                        </div>
                    </div>
                </div>


            
            </div>
        </div>
    `;
}
