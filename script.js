"use strict";

/* =========================================================
   ANA ESSENCI — SCRIPT.JS
   Catálogo, filtros, pesquisa, menu mobile e WhatsApp
========================================================= */

const CONFIG = Object.freeze({
  whatsappNumber: "5562998390546",
  whatsappGeneralUrl: "https://wa.me/message/RFPQVIOKJU7AJ1",
  email: "loja.anaessenci@gmail.com",
  initialProductLimit: 12,
  productLimitStep: 12,
  imageFallback: "logo/logo.jpg"
});

const CATEGORY_LABELS = Object.freeze({
  masculino: "Perfumaria masculina",
  feminino: "Perfumaria feminina",
  hidratantes: "Cuidados corporais",
  sabonetes: "Banho e perfumação"
});

function createProduct({
  id,
  name,
  code,
  price,
  category,
  featured = 0,
  brand = "O Boticário"
}) {
  return Object.freeze({
    id,
    name,
    code: String(code),
    price: Number(price),
    category,
    categoryLabel: CATEGORY_LABELS[category],
    brand,
    image: `produtos/${category}/${id}.webp`,
    featured
  });
}

const PRODUCTS = [
  /* =======================================================
     PERFUMARIA MASCULINA
  ======================================================= */

  createProduct({
    id: "malbec",
    name: "Malbec Desodorante Colônia 100 ml",
    code: "84387",
    price: 209.90,
    category: "masculino",
    featured: 1
  }),

  createProduct({
    id: "malbec-gold",
    name: "Malbec Gold Desodorante Colônia 100 ml",
    code: "73849",
    price: 249.90,
    category: "masculino",
    featured: 2
  }),

  createProduct({
    id: "malbec-x",
    name: "Malbec X Desodorante Colônia 100 ml",
    code: "30192",
    price: 224.91,
    category: "masculino"
  }),

  createProduct({
    id: "malbec-black",
    name: "Malbec Black Desodorante Colônia 100 ml",
    code: "74723",
    price: 259.90,
    category: "masculino"
  }),

  createProduct({
    id: "malbec-ultra-bleu",
    name: "Malbec Ultra Bleu Desodorante Colônia 100 ml",
    code: "50119",
    price: 229.90,
    category: "masculino",
    featured: 3
  }),

  createProduct({
    id: "malbec-pure-gold",
    name: "Malbec Pure Gold Desodorante Colônia 100 ml",
    code: "58506",
    price: 249.90,
    category: "masculino"
  }),

  createProduct({
    id: "malbec-signature",
    name: "Malbec Signature Eau de Parfum 90 ml",
    code: "48134",
    price: 359.90,
    category: "masculino"
  }),

  createProduct({
    id: "malbec-magnetic",
    name: "Malbec Magnetic Desodorante Colônia 100 ml",
    code: "73743",
    price: 249.90,
    category: "masculino"
  }),

  createProduct({
    id: "malbec-noir",
    name: "Malbec Noir Desodorante Colônia 100 ml",
    code: "84388",
    price: 259.90,
    category: "masculino"
  }),

  createProduct({
    id: "zaad",
    name: "Zaad Eau de Parfum 95 ml",
    code: "47950",
    price: 314.91,
    category: "masculino",
    featured: 4
  }),

  createProduct({
    id: "zaad-expedition",
    name: "Zaad Expedition Eau de Parfum 95 ml",
    code: "46898",
    price: 349.90,
    category: "masculino"
  }),

  createProduct({
    id: "zaad-santal",
    name: "Zaad Santal Eau de Parfum 95 ml",
    code: "81382",
    price: 349.90,
    category: "masculino"
  }),

  createProduct({
    id: "zaad-intense",
    name: "Zaad Intense Eau de Parfum 95 ml",
    code: "58644",
    price: 300.88,
    category: "masculino"
  }),

  createProduct({
    id: "quasar-blue",
    name: "Quasar Blue Desodorante Colônia 100 ml",
    code: "51244",
    price: 189.90,
    category: "masculino"
  }),

  createProduct({
    id: "quasar-brave",
    name: "Quasar Brave Desodorante Colônia 100 ml",
    code: "51242",
    price: 189.90,
    category: "masculino"
  }),

  createProduct({
    id: "quasar-vision",
    name: "Quasar Vision Desodorante Colônia 100 ml",
    code: "50662",
    price: 189.90,
    category: "masculino"
  }),

  createProduct({
    id: "quasar-deep-blue",
    name: "Quasar Deep Blue Desodorante Colônia 100 ml",
    code: "58526",
    price: 141.89,
    category: "masculino"
  }),

  createProduct({
    id: "quasar-rush",
    name: "Quasar Rush Desodorante Colônia 100 ml",
    code: "50820",
    price: 113.90,
    category: "masculino"
  }),

  createProduct({
    id: "arbo",
    name: "Arbo Desodorante Colônia 100 ml",
    code: "74438",
    price: 189.90,
    category: "masculino"
  }),

  createProduct({
    id: "arbo-reserva",
    name: "Arbo Reserva Desodorante Colônia 100 ml",
    code: "81138",
    price: 189.90,
    category: "masculino"
  }),

  createProduct({
    id: "arbo-liberte",
    name: "Arbo Liberté Desodorante Colônia 100 ml",
    code: "74440",
    price: 189.90,
    category: "masculino"
  }),

  createProduct({
    id: "arbo-atlantica",
    name: "Arbo Atlântica Desodorante Colônia 100 ml",
    code: "55366",
    price: 189.90,
    category: "masculino"
  }),

  createProduct({
    id: "uomini",
    name: "Uomini Desodorante Colônia 100 ml",
    code: "49765",
    price: 209.90,
    category: "masculino"
  }),

  createProduct({
    id: "uomini-black",
    name: "Uomini Black Desodorante Colônia 100 ml",
    code: "49766",
    price: 209.90,
    category: "masculino"
  }),

  createProduct({
    id: "uomini-infinite",
    name: "Uomini Infinite Desodorante Colônia 100 ml",
    code: "50418",
    price: 209.90,
    category: "masculino"
  }),

  createProduct({
    id: "egeo-bomb-black",
    name: "Egeo Bomb Black Desodorante Colônia 90 ml",
    code: "82685",
    price: 164.90,
    category: "masculino"
  }),

  createProduct({
    id: "coffee-man-sense",
    name: "Coffee Man Sense Desodorante Colônia 100 ml",
    code: "80972",
    price: 229.90,
    category: "masculino"
  }),

  createProduct({
    id: "coffee-man-duo",
    name: "Coffee Man Duo Desodorante Colônia 100 ml",
    code: "73614",
    price: 159.90,
    category: "masculino"
  }),

  createProduct({
    id: "coffee-man-seduction",
    name: "Coffee Man Seduction Desodorante Colônia 100 ml",
    code: "48365",
    price: 229.90,
    category: "masculino"
  }),

  createProduct({
    id: "the-blend-bourbon",
    name: "The Blend Bourbon Eau de Parfum 100 ml",
    code: "77489",
    price: 379.90,
    category: "masculino"
  }),

  createProduct({
    id: "the-blend-cardamom",
    name: "The Blend Cardamom Eau de Parfum 100 ml",
    code: "83529",
    price: 379.90,
    category: "masculino"
  }),

  createProduct({
    id: "clash",
    name: "Clash Desodorante Colônia 100 ml",
    code: "50677",
    price: 179.90,
    category: "masculino"
  }),

  createProduct({
    id: "egeo-blue",
    name: "Egeo Blue Desodorante Colônia 90 ml",
    code: "82686",
    price: 164.90,
    category: "masculino"
  }),

  createProduct({
    id: "botica-214-verano-en-firenze",
    name: "Botica 214 Verano en Firenze Eau de Parfum 75 ml",
    code: "47553",
    price: 249.90,
    category: "masculino"
  }),

  /* =======================================================
     PERFUMARIA FEMININA
  ======================================================= */

  createProduct({
    id: "lily-eau-de-parfum",
    name: "Lily Eau de Parfum 75 ml",
    code: "77524",
    price: 329.90,
    category: "feminino",
    featured: 5
  }),

  createProduct({
    id: "lily-lumiere",
    name: "Lily Lumière Eau de Parfum 75 ml",
    code: "77989",
    price: 279.89,
    category: "feminino"
  }),

  createProduct({
    id: "lily-absolu",
    name: "Lily Absolu Eau de Parfum 75 ml",
    code: "77988",
    price: 329.90,
    category: "feminino"
  }),

  createProduct({
    id: "lily-gardenia",
    name: "Lily Gardénia Eau de Parfum 75 ml",
    code: "55363",
    price: 280.42,
    category: "feminino",
    featured: 6
  }),

  createProduct({
    id: "lily-le-parfum",
    name: "Lily Le Parfum 30 ml",
    code: "48734",
    price: 339.90,
    category: "feminino"
  }),

  createProduct({
    id: "floratta-red",
    name: "Floratta Red Desodorante Colônia 75 ml",
    code: "75792",
    price: 147.90,
    category: "feminino",
    featured: 7
  }),

  createProduct({
    id: "floratta-blue",
    name: "Floratta Blue Desodorante Colônia 75 ml",
    code: "25458",
    price: 174.90,
    category: "feminino",
    featured: 8
  }),

  createProduct({
    id: "floratta-my-blue",
    name: "Floratta My Blue Desodorante Colônia 75 ml",
    code: "01004",
    price: 79.89,
    category: "feminino"
  }),

  createProduct({
    id: "floratta-flores-secretas",
    name: "Floratta Flores Secretas Desodorante Colônia 75 ml",
    code: "48136",
    price: 104.91,
    category: "feminino"
  }),

  createProduct({
    id: "floratta-fleur-supreme",
    name: "Floratta Fleur Suprême Eau de Parfum 75 ml",
    code: "75877",
    price: 229.90,
    category: "feminino"
  }),

  createProduct({
    id: "floratta-romance-de-verao",
    name: "Floratta Romance de Verão Desodorante Colônia 75 ml",
    code: "55659",
    price: 121.91,
    category: "feminino"
  }),

  createProduct({
    id: "floratta-rose",
    name: "Floratta Rose Desodorante Colônia 75 ml",
    code: "48635",
    price: 174.90,
    category: "feminino"
  }),

  createProduct({
    id: "floratta-red-blossom",
    name: "Floratta Red Blossom Desodorante Colônia 75 ml",
    code: "49973",
    price: 174.90,
    category: "feminino"
  }),

  createProduct({
    id: "elysee",
    name: "Elysée Eau de Parfum 50 ml",
    code: "53518",
    price: 329.90,
    category: "feminino",
    featured: 9
  }),

  createProduct({
    id: "elysee-blanc",
    name: "Elysée Blanc Eau de Parfum 50 ml",
    code: "48143",
    price: 329.90,
    category: "feminino"
  }),

  createProduct({
    id: "elysee-nuit",
    name: "Elysée Nuit Eau de Parfum 50 ml",
    code: "48146",
    price: 329.90,
    category: "feminino"
  }),

  createProduct({
    id: "elysee-succes",
    name: "Elysée Succès Eau de Parfum 50 ml",
    code: "81331",
    price: 279.89,
    category: "feminino"
  }),

  createProduct({
    id: "leau-de-lily-blanche",
    name: "L’Eau de Lily Blanche Desodorante Colônia 75 ml",
    code: "86895",
    price: 229.90,
    category: "feminino"
  }),

  createProduct({
    id: "liz",
    name: "Liz Desodorante Colônia 100 ml",
    code: "76700",
    price: 179.90,
    category: "feminino"
  }),

  createProduct({
    id: "liz-intenso",
    name: "Liz Intenso Desodorante Colônia 100 ml",
    code: "53415",
    price: 179.90,
    category: "feminino"
  }),

  createProduct({
    id: "liz-sublime",
    name: "Liz Sublime Desodorante Colônia 100 ml",
    code: "47339",
    price: 149.89,
    category: "feminino"
  }),

  createProduct({
    id: "liz-flora",
    name: "Liz Flora Desodorante Colônia 100 ml",
    code: "59466",
    price: 124.90,
    category: "feminino"
  }),

  createProduct({
    id: "coffee-woman-seduction",
    name: "Coffee Woman Seduction Desodorante Colônia 100 ml",
    code: "48139",
    price: 229.90,
    category: "feminino"
  }),

  createProduct({
    id: "coffee-woman-duo",
    name: "Coffee Woman Duo Desodorante Colônia 100 ml",
    code: "73613",
    price: 189.90,
    category: "feminino"
  }),

  createProduct({
    id: "coffee-addictive",
    name: "Coffee Addictive Desodorante Colônia 100 ml",
    code: "56385",
    price: 229.90,
    category: "feminino"
  }),

  createProduct({
    id: "coffee-woman-sense",
    name: "Coffee Woman Sense Desodorante Colônia 100 ml",
    code: "80971",
    price: 229.90,
    category: "feminino"
  }),

  createProduct({
    id: "glamour-secrets-black",
    name: "Glamour Secrets Black Desodorante Colônia 75 ml",
    code: "74103",
    price: 164.90,
    category: "feminino"
  }),

  createProduct({
    id: "glamour-fever",
    name: "Glamour Fever Desodorante Colônia 75 ml",
    code: "84224",
    price: 164.90,
    category: "feminino"
  }),

  createProduct({
    id: "glamour-just-shine",
    name: "Glamour Just Shine Desodorante Colônia 75 ml",
    code: "84223",
    price: 199.90,
    category: "feminino"
  }),

  createProduct({
    id: "her-code",
    name: "Her Code Eau de Parfum 50 ml",
    code: "50022",
    price: 254.90,
    category: "feminino"
  }),

  createProduct({
    id: "her-code-touch",
    name: "Her Code Touch Eau de Parfum 50 ml",
    code: "59555",
    price: 213.91,
    category: "feminino"
  }),

  createProduct({
    id: "egeo-dolce",
    name: "Egeo Dolce Desodorante Colônia 90 ml",
    code: "82688",
    price: 122.90,
    category: "feminino",
    featured: 10
  }),

  createProduct({
    id: "egeo-choc",
    name: "Egeo Choc Desodorante Colônia 90 ml",
    code: "82689",
    price: 131.90,
    category: "feminino"
  }),

  createProduct({
    id: "botica-214-golden-gardenia",
    name: "Botica 214 Golden Gardênia Eau de Parfum 75 ml",
    code: "89261",
    price: 199.90,
    category: "feminino"
  }),

  createProduct({
    id: "boticollection-acqua-fresca",
    name: "Boticollection Acqua Fresca Desodorante Colônia 100 ml",
    code: "47905",
    price: 106.90,
    category: "feminino"
  }),

  /* =======================================================
     HIDRATANTES
  ======================================================= */

  createProduct({
    id: "nativa-spa-ameixa",
    name: "Loção Hidratante Nativa Spa Ameixa 400 ml",
    code: "48282",
    price: 89.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "nativa-spa-ameixa-negra",
    name: "Loção Hidratante Nativa Spa Ameixa Negra 400 ml",
    code: "48281",
    price: 89.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "nativa-spa-rose",
    name: "Loção Revitalizante Nativa Spa Rosé 400 ml",
    code: "75971",
    price: 89.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "nativa-spa-orquidea-noire",
    name: "Loção Noturna Nativa Spa Orquídea Noire 400 ml",
    code: "49958",
    price: 89.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "nativa-spa-quinoa",
    name: "Loção Firmadora Nativa Spa Quinoa 400 ml",
    code: "49954",
    price: 89.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "nativa-spa-uva-merlot",
    name: "Loção Nutritiva Nativa Spa Uva Merlot 400 ml",
    code: "58978",
    price: 89.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "cuide-se-bem-deleite",
    name: "Loção Hidratante Cuide-se Bem Deleite 400 ml",
    code: "75151",
    price: 78.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "cuide-se-bem-beijinho",
    name: "Loção Hidratante Cuide-se Bem Beijinho 400 ml",
    code: "49825",
    price: 78.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "nativa-spa-orquidea-lumiere",
    name: "Creme Perfumado Nativa Spa Orquídea Lumière 400 ml",
    code: "59823",
    price: 89.90,
    category: "hidratantes"
  }),

  createProduct({
    id: "nativa-spa-lilac",
    name: "Loção Renovadora Nativa Spa Lilac 400 ml",
    code: "53346",
    price: 89.90,
    category: "hidratantes"
  }),

  /* =======================================================
     SABONETES
  ======================================================= */

  createProduct({
    id: "sabonete-nativa-spa-ameixa",
    name: "Sabonete em Barra Nativa Spa Ameixa 3 unidades",
    code: "51423",
    price: 42.90,
    category: "sabonetes"
  }),

  createProduct({
    id: "kit-sabonete-morango-e-leite",
    name: "Kit de Sabonetes Cuide-se Bem Morango e Leite",
    code: "88311",
    price: 38.90,
    category: "sabonetes"
  }),

  createProduct({
    id: "sabonete-pessegura",
    name: "Sabonete em Barra Cuide-se Bem Pessegura",
    code: "94499",
    price: 38.90,
    category: "sabonetes"
  }),

  createProduct({
    id: "sabonete-rosa-e-algodao",
    name: "Sabonetes Cuide-se Bem Rosa e Algodão",
    code: "51165",
    price: 38.90,
    category: "sabonetes"
  }),

  createProduct({
    id: "sabonete-deleite",
    name: "Sabonete em Barra Cuide-se Bem Deleite",
    code: "85564",
    price: 38.90,
    category: "sabonetes"
  }),

  createProduct({
    id: "kit-sabonete-beijinho",
    name: "Kit de Sabonetes Cuide-se Bem Beijinho",
    code: "87373",
    price: 24.90,
    category: "sabonetes"
  }),

  createProduct({
    id: "sabonete-malbec",
    name: "Sabonete em Barra Malbec 4 unidades",
    code: "84654",
    price: 53.90,
    category: "sabonetes"
  }),

  createProduct({
    id: "sabonete-clash",
    name: "Sabonete em Barra Clash 2 unidades",
    code: "86870",
    price: 29.90,
    category: "sabonetes"
  }),

  createProduct({
    id: "instance-karite",
    name: "Sabonete Líquido Perfumado Instance Karité 400 ml",
    code: "52373",
    price: 49.99,
    category: "sabonetes"
  }),

  createProduct({
    id: "sabonete-liquido-deleite-caramelizado",
    name: "Sabonete Líquido Deleite Caramelizado 150 ml",
    code: "90998",
    price: 52.90,
    category: "sabonetes"
  })
].map((product, index) =>
  Object.freeze({
    ...product,
    originalOrder: index
  })
);

