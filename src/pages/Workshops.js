export default function Workshops() {
    return `
        <div class="max-w-3xl mx-auto w-full pt-10">
            <h2 class="sr-only">Workshops</h2>
            <div class="flex flex-col border-t border-gray-100">
                
                <div class="border-b border-gray-100 group">
                    <button class="w-full text-left py-8 md:py-12 flex flex-col md:flex-row md:items-baseline justify-between hover:opacity-50 transition-opacity accordion-toggle">
                        <div class="flex flex-col mb-2 md:mb-0">
                            <span class="text-xl md:text-2xl font-light">Korean Painting & Minhwa Workshop</span>
                            <span class="text-xs md:text-sm font-light text-gray-500 mt-1">터키 코자엘리 한국문화센터 민화, 한국화 워크숍</span>
                        </div>
                        <span class="text-sm text-gray-400 tracking-wider shrink-0 md:ml-4 mt-2 md:mt-0">2024, 터키 코자엘리 한국문화센터</span>
                    </button>
                    <div class="accordion-content">
                        <div class="pb-12 text-gray-600 font-light leading-relaxed">
                            <p class="mb-8 max-w-2xl text-sm md:text-base">
                                한국 전통 회화의 대표적인 도안인 일월오봉도와 묘작도를 바탕으로, 색연필을 활용해 한국화의 바림 기법과 색의 흐름을 직접 표현해본 워크숍. 먹, 한국화 물감, 아교 등 한국화 재료의 특징과 터키 전통 회화인 '에브루'를 비교하며 한국화 전통재료와 표현 기법을 공유함.
                            </p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                
                                <img src="assets/workshop1.jpeg" alt="Workshop View" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                
                                 <img src="assets/workshop2.jpeg" alt="Workshop View" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                 
                                 <img src="assets/workshop3.jpeg" alt="Workshop View" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                 
                                 <img src="assets/workshop4.jpeg" alt="Workshop View" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video">
                                 
                                <video class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video" controls>
                                    <source src="assets/workshop_video1.mp4" type="video/mp4">
                                    현재 사용 중인 브라우저가 동영상 재생을 지원하지 않습니다.
                                </video>

                                <video class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 bg-gray-50 aspect-video" controls>
                                    <source src="assets/workshop_video2.mp4" type="video/mp4">
                                    현재 사용 중인 브라우저가 동영상 재생을 지원하지 않습니다.
                                </video>
                                
                            </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    `;
}