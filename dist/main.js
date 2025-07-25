import './index.css';
import { TestimonialCard } from './TestimonialCard';
import heroTitle from './assets/hero_title.png';
import heroSubtitle from './assets/hero_subtitle.png';
import maxPfp from './assets/max_pfp.jpeg';
import jacobPfp from './assets/jacob_pfp.jpeg';
const logo = 'https://placehold.co/80x80?text=Logo';
function App() {
    return (`<div class="min-h-screen bg-black text-[#F3E9DC]">
      <div class="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24">
        <div class="flex flex-col items-center">
          <div class="flex flex-col items-center w-full mb-12">
            <img src="${heroTitle}" alt="Womp Web Title" width="200" height="50" class="w-full max-w-md mb-6 object-contain" />
            <img src="${heroSubtitle}" alt="Womp Web Subtitle" width="50" height="77" class="w-full max-w-xs object-contain" />
          </div>
        </div>
      </div>
      <section class="py-16 bg-black">
        <div class="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div class="grid gap-8 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
            ${TestimonialCard({
        image: maxPfp,
        name: 'Alex Rivera',
        description: 'Award-winning digital artist and creative visionary.',
        bio: 'Visual Artist & Film Enthusiast',
    })}
            ${TestimonialCard({
        image: jacobPfp,
        name: 'Morgan Lee',
        description: 'Innovative coder blending art and technology.',
        bio: 'Creative Coder & Designer',
    })}
          </div>
        </div>
      </section>
    </div>`);
}
const app = document.getElementById('app');
if (app) {
    app.innerHTML = App();
}