/* =========================================================
   ESTADO DO CATÁLOGO
========================================================= */

const state = {
  category: "todos",
  query: "",
  sort: "padrao",
  visibleLimit: CONFIG.initialProductLimit
};

const elements = {};

let lastFocusedElement = null;

/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

function cacheElements() {
  elements.siteHeader =
    document.getElementById("siteHeader");

  elements.mobileMenuToggle =
    document.getElementById("mobileMenuToggle");

  elements.mobileMenu =
    document.getElementById("mobileMenu");

  elements.mobileMenuBackdrop =
    document.getElementById("mobileMenuBackdrop");

  elements.mobileMenuClose =
    document.getElementById("mobileMenuClose");

  elements.siteSearchForm =
    document.getElementById("siteSearchForm");

  elements.siteSearchInput =
    document.getElementById("siteSearchInput");

  elements.featuredPrev =
    document.getElementById("featuredPrev");

  elements.featuredNext =
    document.getElementById("featuredNext");

  elements.featuredTrack =
    document.getElementById("featuredTrack");

  elements.catalogFilters =
    document.getElementById("catalogFilters");

  elements.catalogSearch =
    document.getElementById("catalogSearch");

  elements.catalogSort =
    document.getElementById("catalogSort");

  elements.catalogCount =
    document.getElementById("catalogCount");

  elements.productsGrid =
    document.getElementById("productsGrid");

  elements.catalogEmpty =
    document.getElementById("catalogEmpty");

  elements.clearFilters =
    document.getElementById("clearFilters");

  elements.loadMoreProducts =
    document.getElementById("loadMoreProducts");

  elements.catalogLoadMoreWrap =
    document.getElementById("catalogLoadMoreWrap");
}

