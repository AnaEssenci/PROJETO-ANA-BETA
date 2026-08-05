"use strict";

/* =========================================================
   ANA ESSENCI — SCRIPT.JS
   Catálogo, pesquisa, filtros, WhatsApp, menu e carrossel
========================================================= */

/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const CONFIGURACOES = {
  whatsappNumero: "5562998390546",

  whatsappGeral:
    "https://wa.me/message/RFPQVIOKJU7AJ1",

  email:
    "loja.anaessenci@gmail.com",

  quantidadeInicial: 15,

  quantidadePorClique: 15
};

/* =========================================================
   CATEGORIAS
========================================================= */

const NOMES_CATEGORIAS = {
  masculino: "Perfume masculino",
  feminino: "Perfume feminino",
  hidratantes: "Hidratante corporal",
  sabonetes: "Sabonete"
};

/* =========================================================
   CRIAÇÃO DOS PRODUTOS
========================================================= */

function produto(
  id,
  nome,
  codigo,
  preco,
  categoria,
  destaque = 0
) {
  return {
    id,
    nome,
    codigo: String(codigo),
    preco,
    categoria,
    categoriaNome: NOMES_CATEGORIAS[categoria],
    marca: "O Boticário",
    imagem: `produtos/${categoria}/${id}.webp`,
    destaque
  };
}

/* =========================================================
   PRODUTOS

   Zaad Venture não foi incluído porque a imagem não existe.
========================================================= */

