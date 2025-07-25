export function TestimonialCard({ image, name, bio }) {
    return `
    <div class="bg-black rounded-xl p-8 flex flex-col items-center">
      <img src="${image}" alt="${name}" class="w-32 h-32 mb-4 object-contain" />
      <h3 class="text-xl font-semibold mb-2 text-[#F3E9DC]">${name}</h3>
      <span class="text-[#BFAE9C] text-sm text-center">${bio}</span>
    </div>
  `;
}