/* =========================================================
   FUNÇÕES UTILITÁRIAS
========================================================= */

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatPrice(value) {
  return new Intl.NumberFormat(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  ).format(value);
}

/* =========================================================
   COPY PROFISSIONAL DOS PRODUTOS
========================================================= */

function createSalesCopy(product) {
  const name = normalizeText(product.name);

  const rules = [
    {
      test: () => name.includes("malbec"),

      copy:
        "Uma presença marcante para ocasiões que pedem personalidade.",

      description:
        "Linha reconhecida por seu estilo intenso e sofisticado, ideal para uso pessoal ou para um presente de impacto."
    },

    {
      test: () => name.includes("zaad"),

      copy:
        "Sofisticação masculina em uma escolha de alto padrão.",

      description:
        "Uma opção elegante para quem valoriza perfumaria refinada, apresentação premium e identidade marcante."
    },

    {
      test: () => name.includes("the blend"),

      copy:
        "Exclusividade e elegância para uma coleção especial.",

      description:
        "Perfumaria masculina com proposta sofisticada, criada para quem procura presença e acabamento premium."
    },

    {
      test: () => name.includes("quasar"),

      copy:
        "Versatilidade moderna para acompanhar todos os dias.",

      description:
        "Uma escolha prática para rotina, trabalho e momentos casuais, com apresentação limpa e masculina."
    },

    {
      test: () => name.includes("arbo"),

      copy:
        "Leveza e liberdade em uma escolha masculina versátil.",

      description:
        "Uma opção equilibrada para o dia a dia, perfeita para quem busca praticidade sem abrir mão de personalidade."
    },

    {
      test: () => name.includes("uomini"),

      copy:
        "Estilo contemporâneo para homens que cuidam da própria imagem.",

      description:
        "Uma opção masculina de presença elegante, indicada para diferentes momentos e perfis."
    },

    {
      test: () => name.includes("coffee"),

      copy:
        "Uma escolha envolvente para fugir do comum.",

      description:
        "Perfumaria com identidade marcante, ideal para transformar a rotina ou surpreender em um presente."
    },

    {
      test: () => name.includes("lily"),

      copy:
        "Elegância feminina em uma apresentação delicada e sofisticada.",

      description:
        "Uma escolha premium para quem valoriza beleza, cuidado e uma perfumaria com forte apelo para presente."
    },

    {
      test: () => name.includes("floratta"),

      copy:
        "Delicadeza e charme para tornar cada momento mais especial.",

      description:
        "Uma opção feminina versátil, perfeita para uso diário, coleção pessoal ou para presentear."
    },

    {
      test: () => name.includes("elysee"),

      copy:
        "Sofisticação feminina para ocasiões memoráveis.",

      description:
        "Uma escolha elegante e marcante, com apresentação premium para quem procura um presente especial."
    },

    {
      test: () =>
        name.startsWith("liz ") ||
        name === "liz desodorante colonia 100 ml",

      copy:
        "Personalidade e confiança em uma escolha feminina contemporânea.",

      description:
        "Uma opção versátil para acompanhar a rotina, valorizar o autocuidado e completar uma coleção."
    },

    {
      test: () => name.includes("glamour"),

      copy:
        "Brilho e presença para quem gosta de se destacar.",

      description:
        "Perfumaria feminina com apresentação marcante, ideal para ocasiões especiais ou para presentear."
    },

    {
      test: () => name.includes("her code"),

      copy:
        "Uma escolha moderna, elegante e cheia de personalidade.",

      description:
        "Perfumaria feminina com proposta sofisticada para quem busca exclusividade e presença."
    },

    {
      test: () => name.includes("egeo"),

      copy:
        "Personalidade jovem em uma escolha moderna e desejada.",

      description:
        "Uma opção descontraída para uso pessoal ou presente, com excelente apelo visual no catálogo."
    },

    {
      test: () =>
        name.includes("botica 214") ||
        name.includes("boticollection"),

      copy:
        "Uma escolha elegante para transformar sua coleção.",

      description:
        "Perfumaria com apresentação especial, indicada para quem valoriza beleza, cuidado e personalidade."
    },

    {
      test: () =>
        product.category === "hidratantes",

      copy:
        "Autocuidado com apresentação premium para sua rotina.",

      description:
        "Uma opção prática para hidratar, perfumar e deixar os momentos de cuidado corporal ainda mais especiais."
    },

    {
      test: () =>
        product.category === "sabonetes",

      copy:
        "Cuidado e perfumação para elevar o banho diário.",

      description:
        "Uma escolha versátil para uso pessoal, presentes e composição de kits elegantes."
    },

    {
      test: () =>
        product.category === "feminino",

      copy:
        "Uma escolha feminina elegante para completar sua coleção.",

      description:
        "Produto selecionado para uso pessoal ou presente, com atendimento personalizado pelo WhatsApp."
    }
  ];

  const match = rules.find(
    (rule) => rule.test()
  );

  if (match) {
    return {
      copy: match.copy,
      description: match.description
    };
  }

  return {
    copy:
      "Uma escolha masculina com presença e personalidade.",

    description:
      "Produto selecionado para uso pessoal ou presente, com atendimento personalizado pelo WhatsApp."
  };
}