const PRODUTOS_BASE = [

  /* =======================================================
     PERFUMES MASCULINOS
  ======================================================= */

  produto(
    "malbec",
    "Malbec Desodorante Colônia 100 ml",
    "84387",
    209.90,
    "masculino",
    1
  ),

  produto(
    "malbec-gold",
    "Malbec Gold Desodorante Colônia 100 ml",
    "73849",
    249.90,
    "masculino",
    2
  ),

  produto(
    "malbec-x",
    "Malbec X Desodorante Colônia 100 ml",
    "30192",
    224.91,
    "masculino"
  ),

  produto(
    "malbec-black",
    "Malbec Black Desodorante Colônia 100 ml",
    "74723",
    259.90,
    "masculino"
  ),

  produto(
    "malbec-ultra-bleu",
    "Malbec Ultra Bleu Desodorante Colônia 100 ml",
    "50119",
    229.90,
    "masculino",
    3
  ),

  produto(
    "malbec-pure-gold",
    "Malbec Pure Gold Desodorante Colônia 100 ml",
    "58506",
    249.90,
    "masculino"
  ),

  produto(
    "malbec-signature",
    "Malbec Signature Eau de Parfum 90 ml",
    "48134",
    359.90,
    "masculino"
  ),

  produto(
    "malbec-magnetic",
    "Malbec Magnetic Desodorante Colônia 100 ml",
    "73743",
    249.90,
    "masculino"
  ),

  produto(
    "malbec-noir",
    "Malbec Noir Desodorante Colônia 100 ml",
    "84388",
    259.90,
    "masculino"
  ),

  produto(
    "zaad",
    "Zaad Eau de Parfum 95 ml",
    "47950",
    314.91,
    "masculino",
    4
  ),

  produto(
    "zaad-expedition",
    "Zaad Expedition Eau de Parfum 95 ml",
    "46898",
    349.90,
    "masculino"
  ),

  produto(
    "zaad-santal",
    "Zaad Santal Eau de Parfum 95 ml",
    "81382",
    349.90,
    "masculino"
  ),

  produto(
    "zaad-intense",
    "Zaad Intense Eau de Parfum 95 ml",
    "58644",
    300.88,
    "masculino"
  ),

  produto(
    "quasar-blue",
    "Quasar Blue Desodorante Colônia 100 ml",
    "51244",
    189.90,
    "masculino"
  ),

  produto(
    "quasar-brave",
    "Quasar Brave Desodorante Colônia 100 ml",
    "51242",
    189.90,
    "masculino"
  ),

  produto(
    "quasar-vision",
    "Quasar Vision Desodorante Colônia 100 ml",
    "50662",
    189.90,
    "masculino"
  ),

  produto(
    "quasar-deep-blue",
    "Quasar Deep Blue Desodorante Colônia 100 ml",
    "58526",
    141.89,
    "masculino"
  ),

  produto(
    "quasar-rush",
    "Quasar Rush Desodorante Colônia 100 ml",
    "50820",
    113.90,
    "masculino"
  ),

  produto(
    "arbo",
    "Arbo Desodorante Colônia 100 ml",
    "74438",
    189.90,
    "masculino"
  ),

  produto(
    "arbo-reserva",
    "Arbo Reserva Desodorante Colônia 100 ml",
    "81138",
    189.90,
    "masculino"
  ),

  produto(
    "arbo-liberte",
    "Arbo Liberté Desodorante Colônia 100 ml",
    "74440",
    189.90,
    "masculino"
  ),

  produto(
    "arbo-atlantica",
    "Arbo Atlântica Desodorante Colônia 100 ml",
    "55366",
    189.90,
    "masculino"
  ),

  produto(
    "uomini",
    "Uomini Desodorante Colônia 100 ml",
    "49765",
    209.90,
    "masculino"
  ),

  produto(
    "uomini-black",
    "Uomini Black Desodorante Colônia 100 ml",
    "49766",
    209.90,
    "masculino"
  ),

  produto(
    "uomini-infinite",
    "Uomini Infinite Desodorante Colônia 100 ml",
    "50418",
    209.90,
    "masculino"
  ),

  produto(
    "egeo-bomb-black",
    "Egeo Bomb Black Desodorante Colônia 90 ml",
    "82685",
    164.90,
    "masculino"
  ),

  produto(
    "coffee-man-sense",
    "Coffee Man Sense Desodorante Colônia 100 ml",
    "80972",
    229.90,
    "masculino"
  ),

  produto(
    "coffee-man-duo",
    "Coffee Man Duo Desodorante Colônia 100 ml",
    "73614",
    159.90,
    "masculino"
  ),

  produto(
    "coffee-man-seduction",
    "Coffee Man Seduction Desodorante Colônia 100 ml",
    "48365",
    229.90,
    "masculino"
  ),

  produto(
    "the-blend-bourbon",
    "The Blend Bourbon Eau de Parfum 100 ml",
    "77489",
    379.90,
    "masculino"
  ),

  produto(
    "the-blend-cardamom",
    "The Blend Cardamom Eau de Parfum 100 ml",
    "83529",
    379.90,
    "masculino"
  ),

  produto(
    "clash",
    "Clash Desodorante Colônia 100 ml",
    "50677",
    179.90,
    "masculino"
  ),

  produto(
    "egeo-blue",
    "Egeo Blue Desodorante Colônia 90 ml",
    "82686",
    164.90,
    "masculino"
  ),

  produto(
    "botica-214-verano-en-firenze",
    "Botica 214 Verano en Firenze Eau de Parfum 75 ml",
    "47553",
    249.90,
    "masculino"
  ),

  /* =======================================================
     PERFUMES FEMININOS
  ======================================================= */

  produto(
    "lily-eau-de-parfum",
    "Lily Eau de Parfum 75 ml",
    "77524",
    329.90,
    "feminino",
    5
  ),

  produto(
    "lily-lumiere",
    "Lily Lumière Eau de Parfum 75 ml",
    "77989",
    279.89,
    "feminino"
  ),

  produto(
    "lily-absolu",
    "Lily Absolu Eau de Parfum 75 ml",
    "77988",
    329.90,
    "feminino"
  ),

  produto(
    "lily-gardenia",
    "Lily Gardénia Eau de Parfum 75 ml",
    "55363",
    280.42,
    "feminino",
    6
  ),

  produto(
    "lily-le-parfum",
    "Lily Le Parfum 30 ml",
    "48734",
    339.90,
    "feminino"
  ),

  produto(
    "floratta-red",
    "Floratta Red Desodorante Colônia 75 ml",
    "75792",
    147.90,
    "feminino",
    7
  ),

  produto(
    "floratta-blue",
    "Floratta Blue Desodorante Colônia 75 ml",
    "25458",
    174.90,
    "feminino",
    8
  ),

  produto(
    "floratta-my-blue",
    "Floratta My Blue Desodorante Colônia 75 ml",
    "01004",
    79.89,
    "feminino"
  ),

  produto(
    "floratta-flores-secretas",
    "Floratta Flores Secretas Desodorante Colônia 75 ml",
    "48136",
    104.91,
    "feminino"
  ),

  produto(
    "floratta-fleur-supreme",
    "Floratta Fleur Suprême Eau de Parfum 75 ml",
    "75877",
    229.90,
    "feminino"
  ),

  produto(
    "floratta-romance-de-verao",
    "Floratta Romance de Verão Desodorante Colônia 75 ml",
    "55659",
    121.91,
    "feminino"
  ),

  produto(
    "floratta-rose",
    "Floratta Rose Desodorante Colônia 75 ml",
    "48635",
    174.90,
    "feminino"
  ),

  produto(
    "floratta-red-blossom",
    "Floratta Red Blossom Desodorante Colônia 75 ml",
    "49973",
    174.90,
    "feminino"
  ),

  produto(
    "elysee",
    "Elysée Eau de Parfum 50 ml",
    "53518",
    329.90,
    "feminino",
    9
  ),

  produto(
    "elysee-blanc",
    "Elysée Blanc Eau de Parfum 50 ml",
    "48143",
    329.90,
    "feminino"
  ),

  produto(
    "elysee-nuit",
    "Elysée Nuit Eau de Parfum 50 ml",
    "48146",
    329.90,
    "feminino"
  ),

  produto(
    "elysee-succes",
    "Elysée Succès Eau de Parfum 50 ml",
    "81331",
    279.89,
    "feminino"
  ),

  produto(
    "leau-de-lily-blanche",
    "L’Eau de Lily Blanche Desodorante Colônia 75 ml",
    "86895",
    229.90,
    "feminino"
  ),

  produto(
    "liz",
    "Liz Desodorante Colônia 100 ml",
    "76700",
    179.90,
    "feminino"
  ),

  produto(
    "liz-intenso",
    "Liz Intenso Desodorante Colônia 100 ml",
    "53415",
    179.90,
    "feminino"
  ),

  produto(
    "liz-sublime",
    "Liz Sublime Desodorante Colônia 100 ml",
    "47339",
    149.89,
    "feminino"
  ),

  produto(
    "liz-flora",
    "Liz Flora Desodorante Colônia 100 ml",
    "59466",
    124.90,
    "feminino"
  ),

  produto(
    "coffee-woman-seduction",
    "Coffee Woman Seduction Desodorante Colônia 100 ml",
    "48139",
    229.90,
    "feminino"
  ),

  produto(
    "coffee-woman-duo",
    "Coffee Woman Duo Desodorante Colônia 100 ml",
    "73613",
    189.90,
    "feminino"
  ),

  produto(
    "coffee-addictive",
    "Coffee Addictive Desodorante Colônia 100 ml",
    "56385",
    229.90,
    "feminino"
  ),

  produto(
    "coffee-woman-sense",
    "Coffee Woman Sense Desodorante Colônia 100 ml",
    "80971",
    229.90,
    "feminino"
  ),

  produto(
    "glamour-secrets-black",
    "Glamour Secrets Black Desodorante Colônia 75 ml",
    "74103",
    164.90,
    "feminino"
  ),

  produto(
    "glamour-fever",
    "Glamour Fever Desodorante Colônia 75 ml",
    "84224",
    164.90,
    "feminino"
  ),

  produto(
    "glamour-just-shine",
    "Glamour Just Shine Desodorante Colônia 75 ml",
    "84223",
    199.90,
    "feminino"
  ),

  produto(
    "her-code",
    "Her Code Eau de Parfum 50 ml",
    "50022",
    254.90,
    "feminino"
  ),

  produto(
    "her-code-touch",
    "Her Code Touch Eau de Parfum 50 ml",
    "59555",
    213.91,
    "feminino"
  ),

  produto(
    "egeo-dolce",
    "Egeo Dolce Desodorante Colônia 90 ml",
    "82688",
    122.90,
    "feminino",
    10
  ),

  produto(
    "egeo-choc",
    "Egeo Choc Desodorante Colônia 90 ml",
    "82689",
    131.90,
    "feminino"
  ),

  produto(
    "botica-214-golden-gardenia",
    "Botica 214 Golden Gardênia Eau de Parfum 75 ml",
    "89261",
    199.90,
    "feminino"
  ),

  produto(
    "boticollection-acqua-fresca",
    "Boticollection Acqua Fresca Desodorante Colônia 100 ml",
    "47905",
    106.90,
    "feminino"
  ),

  /* =======================================================
     HIDRATANTES
  ======================================================= */

  produto(
    "nativa-spa-ameixa",
    "Loção Hidratante Nativa Spa Ameixa 400 ml",
    "48282",
    89.90,
    "hidratantes"
  ),

  produto(
    "nativa-spa-ameixa-negra",
    "Loção Hidratante Nativa Spa Ameixa Negra 400 ml",
    "48281",
    89.90,
    "hidratantes"
  ),

  produto(
    "nativa-spa-rose",
    "Loção Revitalizante Nativa Spa Rosé 400 ml",
    "75971",
    89.90,
    "hidratantes"
  ),

  produto(
    "nativa-spa-orquidea-noire",
    "Loção Noturna Nativa Spa Orquídea Noire 400 ml",
    "49958",
    89.90,
    "hidratantes"
  ),

  produto(
    "nativa-spa-quinoa",
    "Loção Firmadora Nativa Spa Quinoa 400 ml",
    "49954",
    89.90,
    "hidratantes"
  ),

  produto(
    "nativa-spa-uva-merlot",
    "Loção Nutritiva Nativa Spa Uva Merlot 400 ml",
    "58978",
    89.90,
    "hidratantes"
  ),

  produto(
    "cuide-se-bem-deleite",
    "Loção Hidratante Cuide-se Bem Deleite 400 ml",
    "75151",
    78.90,
    "hidratantes"
  ),

  produto(
    "cuide-se-bem-beijinho",
    "Loção Hidratante Cuide-se Bem Beijinho 400 ml",
    "49825",
    78.90,
    "hidratantes"
  ),

  produto(
    "nativa-spa-orquidea-lumiere",
    "Creme Perfumado Nativa Spa Orquídea Lumière 400 ml",
    "59823",
    89.90,
    "hidratantes"
  ),

  produto(
    "nativa-spa-lilac",
    "Loção Renovadora Nativa Spa Lilac 400 ml",
    "53346",
    89.90,
    "hidratantes"
  ),

  /* =======================================================
     SABONETES
  ======================================================= */

  produto(
    "sabonete-nativa-spa-ameixa",
    "Sabonete em Barra Nativa Spa Ameixa 3 unidades",
    "51423",
    42.90,
    "sabonetes"
  ),

  produto(
    "kit-sabonete-morango-e-leite",
    "Kit de Sabonetes Cuide-se Bem Morango e Leite",
    "88311",
    38.90,
    "sabonetes"
  ),

  produto(
    "sabonete-pessegura",
    "Sabonete em Barra Cuide-se Bem Pessegura",
    "94499",
    38.90,
    "sabonetes"
  ),

  produto(
    "sabonete-rosa-e-algodao",
    "Sabonetes Cuide-se Bem Rosa e Algodão",
    "51165",
    38.90,
    "sabonetes"
  ),

  produto(
    "sabonete-deleite",
    "Sabonete em Barra Cuide-se Bem Deleite",
    "85564",
    38.90,
    "sabonetes"
  ),

  produto(
    "kit-sabonete-beijinho",
    "Kit de Sabonetes Cuide-se Bem Beijinho",
    "87373",
    24.90,
    "sabonetes"
  ),

  produto(
    "sabonete-malbec",
    "Sabonete em Barra Malbec 4 unidades",
    "84654",
    53.90,
    "sabonetes"
  ),

  produto(
    "sabonete-clash",
    "Sabonete em Barra Clash 2 unidades",
    "86870",
    29.90,
    "sabonetes"
  ),

  produto(
    "instance-karite",
    "Sabonete Líquido Perfumado Instance Karité 400 ml",
    "52373",
    49.99,
    "sabonetes"
  ),

  produto(
    "sabonete-liquido-deleite-caramelizado",
    "Sabonete Líquido Deleite Caramelizado 150 ml",
    "90998",
    52.90,
    "sabonetes"
  )
];

