export function TestimonialCard({ image, name, bio }: { image: string; name: string; bio: string }) {
  return `
    <div class="bg-black rounded-xl p-5 flex flex-col items-center">
      <h3 class="text-2xl font-semibold mb-1 text-[#F3E9DC] font-cinzel tracking-wide">${name}</h3>
      <span class="pt-serif-regular text-[#F3E9DC] text-base text-center mb-4 block">${bio}</span>
      <img src="${image}" alt="${name}" class="w-45 h-45 mb-4 object-cover" />
    </div>
  `;
} 