/* =========================================================
   WHATSAPP
========================================================= */

function createWhatsAppMessage(product) {
  return [
    "Olá! Vim pelo site da Ana Essenci e tenho interesse neste produto:",
    "",
    `Produto: ${product.name}`,
    `Código: ${product.code}`,
    `Preço: ${formatPrice(product.price)}`,
    "",
    "Pode confirmar a disponibilidade, as formas de pagamento e o valor da entrega?"
  ].join("\n");
}

function createProductWhatsAppUrl(product) {
  const message = encodeURIComponent(
    createWhatsAppMessage(product)
  );

  return (
    `https://wa.me/${CONFIG.whatsappNumber}` +
    `?text=${message}`
  );
}

/* =========================================================
   CARD DE PRODUTO
========================================================= */

function createProductCard(
  product,
  isFeatured = false
) {
  const salesCopy =
    createSalesCopy(product);

  const productName =
    escapeHtml(product.name);

  const categoryText =
    `${product.brand} • ${product.categoryLabel}`;

  return `
    <article
      class="product-card"
      data-product-id="${escapeHtml(product.id)}"
    >
      <div class="product-card__media">

        ${
          isFeatured
            ? `
              <span class="product-card__badge">
                Mais vendido
              </span>
            `
            : ""
        }

        <img
          class="product-card__image"
          src="${escapeHtml(product.image)}"
          alt="${productName}"
          loading="${isFeatured ? "eager" : "lazy"}"
          decoding="async"
        >

      </div>

      <div class="product-card__content">

        <span class="product-card__brand">
          ${escapeHtml(categoryText)}
        </span>

        <h3 class="product-card__title">
          ${productName}
        </h3>

        <p class="product-card__copy">
          ${escapeHtml(salesCopy.copy)}
        </p>

        <p class="product-card__description">
          ${escapeHtml(salesCopy.description)}
        </p>

        <p class="product-card__code">
          Código:
          <strong>
            ${escapeHtml(product.code)}
          </strong>
        </p>

        <div class="product-card__meta">

          <div>
            <span class="product-card__price-label">
              Preço
            </span>

            <strong class="product-card__price">
              ${formatPrice(product.price)}
            </strong>

            <span class="product-card__payment">
              Consulte pagamento e entrega
            </span>
          </div>

          <a
            class="product-card__whatsapp"
            href="${createProductWhatsAppUrl(product)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comprar ${productName} pelo WhatsApp"
            title="Comprar pelo WhatsApp"
          >
            <svg aria-hidden="true">
              <use href="#icon-whatsapp"></use>
            </svg>
          </a>

        </div>

      </div>
    </article>
  `;
}