/* =========================================================
   DESCRIÇÕES COMERCIAIS
========================================================= */

function normalizarTexto(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function criarDescricao(produtoAtual) {
  const nome = normalizarTexto(produtoAtual.nome);

  if (nome.includes("malbec")) {
    return {
      chamada:
        "Presença e personalidade em uma escolha marcante.",
      descricao:
        "Uma opção especial de perfumaria masculina para uso pessoal ou para presentear."
    };
  }

  if (nome.includes("zaad")) {
    return {
      chamada:
        "Sofisticação para quem valoriza escolhas elegantes.",
      descricao:
        "Uma fragrância masculina para completar uma coleção especial e cheia de personalidade."
    };
  }

  if (nome.includes("quasar")) {
    return {
      chamada:
        "Uma escolha moderna para acompanhar sua rotina.",
      descricao:
        "Perfume masculino versátil para diferentes momentos e ocasiões."
    };
  }

  if (nome.includes("arbo")) {
    return {
      chamada:
        "Leveza e personalidade para todos os momentos.",
      descricao:
        "Uma opção masculina prática para uso diário ou para presentear."
    };
  }

  if (nome.includes("uomini")) {
    return {
      chamada:
        "Estilo e presença para uma rotina mais especial.",
      descricao:
        "Uma escolha de perfumaria masculina para quem gosta de cuidar da imagem."
    };
  }

  if (nome.includes("the blend")) {
    return {
      chamada:
        "Uma escolha sofisticada para elevar sua coleção.",
      descricao:
        "Uma opção especial para quem procura elegância e personalidade."
    };
  }

  if (nome.includes("coffee")) {
    return {
      chamada:
        "Uma escolha envolvente para fugir do comum.",
      descricao:
        "Perfume com personalidade para uso pessoal ou para surpreender em um presente."
    };
  }

  if (nome.includes("lily")) {
    return {
      chamada:
        "Elegância e delicadeza em uma escolha especial.",
      descricao:
        "Uma opção feminina sofisticada para sua coleção ou para presentear."
    };
  }

  if (nome.includes("floratta")) {
    return {
      chamada:
        "Delicadeza para deixar cada momento mais especial.",
      descricao:
        "Uma escolha feminina versátil para completar sua rotina de perfumaria."
    };
  }

  if (nome.includes("elysee")) {
    return {
      chamada:
        "Sofisticação e presença em uma escolha feminina.",
      descricao:
        "Uma opção elegante para ocasiões especiais ou para transformar um presente."
    };
  }

  if (nome.includes("liz")) {
    return {
      chamada:
        "Personalidade e confiança em uma escolha especial.",
      descricao:
        "Uma fragrância feminina para acompanhar diferentes momentos da sua vida."
    };
  }

  if (nome.includes("glamour")) {
    return {
      chamada:
        "Brilho e personalidade para quem gosta de se destacar.",
      descricao:
        "Uma opção feminina para ocasiões especiais ou para presentear."
    };
  }

  if (nome.includes("her code")) {
    return {
      chamada:
        "Uma escolha moderna, elegante e cheia de personalidade.",
      descricao:
        "Uma opção especial de perfumaria feminina para você ou para presentear."
    };
  }

  if (nome.includes("egeo")) {
    return {
      chamada:
        "Uma escolha divertida e cheia de personalidade.",
      descricao:
        "Uma opção versátil para quem gosta de experimentar fragrâncias diferentes."
    };
  }

  if (nome.includes("botica 214")) {
    return {
      chamada:
        "Uma opção elegante para tornar sua coleção especial.",
      descricao:
        "Uma escolha de perfumaria para quem valoriza beleza e personalidade."
    };
  }

  if (nome.includes("acqua fresca")) {
    return {
      chamada:
        "Um clássico versátil para diferentes momentos.",
      descricao:
        "Uma opção feminina para uso pessoal ou para presentear."
    };
  }

  if (
    produtoAtual.categoria === "hidratantes"
  ) {
    return {
      chamada:
        "Autocuidado para deixar sua rotina ainda mais especial.",
      descricao:
        "Uma opção prática para completar seus momentos de cuidado corporal."
    };
  }

  if (
    produtoAtual.categoria === "sabonetes"
  ) {
    return {
      chamada:
        "Cuidado e perfumação para sua rotina diária.",
      descricao:
        "Uma ótima escolha para uso pessoal, presentes ou montagem de kits."
    };
  }

  if (
    produtoAtual.categoria === "feminino"
  ) {
    return {
      chamada:
        "Uma fragrância feminina para completar sua coleção.",
      descricao:
        "Uma escolha especial para uso pessoal ou para presentear alguém importante."
    };
  }

  return {
    chamada:
      "Uma escolha masculina cheia de personalidade.",
    descricao:
      "Uma opção especial para completar sua rotina ou para presentear."
  };
}

/* =========================================================
   PRODUTOS COMPLETOS
========================================================= */

const PRODUTOS = PRODUTOS_BASE.map(
  (produtoAtual, indice) => {
    const textos = criarDescricao(produtoAtual);

    return {
      ...produtoAtual,
      ...textos,
      ordemOriginal: indice
    };
  }
);

/* =========================================================
   ESTADO DO CATÁLOGO
========================================================= */

const estadoCatalogo = {
  categoria: "todos",
  pesquisa: "",
  ordem: "padrao",
  quantidadeVisivel:
    CONFIGURACOES.quantidadeInicial
};

/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

const elementos = {
  header:
    document.getElementById("header"),

  mobileMenuButton:
    document.getElementById("mobileMenuButton"),

  mobileMenu:
    document.getElementById("mobileMenu"),

  mobileMenuOverlay:
    document.getElementById("mobileMenuOverlay"),

  mobileMenuClose:
    document.getElementById("mobileMenuClose"),

  headerSearchForm:
    document.getElementById("headerSearchForm"),

  headerSearchInput:
    document.getElementById("headerSearchInput"),

  featuredProducts:
    document.getElementById("featuredProducts"),

  featuredPrevious:
    document.getElementById("featuredPrevious"),

  featuredNext:
    document.getElementById("featuredNext"),

  catalogFilters:
    document.getElementById("catalogFilters"),

  catalogOrder:
    document.getElementById("catalogOrder"),

  catalogCount:
    document.getElementById("catalogCount"),

  catalogSearch:
    document.getElementById("catalogSearch"),

  productsGrid:
    document.getElementById("productsGrid"),

  catalogEmpty:
    document.getElementById("catalogEmpty"),

  clearCatalogFilters:
    document.getElementById("clearCatalogFilters"),

  loadMoreProducts:
    document.getElementById("loadMoreProducts"),

  siteToast:
    document.getElementById("siteToast")
};

/* =========================================================
   ÍCONE DO WHATSAPP EM SVG
========================================================= */

const ICONE_WHATSAPP = `
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1C18.7 23.7 24 18.4 24 11.9c0-3.2-1.2-6.1-3.5-8.4Zm-8.4 18.2c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.6l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.1.2 2.4 3.7 5.9 5.2 2.2 1 3.1 1 4.2.9.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"
    />
  </svg>
`;

/* =========================================================
   FORMATAÇÃO
========================================================= */

function formatarPreco(valor) {
  return new Intl.NumberFormat(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  ).format(valor);
}

function escaparHTML(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   WHATSAPP DOS PRODUTOS
========================================================= */

function criarMensagemProduto(produtoAtual) {
  return [
    "Olá! Vim pelo site da Ana Essenci e quero comprar este produto:",
    "",
    `Produto: ${produtoAtual.nome}`,
    `Código: ${produtoAtual.codigo}`,
    `Preço: ${formatarPreco(produtoAtual.preco)}`,
    "",
    "Gostaria de confirmar a disponibilidade, as formas de pagamento e as opções de entrega."
  ].join("\n");
}

function criarLinkProduto(produtoAtual) {
  const mensagem = encodeURIComponent(
    criarMensagemProduto(produtoAtual)
  );

  return (
    `https://wa.me/${CONFIGURACOES.whatsappNumero}` +
    `?text=${mensagem}`
  );
}

/* =========================================================
   CARD DE PRODUTO
========================================================= */

function criarCardProduto(
  produtoAtual,
  mostrarDestaque = false
) {
  const linkWhatsApp =
    criarLinkProduto(produtoAtual);

  const textoCategoria =
    `${produtoAtual.marca} • ${produtoAtual.categoriaNome}`;

  return `
    <article
      class="product-card"
      data-product-id="${escaparHTML(produtoAtual.id)}"
    >
      <div class="product-card__media">

        ${
          mostrarDestaque
            ? `
              <span class="product-card__badge">
                Mais vendido
              </span>
            `
            : ""
        }

        <img
          class="product-card__image"
          src="${escaparHTML(produtoAtual.imagem)}"
          alt="${escaparHTML(produtoAtual.nome)}"
          loading="${mostrarDestaque ? "eager" : "lazy"}"
          decoding="async"
        >

      </div>

      <div class="product-card__content">

        <span class="product-card__brand">
          ${escaparHTML(textoCategoria)}
        </span>

        <h3 class="product-card__title">
          ${escaparHTML(produtoAtual.nome)}
        </h3>

        <p class="product-card__description">
          ${escaparHTML(produtoAtual.chamada)}
          ${escaparHTML(produtoAtual.descricao)}
        </p>

        <p class="product-card__code">
          Código:
          <strong>
            ${escaparHTML(produtoAtual.codigo)}
          </strong>
        </p>

        <div class="product-card__meta">

          <div>
            <span class="product-card__price-label">
              Por
            </span>

            <strong class="product-card__price">
              ${formatarPreco(produtoAtual.preco)}
            </strong>
          </div>

          <a
            class="product-card__whatsapp"
            href="${linkWhatsApp}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comprar ${escaparHTML(produtoAtual.nome)} pelo WhatsApp"
            title="Comprar pelo WhatsApp"
          >
            ${ICONE_WHATSAPP}
          </a>

        </div>

      </div>
    </article>
  `;
}

/* =========================================================
   PROTEÇÃO CONTRA IMAGEM QUEBRADA
========================================================= */

function configurarImagens(container) {
  if (!container) {
    return;
  }

  const imagens = container.querySelectorAll(
    ".product-card__image"
  );

  imagens.forEach((imagem) => {
    imagem.addEventListener(
      "error",
      () => {
        imagem.src = "logo/logo.jpg";
        imagem.alt =
          "Imagem temporariamente indisponível";

        imagem.style.padding = "38px";
        imagem.style.opacity = "0.65";
      },
      {
        once: true
      }
    );
  });
}

/* =========================================================
   PRODUTOS MAIS VENDIDOS
========================================================= */

function obterProdutosDestaque() {
  return PRODUTOS
    .filter(
      (produtoAtual) =>
        produtoAtual.destaque > 0
    )
    .sort(
      (produtoA, produtoB) =>
        produtoA.destaque -
        produtoB.destaque
    )
    .slice(0, 10);
}

function renderizarDestaques() {
  if (!elementos.featuredProducts) {
    return;
  }

  const produtosDestaque =
    obterProdutosDestaque();

  elementos.featuredProducts.innerHTML =
    produtosDestaque
      .map(
        (produtoAtual) =>
          criarCardProduto(produtoAtual, true)
      )
      .join("");

  configurarImagens(
    elementos.featuredProducts
  );
}

/* =========================================================
   MOVIMENTO DO CARROSSEL
========================================================= */

function obterDistanciaCarrossel() {
  if (!elementos.featuredProducts) {
    return 280;
  }

  const primeiroCard =
    elementos.featuredProducts.querySelector(
      ".product-card"
    );

  if (!primeiroCard) {
    return 280;
  }

  const estilos = window.getComputedStyle(
    elementos.featuredProducts
  );

  const espacamento =
    Number.parseFloat(estilos.columnGap) || 16;

  return (
    primeiroCard.getBoundingClientRect().width +
    espacamento
  );
}

function moverCarrossel(direcao) {
  elementos.featuredProducts?.scrollBy({
    left:
      obterDistanciaCarrossel() *
      direcao,

    behavior: "smooth"
  });
}

function configurarCarrossel() {
  elementos.featuredPrevious?.addEventListener(
    "click",
    () => moverCarrossel(-1)
  );

  elementos.featuredNext?.addEventListener(
    "click",
    () => moverCarrossel(1)
  );
}

/* =========================================================
   FILTRAGEM DOS PRODUTOS
========================================================= */

function obterProdutosFiltrados() {
  const pesquisa = normalizarTexto(
    estadoCatalogo.pesquisa
  );

  let resultado = PRODUTOS.filter(
    (produtoAtual) => {
      const correspondeCategoria =
        estadoCatalogo.categoria === "todos" ||
        produtoAtual.categoria ===
          estadoCatalogo.categoria;

      const textoProduto = normalizarTexto(
        [
          produtoAtual.nome,
          produtoAtual.codigo,
          produtoAtual.marca,
          produtoAtual.categoriaNome,
          produtoAtual.chamada,
          produtoAtual.descricao
        ].join(" ")
      );

      const correspondePesquisa =
        pesquisa === "" ||
        textoProduto.includes(pesquisa);

      return (
        correspondeCategoria &&
        correspondePesquisa
      );
    }
  );

  if (
    estadoCatalogo.ordem === "nome"
  ) {
    resultado = [...resultado].sort(
      (produtoA, produtoB) =>
        produtoA.nome.localeCompare(
          produtoB.nome,
          "pt-BR"
        )
    );
  }

  if (
    estadoCatalogo.ordem ===
    "menor-preco"
  ) {
    resultado = [...resultado].sort(
      (produtoA, produtoB) =>
        produtoA.preco -
        produtoB.preco
    );
  }

  if (
    estadoCatalogo.ordem ===
    "maior-preco"
  ) {
    resultado = [...resultado].sort(
      (produtoA, produtoB) =>
        produtoB.preco -
        produtoA.preco
    );
  }

  if (
    estadoCatalogo.ordem === "padrao"
  ) {
    resultado = [...resultado].sort(
      (produtoA, produtoB) => {
        const destaqueA =
          produtoA.destaque > 0
            ? produtoA.destaque
            : 999;

        const destaqueB =
          produtoB.destaque > 0
            ? produtoB.destaque
            : 999;

        if (destaqueA !== destaqueB) {
          return destaqueA - destaqueB;
        }

        return (
          produtoA.ordemOriginal -
          produtoB.ordemOriginal
        );
      }
    );
  }

  return resultado;
}

/* =========================================================
   RENDERIZAÇÃO DO CATÁLOGO
========================================================= */

function renderizarCatalogo() {
  if (!elementos.productsGrid) {
    return;
  }

  const produtosFiltrados =
    obterProdutosFiltrados();

  const produtosVisiveis =
    produtosFiltrados.slice(
      0,
      estadoCatalogo.quantidadeVisivel
    );

  elementos.productsGrid.innerHTML =
    produtosVisiveis
      .map(
        (produtoAtual) =>
          criarCardProduto(produtoAtual)
      )
      .join("");

  configurarImagens(
    elementos.productsGrid
  );

  atualizarInformacoesCatalogo(
    produtosFiltrados.length,
    produtosVisiveis.length
  );
}

function atualizarInformacoesCatalogo(
  quantidadeTotal,
  quantidadeVisivel
) {
  if (elementos.catalogCount) {
    if (quantidadeTotal === 0) {
      elementos.catalogCount.textContent =
        "Nenhum produto encontrado.";
    } else if (quantidadeTotal === 1) {
      elementos.catalogCount.textContent =
        "1 produto encontrado.";
    } else {
      elementos.catalogCount.textContent =
        `Exibindo ${quantidadeVisivel} de ${quantidadeTotal} produtos.`;
    }
  }

  if (elementos.catalogEmpty) {
    elementos.catalogEmpty.hidden =
      quantidadeTotal !== 0;
  }

  const areaBotao =
    elementos.loadMoreProducts
      ?.closest(".catalog-more");

  if (areaBotao) {
    const esconderBotao =
      quantidadeTotal === 0 ||
      quantidadeVisivel >= quantidadeTotal;

    areaBotao.classList.toggle(
      "is-hidden",
      esconderBotao
    );
  }
}

/* =========================================================
   SELEÇÃO DE CATEGORIA
========================================================= */

function selecionarCategoria(categoria) {
  estadoCatalogo.categoria =
    categoria;

  estadoCatalogo.quantidadeVisivel =
    CONFIGURACOES.quantidadeInicial;

  elementos.catalogFilters
    ?.querySelectorAll("[data-category]")
    .forEach((botao) => {
      botao.classList.toggle(
        "is-active",
        botao.dataset.category === categoria
      );
    });

  renderizarCatalogo();
}

/* =========================================================
   PESQUISA
========================================================= */

function aplicarPesquisa(texto) {
  estadoCatalogo.pesquisa = texto;

  estadoCatalogo.quantidadeVisivel =
    CONFIGURACOES.quantidadeInicial;

  if (
    elementos.catalogSearch &&
    elementos.catalogSearch.value !== texto
  ) {
    elementos.catalogSearch.value = texto;
  }

  if (
    elementos.headerSearchInput &&
    elementos.headerSearchInput.value !== texto
  ) {
    elementos.headerSearchInput.value = texto;
  }

  renderizarCatalogo();
}

/* =========================================================
   EVENTOS DO CATÁLOGO
========================================================= */

function configurarCatalogo() {
  elementos.catalogFilters?.addEventListener(
    "click",
    (evento) => {
      const botao = evento.target.closest(
        "[data-category]"
      );

      if (!botao) {
        return;
      }

      selecionarCategoria(
        botao.dataset.category
      );
    }
  );

  elementos.catalogSearch?.addEventListener(
    "input",
    (evento) => {
      aplicarPesquisa(
        evento.target.value
      );
    }
  );

  elementos.catalogOrder?.addEventListener(
    "change",
    (evento) => {
      estadoCatalogo.ordem =
        evento.target.value;

      estadoCatalogo.quantidadeVisivel =
        CONFIGURACOES.quantidadeInicial;

      renderizarCatalogo();
    }
  );

  elementos.loadMoreProducts?.addEventListener(
    "click",
    () => {
      estadoCatalogo.quantidadeVisivel +=
        CONFIGURACOES.quantidadePorClique;

      renderizarCatalogo();
    }
  );

  elementos.clearCatalogFilters?.addEventListener(
    "click",
    limparCatalogo
  );
}

function limparCatalogo() {
  estadoCatalogo.categoria = "todos";
  estadoCatalogo.pesquisa = "";
  estadoCatalogo.ordem = "padrao";

  estadoCatalogo.quantidadeVisivel =
    CONFIGURACOES.quantidadeInicial;

  if (elementos.catalogSearch) {
    elementos.catalogSearch.value = "";
  }

  if (elementos.headerSearchInput) {
    elementos.headerSearchInput.value = "";
  }

  if (elementos.catalogOrder) {
    elementos.catalogOrder.value =
      "padrao";
  }

  selecionarCategoria("todos");
}

/* =========================================================
   PESQUISA DO CABEÇALHO
========================================================= */

function configurarPesquisaCabecalho() {
  elementos.headerSearchForm?.addEventListener(
    "submit",
    (evento) => {
      evento.preventDefault();

      const pesquisa =
        elementos.headerSearchInput
          ?.value
          .trim() || "";

      aplicarPesquisa(pesquisa);

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
   LINKS DAS CATEGORIAS DO MENU
========================================================= */

function configurarLinksCategorias() {
  document
    .querySelectorAll("[data-category-link]")
    .forEach((link) => {
      link.addEventListener(
        "click",
        (evento) => {
          evento.preventDefault();

          const categoria =
            link.dataset.categoryLink;

          selecionarCategoria(categoria);
          fecharMenuMobile();

          document
            .getElementById("catalogo")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
        }
      );
    });
}

/* =========================================================
   MENU MOBILE
========================================================= */

function abrirMenuMobile() {
  elementos.mobileMenu?.classList.add(
    "is-open"
  );

  elementos.mobileMenuOverlay
    ?.classList.add("is-visible");

  elementos.mobileMenuButton
    ?.classList.add("is-active");

  elementos.mobileMenuButton
    ?.setAttribute(
      "aria-expanded",
      "true"
    );

  elementos.mobileMenu?.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "mobile-menu-open"
  );
}

function fecharMenuMobile() {
  elementos.mobileMenu?.classList.remove(
    "is-open"
  );

  elementos.mobileMenuOverlay
    ?.classList.remove("is-visible");

  elementos.mobileMenuButton
    ?.classList.remove("is-active");

  elementos.mobileMenuButton
    ?.setAttribute(
      "aria-expanded",
      "false"
    );

  elementos.mobileMenu?.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "mobile-menu-open"
  );
}

function configurarMenuMobile() {
  elementos.mobileMenuButton?.addEventListener(
    "click",
    abrirMenuMobile
  );

  elementos.mobileMenuClose?.addEventListener(
    "click",
    fecharMenuMobile
  );

  elementos.mobileMenuOverlay?.addEventListener(
    "click",
    fecharMenuMobile
  );

  elementos.mobileMenu
    ?.querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener(
        "click",
        fecharMenuMobile
      );
    });

  document.addEventListener(
    "keydown",
    (evento) => {
      if (evento.key === "Escape") {
        fecharMenuMobile();
      }
    }
  );

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 900) {
        fecharMenuMobile();
      }
    }
  );
}

