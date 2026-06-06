export default function Works() {
    // Array of artwork objects
    const artworks = [
        { id: 1, title: '낙하를 앞두고', year: '2026', image: 'assets/낙하1.jpg' },
        { id: 2, title: '낙하를 앞두고', year: '2026', image: 'assets/낙하2.jpg' },
        { id: 3, title: '낙하를 앞두고', year: '2026', image: 'assets/낙하3.jpg' },
        { id: 4, title: '낙하를 앞두고', year: '2026', image: 'assets/낙하4.jpg' },
        { id: 5, title: '낙하를 앞두고', year: '2026', image: 'assets/낙하5.jpg' },
        { id: 6, title: '낙하를 앞두고', year: '2026', image: 'assets/낙하6.jpg' },
        { id: 7, title: '검은 것과 어떤 몸짓', year: '2025', image: 'assets/검어몸1.jpg' },
        { id: 8, title: '검은 것과 어떤 몸짓', year: '2025', image: 'assets/검어몸2.jpg' },
        { id: 9, title: '검은 것과 어떤 몸짓', year: '2025', image: 'assets/검어몸3.jpg' },
        { id: 10, title: '놓지않기', year: '2026', image: 'assets/놓지않기1.jpg' },
        { id: 11, title: '놓지않기', year: '2026', image: 'assets/놓지않기2.jpg' },
        { id: 12, title: '온전함의 가장자리', year: '2026', image: 'assets/온전함의 가장자리1.jpg' },
        { id: 13, title: '온전함의 가장자리', year: '2026', image: 'assets/온전함의가장자리2.jpg' },
        { id: 14, title: '쌓아올리기', year: '2024', image: 'assets/쌓아올리기1.jpg' },
        { id: 15, title: '쌓아올리기', year: '2024', image: 'assets/쌓아올리기2.jpg' },
        { id: 16, title: '쳐다보기, 떠나보내기', year: '2024', image: 'assets/쳐떠.jpg' },
        { id: 17, title: '쳐다보기', year: '2024', image: 'assets/쳐다보기.jpg' },
        { id: 18, title: '떠나보내기', year: '2024', image: 'assets/떠나보내기.jpg' },
        { id: 19, title: '소품', year: '2026', image: 'assets/소품1.jpg' },
        { id: 20, title: '소품', year: '2026', image: 'assets/소품2.jpg' },
        { id: 21, title: '소품', year: '2026', image: 'assets/소품3.jpg' },
        { id: 22, title: '이어지기', year: '2024', image: 'assets/이어지기1.jpg' },
        { id: 23, title: '이어지기', year: '2024', image: 'assets/이어지기2.jpg' },
        { id: 24, title: '사랑받기', year: '2023', image: 'assets/사랑받기.jpg' },
        { id: 25, title: '식혀지기1,2', year: '2024', image: 'assets/식혀지기.jpg' },
        { id: 26, title: '발을 좀 뻗어보지 그래', year: '2022', image: 'assets/발을좀뻗어보지그래.jpg' },
        { id: 27, title: '가느다란 분노', year: '2025', image: 'assets/가느다란분노1.jpg' },
        { id: 28, title: '가느다란 분노', year: '2025', image: 'assets/가느다란분노2.jpg' },
        { id: 29, title: '내던지기', year: '2026', image: 'assets/내던지기1.jpg' },
        { id: 30, title: '내던지기', year: '2026', image: 'assets/내던지기2.jpg' },
        { id: 31, title: '너도 싫어? 나도 싫어', year: '2022', image: 'assets/너도싫어나도싫어.jpg' },
        { id: 32, title: '검은 무언가를 향한', year: '2025', image: 'assets/검은무언가를향한.jpeg' },
        { id: 33, title: '부유와 검은 무언가', year: '2025', image: 'assets/부유와검은무언가.jpeg' },
        { id: 34, title: '유인되기', year: '2026', image: 'assets/유인되기.jpg' },
        { id: 35, title: '드로잉', year: '2026', image: 'assets/드로잉1.jpg' },
        { id: 36, title: '파편을 뚫고 잔소를 넘어', year: '2022', image: 'assets/파편을뚫고잔소를넘어.jpg' },
        { id: 37, title: '파편의 잔소', year: '2026', image: 'assets/파편의잔소.jpg' },
        { id: 38, title: '끌어안기', year: '2026', image: 'assets/끌어안기.jpg' },
        { id: 39, title: 'Stone Fragments on Air', year: '2025', image: 'assets/stone1.jpg' },
        { id: 40, title: 'Stone Fragments on Air', year: '2025', image: 'assets/stone2.jpg' },

    ];

    const galleryHTML = artworks.map(work => `
        <div class="group cursor-pointer flex flex-col work-item" data-title="${work.title}" data-year="${work.year}" data-image="${work.image}">
            <div class="aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
                <img src="${work.image}" alt="${work.title}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100">
            </div>
            <div class="flex justify-between items-center px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-sm font-light text-black tracking-wide">${work.title}</span>
                <span class="text-xs text-gray-400">${work.year}</span>
            </div>
        </div>
    `).join('');

    return `
        <div class="w-full pt-10">
            <h2 class="sr-only">Works</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
                ${galleryHTML}
            </div>
        </div>
    `;
}