/* =========================================================
   PROTEÇÃO PARA IMAGENS AUSENTES
========================================================= */

function configureImageFallbacks(container) {
  if (!container) {
    return;
  }

  const images =
    container.querySelectorAll(
      ".product-card__image"
    );

  images.forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        if (
          image.dataset.fallbackApplied ===
          "true"
        ) {
          return;
        }

        image.dataset.fallbackApplied =
          "true";

        image.src =
          CONFIG.imageFallback;

        image.alt =
          "Imagem do produto temporariamente indisponível";

        image.style.padding =
          "22%";

        image.style.opacity =
          "0.72";
      },
      {
        once: true
      }
    );
  });
}

/* =========================================================
   MAIS VENDIDOS
========================================================= */

function getFeaturedProducts() {
  return PRODUCTS
    .filter(
      (product) =>
        product.featured > 0
    )
    .sort(
      (productA, productB) =>
        productA.featured -
        productB.featured
    )
    .slice(0, 10);
}

function renderFeaturedProducts() {
  if (!elements.featuredTrack) {
    return;
  }

  elements.featuredTrack.innerHTML =
    getFeaturedProducts()
      .map(
        (product) =>
          createProductCard(
            product,
            true
          )
      )
      .join("");

  configureImageFallbacks(
    elements.featuredTrack
  );
}

