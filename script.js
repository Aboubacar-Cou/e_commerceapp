import { Produits } from "./Produits.js";

const article = document.getElementById("article");
function art(prod){ 
    return`
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300" id={prod.id}>
            <img src="${prod.image}" alt="${prod.nom}" class="w-full h-56 object-cover"/>
            <div class="p-5">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${prod.nom}</h3>
                <p class="text-gray-600 text-sm mb-4">
                ${prod.categorie}
                </p>
                <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-blue-600">$${prod.prix.toFixed(2)}</span>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                    Ajouter
                </button>
                </div>
            </div>
        </div>
        `;
  };

if (article) {
  article.innerHTML = Produits.map((prod) => art(prod)).join("");
}




