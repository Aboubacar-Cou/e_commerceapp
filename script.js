import { Produits } from "./Produits.js";

const article = document.getElementById("article");
const dialog = document.querySelector("dialog")
const body = document.querySelector("body");

function art(prod){ 
    return`
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card">
            <img src="${prod.image}" alt="${prod.nom}" class="w-full h-56 object-cover"/>
            <div class="p-5">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${prod.nom}</h3>
                <p class="text-gray-500 text-sm mb-4 line-clamp-2">${prod.description}</p>
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

  article.querySelectorAll(".card").forEach((card, index) => {
    card.addEventListener("click", () => {
      const prod = Produits[index];

      dialog.innerHTML = `
        <div class="relative w-full overflow-hidden bg-gray-100 shadow-2xl">
          <img src="${prod.image}" alt="${prod.nom}" class="block h-[76vh] min-h-[260px] max-h-[700px] w-full object-contain" />

          <button id="close" type="button" aria-label="Fermer le dialogue" class="absolute right-3 top-3 z-10 grid size-10 place-items-center bg-white/90 text-2xl text-gray-900 shadow transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            &times;
          </button>

          <div class="absolute inset-x-0 bottom-0 max-h-[58%] overflow-y-auto bg-white/85 px-4 py-4 text-gray-900 shadow-lg backdrop-blur-md sm:px-6 sm:py-5">
            <div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_200px] md:items-end">
              <div class="min-w-0">
                <span class="inline-block bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800">
                  ${prod.categorie}
                </span>
                <h3 class="mt-2 text-xl font-bold sm:text-2xl">${prod.nom}</h3>
                <p class="mt-1 text-sm leading-relaxed text-gray-700">${prod.description}</p>
                <div class="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-700">
                  <p><strong>Couleurs :</strong> ${prod.couleur.join(", ")}</p>
                  <p><strong>Taille :</strong> ${prod.taille.join(", ")}</p>
                  <p><strong>Stock :</strong> ${prod.stock} disponibles</p>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <p class="text-2xl font-bold text-blue-700">$${prod.prix.toFixed(2)}</p>
                <button class="w-full bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" type="button">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      dialog.showModal();
      dialog.classList.remove("closing");
      body.style.overflow = "hidden";
      document.getElementById("close").addEventListener("click", fermerdialog);
    });
  });
}

function fermerdialog() {
  dialog.classList.add("closing");
  setTimeout(() => {
    dialog.close();
  }, 180);
}

dialog.addEventListener("close", () => {
  dialog.classList.remove("closing");
  body.style.overflow = "";
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) fermerdialog();
});