/* =========================================================
   FILTRO, PESQUISA E ORDENAÇÃO
========================================================= */

function getFilteredProducts() {
  const query =
    normalizeText(state.query);

  let result =
    PRODUCTS.filter((product) => {
      const matchesCategory =
        state.category === "todos" ||
        product.category ===
          state.category;

      const salesCopy =
        createSalesCopy(product);

      const searchableText =
        normalizeText(
          [
            product.name,
            product.code,
            product.brand,
            product.categoryLabel,
            salesCopy.copy,
            salesCopy.description
          ].join(" ")
        );

      const matchesQuery =
        query === "" ||
        searchableText.includes(query);

      return (
        matchesCategory &&
        matchesQuery
      );
    });

  if (state.sort === "nome") {
    result = [...result].sort(
      (productA, productB) =>
        productA.name.localeCompare(
          productB.name,
          "pt-BR",
          {
            sensitivity: "base"
          }
        )
    );
  } else if (
    state.sort === "menor-preco"
  ) {
    result = [...result].sort(
      (productA, productB) =>
        productA.price -
        productB.price
    );
  } else if (
    state.sort === "maior-preco"
  ) {
    result = [...result].sort(
      (productA, productB) =>
        productB.price -
        productA.price
    );
  } else {
    result = [...result].sort(
      (productA, productB) => {
        const featuredA =
          productA.featured > 0
            ? productA.featured
            : Number.POSITIVE_INFINITY;

        const featuredB =
          productB.featured > 0
            ? productB.featured
            : Number.POSITIVE_INFINITY;

        if (
          featuredA !== featuredB
        ) {
          return (
            featuredA -
            featuredB
          );
        }

        return (
          productA.originalOrder -
          productB.originalOrder
        );
      }
    );
  }

  return result;
}

