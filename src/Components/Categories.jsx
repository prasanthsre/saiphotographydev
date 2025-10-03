const categories = [
  { title: "Naming Ceremony", img: "https://via.placeholder.com/400x250", link: "#" },
  { title: "Puberty", img: "https://via.placeholder.com/400x250", link: "#" },
  { title: "Birthday", img: "https://via.placeholder.com/400x250", link: "#" },
];

export function Categories() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Our Categories</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden shadow-lg group">
            <img src={cat.img} alt={cat.title} className="w-full h-64 object-cover group-hover:scale-110 transition" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <a href={cat.link} className="px-4 py-2 bg-yellow-600 text-white rounded-lg">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
