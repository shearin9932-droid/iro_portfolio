import Home from './pages/Home.js';
import Exhibitions from './pages/Exhibitions.js';
import Workshops from './pages/Workshops.js';
import Works from './pages/Works.js';
import CV from './pages/CV.js';
import Contact from './pages/Contact.js';

const routes = {
    '/': Home,
    '/exhibitions': Exhibitions,
    '/workshops': Workshops,
    '/works': Works,
    '/cv': CV,
    '/contact': Contact,
};

const appElement = document.getElementById('app');

// Router Logic
const router = async () => {
    // Get the hash without the # symbol, default to '/'
    let path = window.location.hash.slice(1) || '/';
    
    // Find the matching component
    const component = routes[path] || Home;

    // Apply fade-out
    appElement.classList.remove('page-enter');
    appElement.classList.add('page-exit');

    // Wait for fade-out animation
    await new Promise(r => setTimeout(r, 400));

    // Render new content
    appElement.innerHTML = component();
    
    // Initialize component specific logic
    if (path === '/exhibitions' || path === '/workshops') initAccordions();
    if (path === '/works') initLightbox();

    // Reset styles for fade-in
    appElement.classList.remove('page-exit');
    appElement.classList.add('page-enter');
    
    // Trigger reflow
    void appElement.offsetWidth;
    
    // Start fade-in
    appElement.classList.remove('page-enter');

    // Update active nav link
    updateNavLinks(path);
};

// Update active navigation links
const updateNavLinks = (path) => {
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href').slice(1);
        if (linkPath === path) {
            link.classList.remove('text-darkgray');
            link.classList.add('text-black', 'font-medium');
        } else {
            link.classList.add('text-darkgray');
            link.classList.remove('text-black', 'font-medium');
        }
    });
};

// Initialize Exhibitions Accordion
const initAccordions = () => {
    const toggles = document.querySelectorAll('.accordion-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isOpen = content.classList.contains('open');
            
            // Close all other accordions (optional, but good for cleanliness)
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
            
            if (!isOpen) {
                content.classList.add('open');
            }
        });
    });
};

// Initialize Works Lightbox Modal
const initLightbox = () => {
    const workItems = document.querySelectorAll('.work-item');
    const modalRoot = document.getElementById('modal-root');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');

    workItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const year = item.getAttribute('data-year');
            const imageSrc = item.getAttribute('data-image');

            modalContent.innerHTML = `
                <img src="${imageSrc}" alt="${title}" class="max-h-[70vh] w-auto object-contain mb-6 shadow-2xl">
                <div class="text-center">
                    <h3 class="text-xl font-light text-black mb-1">${title}</h3>
                    <p class="text-sm text-gray-400">${year}</p>
                </div>
            `;

            modalRoot.classList.remove('hidden');
            // Small delay to allow display block to apply before transition
            setTimeout(() => {
                modalRoot.classList.remove('opacity-0');
                modalRoot.classList.add('opacity-100');
                document.body.classList.add('modal-open');
            }, 10);
        });
    });

    const closeModal = () => {
        modalRoot.classList.remove('opacity-100');
        modalRoot.classList.add('opacity-0');
        setTimeout(() => {
            modalRoot.classList.add('hidden');
            document.body.classList.remove('modal-open');
            modalContent.innerHTML = '';
        }, 300); // match duration-300
    };

    closeModalBtn.addEventListener('click', closeModal);
    
    // Close on background click
    modalRoot.addEventListener('click', (e) => {
        if (e.target === modalRoot) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalRoot.classList.contains('hidden')) {
            closeModal();
        }
    });
};

// Listen for hash changes
window.addEventListener('hashchange', router);

// Initial load
window.addEventListener('DOMContentLoaded', () => {
    appElement.classList.add('page-container');
    router();
});