/* =========================================================
   RESUMO DO CATÁLOGO
========================================================= */

function updateCatalogSummary(
  total,
  visible
) {
  if (elements.catalogCount) {
    if (total === 0) {
      elements.catalogCount.textContent =
        "Nenhum produto encontrado.";
    } else if (total === 1) {
      elements.catalogCount.textContent =
        "1 produto encontrado.";
    } else {
      elements.catalogCount.textContent =
        `Exibindo ${visible} de ${total} produtos.`;
    }
  }

  if (elements.catalogEmpty) {
    elements.catalogEmpty.hidden =
      total !== 0;
  }

  if (
    elements.catalogLoadMoreWrap
  ) {
    elements.catalogLoadMoreWrap
      .classList.toggle(
        "is-hidden",
        total === 0 ||
        visible >= total
      );
  }
}

/* =========================================================
   RENDERIZAÇÃO DO CATÁLOGO
========================================================= */

function renderCatalog() {
  if (!elements.productsGrid) {
    return;
  }

  const filteredProducts =
    getFilteredProducts();

  const visibleProducts =
    filteredProducts.slice(
      0,
      state.visibleLimit
    );

  elements.productsGrid.innerHTML =
    visibleProducts
      .map(
        (product) =>
          createProductCard(product)
      )
      .join("");

  configureImageFallbacks(
    elements.productsGrid
  );

  updateCatalogSummary(
    filteredProducts.length,
    visibleProducts.length
  );
}

/* =========================================================
   CONTROLE DE CATEGORIA
========================================================= */

function setCategory(category) {
  state.category = category;

  state.visibleLimit =
    CONFIG.initialProductLimit;

  elements.catalogFilters
    ?.querySelectorAll(
      "[data-category]"
    )
    .forEach((button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.category ===
          category
      );
    });

  renderCatalog();
}

/* =========================================================
   CONTROLE DA PESQUISA
========================================================= */

function setSearchQuery(query) {
  state.query = query;

  state.visibleLimit =
    CONFIG.initialProductLimit;

  if (
    elements.catalogSearch &&
    elements.catalogSearch.value !== query
  ) {
    elements.catalogSearch.value =
      query;
  }

  if (
    elements.siteSearchInput &&
    elements.siteSearchInput.value !== query
  ) {
    elements.siteSearchInput.value =
      query;
  }

  renderCatalog();
}

/* =========================================================
   LIMPAR FILTROS
========================================================= */

function resetCatalog() {
  state.category = "todos";
  state.query = "";
  state.sort = "padrao";

  state.visibleLimit =
    CONFIG.initialProductLimit;

  if (elements.catalogSearch) {
    elements.catalogSearch.value = "";
  }

  if (elements.siteSearchInput) {
    elements.siteSearchInput.value = "";
  }

  if (elements.catalogSort) {
    elements.catalogSort.value =
      "padrao";
  }

  setCategory("todos");
}

/* =========================================================
   EVENTOS DO CATÁLOGO
========================================================= */

function setupCatalogEvents() {
  elements.catalogFilters
    ?.addEventListener(
      "click",
      (event) => {
        const button =
          event.target.closest(
            "[data-category]"
          );

        if (!button) {
          return;
        }

        setCategory(
          button.dataset.category
        );
      }
    );

  elements.catalogSearch
    ?.addEventListener(
      "input",
      (event) => {
        setSearchQuery(
          event.target.value
        );
      }
    );

  elements.catalogSort
    ?.addEventListener(
      "change",
      (event) => {
        state.sort =
          event.target.value;

        state.visibleLimit =
          CONFIG.initialProductLimit;

        renderCatalog();
      }
    );

  elements.loadMoreProducts
    ?.addEventListener(
      "click",
      () => {
        state.visibleLimit +=
          CONFIG.productLimitStep;

        renderCatalog();
      }
    );

  elements.clearFilters
    ?.addEventListener(
      "click",
      resetCatalog
    );
}

/* =========================================================
   PESQUISA DO CABEÇALHO
========================================================= */

function setupHeaderSearch() {
  elements.siteSearchForm
    ?.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        const query =
          elements.siteSearchInput
            ?.value
            .trim() ?? "";

        setSearchQuery(query);

        document
          .getElementById("catalogo")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
      }
    );
}

/* =========================================================
   MENU DO CELULAR
========================================================= */

function openMobileMenu() {
  if (
    !elements.mobileMenu ||
    !elements.mobileMenuBackdrop
  ) {
    return;
  }

  lastFocusedElement =
    document.activeElement;

  elements.mobileMenu
    .classList.add("is-open");

  elements.mobileMenuBackdrop
    .classList.add("is-visible");

  elements.mobileMenu
    .setAttribute(
      "aria-hidden",
      "false"
    );

  elements.mobileMenuToggle
    ?.setAttribute(
      "aria-expanded",
      "true"
    );

  document.body
    .classList.add("menu-is-open");

  window.setTimeout(() => {
    elements.mobileMenuClose
      ?.focus();
  }, 50);
}

