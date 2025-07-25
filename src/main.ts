import './index.css';
import { TestimonialCard } from './TestimonialCard';
import heroTitle from './assets/hero_title.png';
import heroSubtitle from './assets/hero_subtitle.png';
import maxPfp from './assets/max_pfp.jpeg';
import jacobPfp from './assets/jacob_pfp.JPG';

const logo = 'https://placehold.co/80x80?text=Logo';

function App() {
  return (
    `<div class="min-h-screen bg-black text-[#F3E9DC]">
      <div class="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-10">
        <div class="flex flex-col items-center">
          <div class="flex flex-col items-center w-full mb-4">
            <img src="${heroTitle}" alt="Womp Web Title" width="200" height="50" class="w-full max-w-md mb-6 object-contain" />
            <img src="${heroSubtitle}" alt="Womp Web Subtitle" width="50" height="77" class="w-full max-w-xs object-contain" />
          </div>
        </div>
        <div class="flex justify-center gap-6 my-10">
            <a href="https://www.strava.com/clubs/wompwompcc" target="_blank" rel="noopener noreferrer" class="px-10 py-3 rounded-full bg-[#F3E9DC] text-black font-serif font-bold inline-block text-center">Join the Family</a>
          </div>
      </div>
      <section class="py-8 bg-black">
        <div class="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div class="grid gap-8 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
            ${TestimonialCard({
              image: maxPfp,
              name: 'Max Eisenberg',
              bio: 'Co-Founder',
            })}
            ${TestimonialCard({
              image: jacobPfp,
              name: 'Jacob Zlobinsky',
              bio: 'Co-Founder',
            })}
          </div>
        </div>
      </section>
    </div>`
  );
}

const app = document.getElementById('app');
if (app) {
  app.innerHTML = App();
}