/* =========================================================
   CABEÇALHO AO ROLAR
========================================================= */

function configurarCabecalho() {
  function atualizarCabecalho() {
    elementos.header?.classList.toggle(
      "is-scrolled",
      window.scrollY > 15
    );
  }

  window.addEventListener(
    "scroll",
    atualizarCabecalho,
    {
      passive: true
    }
  );

  atualizarCabecalho();
}

/* =========================================================
   MENU ATIVO
========================================================= */

function configurarMenuAtivo() {
  const links =
    document.querySelectorAll(
      ".desktop-navigation a"
    );

  const secoes =
    document.querySelectorAll(
      "main section[id]"
    );

  if (
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const observador =
    new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) {
            return;
          }

          const idSecao =
            entrada.target.id;

          links.forEach((link) => {
            const href =
              link.getAttribute("href");

            link.classList.toggle(
              "is-active",
              href === `#${idSecao}`
            );
          });
        });
      },
      {
        rootMargin:
          "-35% 0px -55% 0px",

        threshold: 0
      }
    );

  secoes.forEach((secao) => {
    observador.observe(secao);
  });
}

/* =========================================================
   TOAST
========================================================= */

let temporizadorToast = null;

function mostrarToast(mensagem) {
  if (!elementos.siteToast) {
    return;
  }

  elementos.siteToast.textContent =
    mensagem;

  elementos.siteToast.classList.add(
    "is-visible"
  );

  if (temporizadorToast) {
    window.clearTimeout(
      temporizadorToast
    );
  }

  temporizadorToast =
    window.setTimeout(() => {
      elementos.siteToast
        ?.classList.remove("is-visible");
    }, 3200);
}

/* =========================================================
   VERIFICAÇÃO DOS LINKS GERAIS
========================================================= */

function configurarWhatsAppGeral() {
  document
    .querySelectorAll(
      `a[href="${CONFIGURACOES.whatsappGeral}"]`
    )
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

function iniciarSite() {
  renderizarDestaques();
  renderizarCatalogo();

  configurarCarrossel();
  configurarCatalogo();
  configurarPesquisaCabecalho();
  configurarLinksCategorias();
  configurarMenuMobile();
  configurarCabecalho();
  configurarMenuAtivo();
  configurarWhatsAppGeral();
}

document.addEventListener(
  "DOMContentLoaded",
  iniciarSite
);