function closeMobileMenu({
  restoreFocus = true
} = {}) {
  elements.mobileMenu
    ?.classList.remove("is-open");

  elements.mobileMenuBackdrop
    ?.classList.remove("is-visible");

  elements.mobileMenu
    ?.setAttribute(
      "aria-hidden",
      "true"
    );

  elements.mobileMenuToggle
    ?.setAttribute(
      "aria-expanded",
      "false"
    );

  document.body
    .classList.remove("menu-is-open");

  if (
    restoreFocus &&
    lastFocusedElement instanceof HTMLElement
  ) {
    lastFocusedElement.focus();
  }
}

function setupMobileMenu() {
  elements.mobileMenuToggle
    ?.addEventListener(
      "click",
      () => {
        const isOpen =
          elements.mobileMenu
            ?.classList
            .contains("is-open");

        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      }
    );

  elements.mobileMenuClose
    ?.addEventListener(
      "click",
      () => closeMobileMenu()
    );

  elements.mobileMenuBackdrop
    ?.addEventListener(
      "click",
      () => closeMobileMenu()
    );

  elements.mobileMenu
    ?.querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        () => {
          closeMobileMenu({
            restoreFocus: false
          });
        }
      );
    });

  document.addEventListener(
    "keydown",
    (event) => {
      const isOpen =
        elements.mobileMenu
          ?.classList
          .contains("is-open");

      if (
        event.key === "Escape" &&
        isOpen
      ) {
        closeMobileMenu();
      }
    }
  );

  window.addEventListener(
    "resize",
    () => {
      if (
        window.innerWidth > 920
      ) {
        closeMobileMenu({
          restoreFocus: false
        });
      }
    }
  );
}

/* =========================================================
   CARROSSEL DOS MAIS VENDIDOS
========================================================= */

function getFeaturedScrollAmount() {
  const firstCard =
    elements.featuredTrack
      ?.querySelector(
        ".product-card"
      );

  if (
    !firstCard ||
    !elements.featuredTrack
  ) {
    return 300;
  }

  const styles =
    window.getComputedStyle(
      elements.featuredTrack
    );

  const gap =
    Number.parseFloat(
      styles.columnGap ||
      styles.gap
    ) || 24;

  return (
    firstCard
      .getBoundingClientRect()
      .width +
    gap
  );
}

function setupFeaturedSlider() {
  elements.featuredPrev
    ?.addEventListener(
      "click",
      () => {
        elements.featuredTrack
          ?.scrollBy({
            left:
              -getFeaturedScrollAmount(),

            behavior: "smooth"
          });
      }
    );

  elements.featuredNext
    ?.addEventListener(
      "click",
      () => {
        elements.featuredTrack
          ?.scrollBy({
            left:
              getFeaturedScrollAmount(),

            behavior: "smooth"
          });
      }
    );
}

/* =========================================================
   CABEÇALHO AO ROLAR
========================================================= */

function setupStickyHeader() {
  const updateHeader = () => {
    elements.siteHeader
      ?.classList.toggle(
        "is-scrolled",
        window.scrollY > 16
      );
  };

  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

  updateHeader();
}

/* =========================================================
   ITEM ATIVO DO MENU
========================================================= */

function setupActiveNavigation() {
  const navigationLinks = [
    ...document.querySelectorAll(
      '.main-nav a[href^="#"]'
    )
  ];

  const sections = [
    ...document.querySelectorAll(
      "main section[id]"
    )
  ];

  if (
    !(
      "IntersectionObserver"
      in window
    ) ||
    navigationLinks.length === 0
  ) {
    return;
  }

  const observer =
    new IntersectionObserver(
      (entries) => {
        const visibleEntry =
          entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (entryA, entryB) =>
                entryB.intersectionRatio -
                entryA.intersectionRatio
            )[0];

        if (!visibleEntry) {
          return;
        }

        navigationLinks.forEach(
          (link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") ===
                `#${visibleEntry.target.id}`
            );
          }
        );
      },
      {
        rootMargin:
          "-35% 0px -55% 0px",

        threshold:
          [0, 0.1, 0.25, 0.5]
      }
    );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

/* =========================================================
   LINKS GERAIS DO WHATSAPP
========================================================= */

function setupGeneralWhatsAppLinks() {
  const selector =
    `a[href="${CONFIG.whatsappGeneralUrl}"]`;

  document
    .querySelectorAll(selector)
    .forEach((link) => {
      link.setAttribute(
        "target",
        "_blank"
      );

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );
    });
}

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function initializeSite() {
  cacheElements();

  renderFeaturedProducts();
  renderCatalog();

  setupCatalogEvents();
  setupHeaderSearch();
  setupMobileMenu();
  setupFeaturedSlider();
  setupStickyHeader();
  setupActiveNavigation();
  setupGeneralWhatsAppLinks();
}

document.addEventListener(
  "DOMContentLoaded",
  initializeSite
);