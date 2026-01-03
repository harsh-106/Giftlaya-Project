import React from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Star } from 'lucide-react';

const Gift = () => {
  const categories = [
    { name: "Flowers", img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=200" },
    { name: "Decorations", img: "https://images.unsplash.com/photo-1533219057257-4bb9ed5d2cc6?q=80&w=200" },
    { name: "Cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=200" },
    { name: "Plants", img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=200" },
    { name: "Custom", img: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=200" },
    { name: "Chocolates", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=200" },
  ];

  const products = [
    { id: 1, name: "Simple Red Rose Bouquet", price: 469, oldPrice: 499, discount: "7% OFF", rating: "4.3", reviews: "422", img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=400" },
    { id: 2, name: "Bunch of 8 Red Roses", price: 799, oldPrice: 849, discount: "6% OFF", rating: "4.3", reviews: "55", img: "https://images.unsplash.com/photo-1548622214-f82f23d5082e?q=80&w=400" },
    { id: 3, name: "Cute Pastel White Rose...", price: 1269, oldPrice: 1599, discount: "21% OFF", rating: "4.8", reviews: "12", img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=400" },
    { id: 4, name: "25th Birthday Bouquet", price: 1199, oldPrice: 1399, discount: "15% OFF", rating: "4.5", reviews: "89", img: "https://images.unsplash.com/photo-1530103862676-fa8c9d34bc34?q=80&w=400" },
    { id: 5, name: "Tempting Black Forest...", price: 849, oldPrice: 1049, discount: "20% OFF", rating: "4.7", reviews: "210", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=400" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      
      <div className="text-center pt-8 pb-6 px-4">
        <h1 className="text-lg md:text-3xl font-bold text-[#8B2313]">Trusted Gifts & Decorations by Giftlaya</h1>
        <p className="text-gray-600 text-xs md:text-xl">1 Million + Happy Customers</p>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 mb-10">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="aspect-square w-full rounded-xl overflow-hidden mb-2 bg-[#FDF5E6] shadow-sm">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs md:text-sm font-bold text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Background starts here for the Gifting Portal Section */}
      <div className="bg-[#FAF3E9] py-5 md:py-10">
        <div className="text-center mb-6 md:mb-10 px-4">
          <h2 className="text-lg md:text-3xl font-bold text-gray-800">India's Most Trusted Gifting Portal</h2>
          <p className="text-gray-500 text-xs md:text-xl">Wide Range of Options</p>
        </div>

        
        <div className="max-w-7xl mx-auto px-4 relative group">
          <div className="flex overflow-x-auto md:overflow-x-hidden gap-3 md:gap-5 scrollbar-hide pb-6 snap-x snap-mandatory">
            {products.map((prod) => (
              <div key={prod.id} className="min-w-[170px] md:min-w-[240px] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 snap-start">
                <div className="h-40 md:h-56 overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-xs md:text-sm font-medium text-gray-800 truncate mb-1">{prod.name}</h3>
                  <div className="flex items-center gap-1 md:gap-2 mb-1">
                    <span className="text-sm md:text-base font-bold text-gray-900">₹{prod.price}</span>
                    <span className="text-[10px] md:text-xs text-gray-400 line-through">₹{prod.oldPrice}</span>
                    <span className="text-[8px] md:text-[10px] font-bold text-green-600 bg-green-50 px-1 rounded">{prod.discount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-[10px] md:text-xs text-gray-600 font-medium">{prod.rating} ({prod.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <button className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg z-10">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg z-10">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50">
        <button className="bg-blue-600 p-3 rounded-full text-white shadow-xl hover:scale-110 transition-transform">
          <Phone className="w-5 h-5" />
        </button>
        <button className="bg-green-500 p-3 rounded-full text-white shadow-xl hover:scale-110 transition-transform">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Gift;