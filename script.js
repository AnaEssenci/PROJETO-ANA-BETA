"use strict";

/* =========================================================
   ANA ESSENCI — SCRIPT.JS
   ========================================================= */

/* ---------------------------------------------------------
   CONFIGURAÇÕES DA LOJA
--------------------------------------------------------- */

const CONFIGURACOES = {
  /*
    Coloque 55 + DDD + número.
    Não use espaços, parênteses, traços ou sinal de +.

    Exemplo:
    whatsapp: "5562999999999"
  */
  whatsapp: "SEU_NUMERO_AQUI",

  emailSuporte: "loja.anaessenci@gmail.com",

  mensagemGeral:
    "Olá! Vim pelo site da Ana Essenci e gostaria de conhecer os produtos disponíveis.",

  assuntoEmail: "Suporte — Ana Essenci",

  mensagemEmail:
    "Olá! Vim pelo site da Ana Essenci e preciso de ajuda com:"
};

/* ---------------------------------------------------------
   CATEGORIAS
--------------------------------------------------------- */

const CATEGORIAS = {
  masculino: "Perfume masculino",
  feminino: "Perfume feminino",
  hidratantes: "Hidratante corporal",
  sabonetes: "Sabonete"
};

/* ---------------------------------------------------------
   CRIAÇÃO DOS PRODUTOS
--------------------------------------------------------- */

function criarProduto(
  id,
  nome,
  codigo,
  preco,
  categoria,
  posicaoDestaque = 0
) {
  return {
    id,
    nome,
    codigo: String(codigo),
    preco,
    categoria,
    categoriaNome: CATEGORIAS[categoria],
    imagem: `produtos/${categoria}/${id}.webp`,
    posicaoDestaque
  };
}

/* ---------------------------------------------------------
   BANCO DE PRODUTOS
   Zaad Venture foi removido porque não existe imagem dele.
--------------------------------------------------------- */

const PRODUTOS_BASE = [
  /* =========================
     PERFUMES MASCULINOS
  ========================= */

  criarProduto(
    "malbec",
    "Malbec Desodorante Colônia 100 ml",
    "84387",
    209.90,
    "masculino",
    1
  ),

  criarProduto(
    "malbec-gold",
    "Malbec Gold Desodorante Colônia 100 ml",
    "73849",
    249.90,
    "masculino",
    2
  ),

  criarProduto(
    "malbec-x",
    "Malbec X Desodorante Colônia 100 ml",
    "30192",
    224.91,
    "masculino"
  ),

  criarProduto(
    "malbec-black",
    "Malbec Black Desodorante Colônia 100 ml",
    "74723",
    259.90,
    "masculino"
  ),

  criarProduto(
    "malbec-ultra-bleu",
    "Malbec Ultra Bleu Desodorante Colônia 100 ml",
    "50119",
    229.90,
    "masculino",
    3
  ),

  criarProduto(
    "malbec-pure-gold",
    "Malbec Pure Gold Desodorante Colônia 100 ml",
    "58506",
    249.90,
    "masculino"
  ),

  criarProduto(
    "malbec-signature",
    "Malbec Signature Eau de Parfum 90 ml",
    "48134",
    359.90,
    "masculino"
  ),

  criarProduto(
    "malbec-magnetic",
    "Malbec Magnetic Desodorante Colônia 100 ml",
    "73743",
    249.90,
    "masculino"
  ),

  criarProduto(
    "malbec-noir",
    "Malbec Noir Desodorante Colônia 100 ml",
    "84388",
    259.90,
    "masculino"
  ),

  criarProduto(
    "zaad",
    "Zaad Eau de Parfum 95 ml",
    "47950",
    314.91,
    "masculino"
  ),

  criarProduto(
    "zaad-expedition",
    "Zaad Expedition Eau de Parfum 95 ml",
    "46898",
    349.90,
    "masculino"
  ),

  criarProduto(
    "zaad-santal",
    "Zaad Santal Eau de Parfum 95 ml",
    "81382",
    349.90,
    "masculino"
  ),

  criarProduto(
    "zaad-intense",
    "Zaad Intense Eau de Parfum 95 ml",
    "58644",
    300.88,
    "masculino"
  ),

  criarProduto(
    "quasar-blue",
    "Quasar Blue Desodorante Colônia 100 ml",
    "51244",
    189.90,
    "masculino"
  ),

  criarProduto(
    "quasar-brave",
    "Quasar Brave Desodorante Colônia 100 ml",
    "51242",
    189.90,
    "masculino"
  ),

  criarProduto(
    "quasar-vision",
    "Quasar Vision Desodorante Colônia 100 ml",
    "50662",
    189.90,
    "masculino"
  ),

  criarProduto(
    "quasar-deep-blue",
    "Quasar Deep Blue Desodorante Colônia 100 ml",
    "58526",
    141.89,
    "masculino"
  ),

  criarProduto(
    "quasar-rush",
    "Quasar Rush Desodorante Colônia 100 ml",
    "50820",
    113.90,
    "masculino"
  ),

  criarProduto(
    "arbo",
    "Arbo Desodorante Colônia 100 ml",
    "74438",
    189.90,
    "masculino"
  ),

  criarProduto(
    "arbo-reserva",
    "Arbo Reserva Desodorante Colônia 100 ml",
    "81138",
    189.90,
    "masculino"
  ),

  criarProduto(
    "arbo-liberte",
    "Arbo Liberté Desodorante Colônia 100 ml",
    "74440",
    189.90,
    "masculino"
  ),

  criarProduto(
    "arbo-atlantica",
    "Arbo Atlântica Desodorante Colônia 100 ml",
    "55366",
    189.90,
    "masculino"
  ),

  criarProduto(
    "uomini",
    "Uomini Desodorante Colônia 100 ml",
    "49765",
    209.90,
    "masculino"
  ),

  criarProduto(
    "uomini-black",
    "Uomini Black Desodorante Colônia 100 ml",
    "49766",
    209.90,
    "masculino"
  ),

  criarProduto(
    "uomini-infinite",
    "Uomini Infinite Desodorante Colônia 100 ml",
    "50418",
    209.90,
    "masculino"
  ),

  criarProduto(
    "egeo-bomb-black",
    "Egeo Bomb Black Desodorante Colônia 90 ml",
    "82685",
    164.90,
    "masculino"
  ),

  criarProduto(
    "coffee-man-sense",
    "Coffee Man Sense Desodorante Colônia 100 ml",
    "80972",
    229.90,
    "masculino"
  ),

  criarProduto(
    "coffee-man-duo",
    "Coffee Man Duo Desodorante Colônia 100 ml",
    "73614",
    159.90,
    "masculino"
  ),

  criarProduto(
    "coffee-man-seduction",
    "Coffee Man Seduction Desodorante Colônia 100 ml",
    "48365",
    229.90,
    "masculino"
  ),

  criarProduto(
    "the-blend-bourbon",
    "The Blend Bourbon Eau de Parfum 100 ml",
    "77489",
    379.90,
    "masculino"
  ),

  criarProduto(
    "the-blend-cardamom",
    "The Blend Cardamom Eau de Parfum 100 ml",
    "83529",
    379.90,
    "masculino"
  ),

  criarProduto(
    "clash",
    "Clash Desodorante Colônia 100 ml",
    "50677",
    179.90,
    "masculino",
    4
  ),

  criarProduto(
    "egeo-blue",
    "Egeo Blue Desodorante Colônia 90 ml",
    "82686",
    164.90,
    "masculino"
  ),

  criarProduto(
    "botica-214-verano-en-firenze",
    "Botica 214 Verano en Firenze Eau de Parfum 75 ml",
    "47553",
    249.90,
    "masculino"
  ),

  /* =========================
     PERFUMES FEMININOS
  ========================= */

  criarProduto(
    "lily-eau-de-parfum",
    "Lily Eau de Parfum 75 ml",
    "77524",
    329.90,
    "feminino",
    5
  ),

  criarProduto(
    "lily-lumiere",
    "Lily Lumière Eau de Parfum 75 ml",
    "77989",
    279.89,
    "feminino"
  ),

  criarProduto(
    "lily-absolu",
    "Lily Absolu Eau de Parfum 75 ml",
    "77988",
    329.90,
    "feminino"
  ),

  criarProduto(
    "lily-gardenia",
    "Lily Gardénia Eau de Parfum 75 ml",
    "55363",
    280.42,
    "feminino",
    6
  ),

  criarProduto(
    "lily-le-parfum",
    "Lily Le Parfum 30 ml",
    "48734",
    339.90,
    "feminino"
  ),

  criarProduto(
    "floratta-red",
    "Floratta Red Desodorante Colônia 75 ml",
    "75792",
    147.90,
    "feminino",
    7
  ),

  criarProduto(
    "floratta-blue",
    "Floratta Blue Desodorante Colônia 75 ml",
    "25458",
    174.90,
    "feminino",
    8
  ),

  criarProduto(
    "floratta-my-blue",
    "Floratta My Blue Desodorante Colônia 75 ml",
    "01004",
    79.89,
    "feminino"
  ),

  criarProduto(
    "floratta-flores-secretas",
    "Floratta Flores Secretas Desodorante Colônia 75 ml",
    "48136",
    104.91,
    "feminino"
  ),

  criarProduto(
    "floratta-fleur-supreme",
    "Floratta Fleur Suprême Eau de Parfum 75 ml",
    "75877",
    229.90,
    "feminino"
  ),

  criarProduto(
    "floratta-romance-de-verao",
    "Floratta Romance de Verão Desodorante Colônia 75 ml",
    "55659",
    121.91,
    "feminino"
  ),

  criarProduto(
    "floratta-rose",
    "Floratta Rose Desodorante Colônia 75 ml",
    "48635",
    174.90,
    "feminino"
  ),

  criarProduto(
    "floratta-red-blossom",
    "Floratta Red Blossom Desodorante Colônia 75 ml",
    "49973",
    174.90,
    "feminino"
  ),

  criarProduto(
    "elysee",
    "Elysée Eau de Parfum 50 ml",
    "53518",
    329.90,
    "feminino",
    9
  ),

  criarProduto(
    "elysee-blanc",
    "Elysée Blanc Eau de Parfum 50 ml",
    "48143",
    329.90,
    "feminino"
  ),

  criarProduto(
    "elysee-nuit",
    "Elysée Nuit Eau de Parfum 50 ml",
    "48146",
    329.90,
    "feminino"
  ),

  criarProduto(
    "elysee-succes",
    "Elysée Succès Eau de Parfum 50 ml",
    "81331",
    279.89,
    "feminino"
  ),

  criarProduto(
    "leau-de-lily-blanche",
    "L’Eau de Lily Blanche Desodorante Colônia 75 ml",
    "86895",
    229.90,
    "feminino"
  ),

  criarProduto(
    "liz",
    "Liz Desodorante Colônia 100 ml",
    "76700",
    179.90,
    "feminino"
  ),

  criarProduto(
    "liz-intenso",
    "Liz Intenso Desodorante Colônia 100 ml",
    "53415",
    179.90,
    "feminino"
  ),

  criarProduto(
    "liz-sublime",
    "Liz Sublime Desodorante Colônia 100 ml",
    "47339",
    149.89,
    "feminino"
  ),

  criarProduto(
    "liz-flora",
    "Liz Flora Desodorante Colônia 100 ml",
    "59466",
    124.90,
    "feminino"
  ),

  criarProduto(
    "coffee-woman-seduction",
    "Coffee Woman Seduction Desodorante Colônia 100 ml",
    "48139",
    229.90,
    "feminino"
  ),

  criarProduto(
    "coffee-woman-duo",
    "Coffee Woman Duo Desodorante Colônia 100 ml",
    "73613",
    189.90,
    "feminino"
  ),

  criarProduto(
    "coffee-addictive",
    "Coffee Addictive Desodorante Colônia 100 ml",
    "56385",
    229.90,
    "feminino"
  ),

  criarProduto(
    "coffee-woman-sense",
    "Coffee Woman Sense Desodorante Colônia 100 ml",
    "80971",
    229.90,
    "feminino"
  ),

  criarProduto(
    "glamour-secrets-black",
    "Glamour Secrets Black Desodorante Colônia 75 ml",
    "74103",
    164.90,
    "feminino"
  ),

  criarProduto(
    "glamour-fever",
    "Glamour Fever Desodorante Colônia 75 ml",
    "84224",
    164.90,
    "feminino"
  ),

  criarProduto(
    "glamour-just-shine",
    "Glamour Just Shine Desodorante Colônia 75 ml",
    "84223",
    199.90,
    "feminino"
  ),

  criarProduto(
    "her-code",
    "Her Code Eau de Parfum 50 ml",
    "50022",
    254.90,
    "feminino"
  ),

  criarProduto(
    "her-code-touch",
    "Her Code Touch Eau de Parfum 50 ml",
    "59555",
    213.91,
    "feminino"
  ),

  criarProduto(
    "egeo-dolce",
    "Egeo Dolce Desodorante Colônia 90 ml",
    "82688",
    122.90,
    "feminino",
    10
  ),

  criarProduto(
    "egeo-choc",
    "Egeo Choc Desodorante Colônia 90 ml",
    "82689",
    131.90,
    "feminino"
  ),

  criarProduto(
    "botica-214-golden-gardenia",
    "Botica 214 Golden Gardênia Eau de Parfum 75 ml",
    "89261",
    199.90,
    "feminino"
  ),

  criarProduto(
    "boticollection-acqua-fresca",
    "Boticollection Acqua Fresca Desodorante Colônia 100 ml",
    "47905",
    106.90,
    "feminino"
  ),

  /* =========================
     HIDRATANTES
  ========================= */

  criarProduto(
    "nativa-spa-ameixa",
    "Loção Hidratante Nativa Spa Ameixa 400 ml",
    "48282",
    89.90,
    "hidratantes"
  ),

  criarProduto(
    "nativa-spa-ameixa-negra",
    "Loção Hidratante Nativa Spa Ameixa Negra 400 ml",
    "48281",
    89.90,
    "hidratantes"
  ),

  criarProduto(
    "nativa-spa-rose",
    "Loção Revitalizante Nativa Spa Rosé 400 ml",
    "75971",
    89.90,
    "hidratantes"
  ),

  criarProduto(
    "nativa-spa-orquidea-noire",
    "Loção Noturna Nativa Spa Orquídea Noire 400 ml",
    "49958",
    89.90,
    "hidratantes"
  ),

  criarProduto(
    "nativa-spa-quinoa",
    "Loção Firmadora Nativa Spa Quinoa 400 ml",
    "49954",
    89.90,
    "hidratantes"
  ),

  criarProduto(
    "nativa-spa-uva-merlot",
    "Loção Nutritiva Nativa Spa Uva Merlot 400 ml",
    "58978",
    89.90,
    "hidratantes"
  ),

  criarProduto(
    "cuide-se-bem-deleite",
    "Loção Hidratante Cuide-se Bem Deleite 400 ml",
    "75151",
    78.90,
    "hidratantes"
  ),

  criarProduto(
    "cuide-se-bem-beijinho",
    "Loção Hidratante Cuide-se Bem Beijinho 400 ml",
    "49825",
    78.90,
    "hidratantes"
  ),

  criarProduto(
    "nativa-spa-orquidea-lumiere",
    "Creme Perfumado Nativa Spa Orquídea Lumière 400 ml",
    "59823",
    89.90,
    "hidratantes"
  ),

  criarProduto(
    "nativa-spa-lilac",
    "Loção Renovadora Nativa Spa Lilac 400 ml",
    "53346",
    89.90,
    "hidratantes"
  ),

  /* =========================
     SABONETES
  ========================= */

  criarProduto(
    "sabonete-nativa-spa-ameixa",
    "Sabonete em Barra Nativa Spa Ameixa 3 unidades de 90 g",
    "51423",
    42.90,
    "sabonetes"
  ),

  criarProduto(
    "kit-sabonete-morango-e-leite",
    "Kit de Sabonetes Cuide-se Bem Morango e Leite 4 unidades",
    "88311",
    38.90,
    "sabonetes"
  ),

  criarProduto(
    "sabonete-pessegura",
    "Sabonete em Barra Cuide-se Bem Pessegura 4 unidades",
    "94499",
    38.90,
    "sabonetes"
  ),

  criarProduto(
    "sabonete-rosa-e-algodao",
    "Sabonetes Cuide-se Bem Rosa e Algodão 4 unidades",
    "51165",
    38.90,
    "sabonetes"
  ),

  criarProduto(
    "sabonete-deleite",
    "Sabonete em Barra Cuide-se Bem Deleite 4 unidades",
    "85564",
    38.90,
    "sabonetes"
  ),

  criarProduto(
    "kit-sabonete-beijinho",
    "Kit de Sabonetes Cuide-se Bem Beijinho 2 unidades",
    "87373",
    24.90,
    "sabonetes"
  ),

  criarProduto(
    "sabonete-malbec",
    "Sabonete em Barra Malbec 4 unidades",
    "84654",
    53.90,
    "sabonetes"
  ),

  criarProduto(
    "sabonete-clash",
    "Sabonete em Barra Clash 2 unidades",
    "86870",
    29.90,
    "sabonetes"
  ),

  criarProduto(
    "instance-karite",
    "Sabonete Líquido Perfumado Instance Karité 400 ml",
    "52373",
    49.99,
    "sabonetes"
  ),

  criarProduto(
    "sabonete-liquido-deleite-caramelizado",
    "Sabonete Líquido Cuide-se Bem Deleite Caramelizado 150 ml",
    "90998",
    52.90,
    "sabonetes"
  )
];

/* ---------------------------------------------------------
   TEXTOS COMERCIAIS DOS PRODUTOS
--------------------------------------------------------- */

function normalizarTexto(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function criarTextosProduto(produto) {
  const nomeNormalizado = normalizarTexto(produto.nome);

  let chamada = "Uma escolha especial para completar sua rotina.";
  let descricao =
    "Consulte a disponibilidade e faça seu pedido diretamente pelo WhatsApp.";

  if (produto.categoria === "masculino") {
    chamada =
      "Uma escolha de perfumaria masculina para destacar presença e personalidade.";

    descricao =
      `${produto.nome} é uma excelente opção para uso pessoal ou para presentear. ` +
      "Fale conosco para confirmar disponibilidade, pagamento e entrega.";
  }

  if (produto.categoria === "feminino") {
    chamada =
      "Uma fragrância feminina para tornar sua coleção ainda mais especial.";

    descricao =
      `${produto.nome} combina beleza, cuidado e personalidade em uma opção ideal para você ou para presentear.`;
  }

  if (produto.categoria === "hidratantes") {
    chamada =
      "Cuidado corporal para deixar sua rotina mais completa e especial.";

    descricao =
      `${produto.nome} é uma opção prática para incluir nos seus momentos de autocuidado. ` +
      "Consulte disponibilidade pelo WhatsApp.";
  }

  if (produto.categoria === "sabonetes") {
    chamada =
      "Cuidado e perfumação para transformar os pequenos momentos da rotina.";

    descricao =
      `${produto.nome} é uma ótima escolha para uso diário, para presentear ou montar kits especiais.`;
  }

  if (nomeNormalizado.includes("malbec")) {
    chamada =
      "Presença, personalidade e elegância em uma escolha marcante.";

    descricao =
      `${produto.nome} é indicado para quem deseja uma fragrância masculina com identidade forte. ` +
      "Uma excelente opção para uso pessoal ou presente.";
  }

  if (nomeNormalizado.includes("zaad")) {
    chamada =
      "Sofisticação para quem valoriza escolhas elegantes e especiais.";

    descricao =
      `${produto.nome} completa a coleção de quem procura uma opção masculina refinada. ` +
      "Consulte disponibilidade e envio pelo WhatsApp.";
  }

  if (nomeNormalizado.includes("quasar")) {
    chamada =
      "Uma opção moderna para acompanhar diferentes momentos da rotina.";

    descricao =
      `${produto.nome} é uma escolha versátil para quem procura praticidade e personalidade em sua perfumaria masculina.`;
  }

  if (nomeNormalizado.includes("arbo")) {
    chamada =
      "Leveza e personalidade para acompanhar seus melhores momentos.";

    descricao =
      `${produto.nome} é uma opção masculina para uso diário, ocasiões especiais ou para presentear alguém importante.`;
  }

  if (nomeNormalizado.includes("uomini")) {
    chamada =
      "Estilo e presença em uma fragrância masculina cheia de personalidade.";

    descricao =
      `${produto.nome} é uma escolha para homens que gostam de cuidar da imagem e manter sua coleção sempre completa.`;
  }

  if (
    nomeNormalizado.includes("coffee man") ||
    nomeNormalizado.includes("coffee woman") ||
    nomeNormalizado.includes("coffee addictive")
  ) {
    chamada =
      "Uma escolha envolvente para quem deseja fugir do comum.";

    descricao =
      `${produto.nome} é uma opção de perfumaria com personalidade, ideal para uso pessoal ou para surpreender em um presente.`;
  }

  if (nomeNormalizado.includes("the blend")) {
    chamada =
      "Uma escolha sofisticada para elevar sua coleção de perfumes.";

    descricao =
      `${produto.nome} é uma opção masculina especial para quem valoriza elegância, cuidado e exclusividade.`;
  }

  if (nomeNormalizado.includes("clash")) {
    chamada =
      "Atitude e personalidade para quem gosta de deixar sua marca.";

    descricao =
      `${produto.nome} é uma escolha masculina moderna, ideal para completar sua rotina ou presentear.`;
  }

  if (nomeNormalizado.includes("lily")) {
    chamada =
      "Elegância e delicadeza em uma escolha especial de perfumaria feminina.";

    descricao =
      `${produto.nome} é ideal para quem valoriza sofisticação e deseja uma opção marcante para sua coleção ou para presentear.`;
  }

  if (nomeNormalizado.includes("floratta")) {
    chamada =
      "Uma escolha feminina delicada para deixar cada momento mais especial.";

    descricao =
      `${produto.nome} é uma opção versátil para quem procura beleza, personalidade e uma fragrância para completar sua rotina.`;
  }

  if (nomeNormalizado.includes("elysee")) {
    chamada =
      "Sofisticação e presença em uma escolha de perfumaria feminina.";

    descricao =
      `${produto.nome} é uma opção elegante para ocasiões especiais, uso pessoal ou para transformar um presente em algo inesquecível.`;
  }

  if (nomeNormalizado.includes("liz")) {
    chamada =
      "Uma fragrância feminina feita para destacar personalidade e confiança.";

    descricao =
      `${produto.nome} é uma escolha especial para completar sua coleção e acompanhar diferentes momentos da sua vida.`;
  }

  if (nomeNormalizado.includes("glamour")) {
    chamada =
      "Brilho, personalidade e elegância para quem gosta de se destacar.";

    descricao =
      `${produto.nome} é uma opção feminina para momentos especiais, presentes e para deixar sua coleção ainda mais completa.`;
  }

  if (nomeNormalizado.includes("her code")) {
    chamada =
      "Uma escolha feminina moderna, elegante e cheia de personalidade.";

    descricao =
      `${produto.nome} foi selecionado para quem deseja uma opção especial de perfumaria feminina para si ou para presentear.`;
  }

  if (nomeNormalizado.includes("egeo")) {
    chamada =
      "Uma escolha divertida e cheia de personalidade para sua coleção.";

    descricao =
      `${produto.nome} é uma opção versátil para quem gosta de experimentar fragrâncias diferentes e presentear com criatividade.`;
  }

  if (nomeNormalizado.includes("botica 214")) {
    chamada =
      "Uma opção elegante para tornar sua coleção ainda mais especial.";

    descricao =
      `${produto.nome} é uma escolha de perfumaria para quem valoriza produtos especiais, beleza e personalidade.`;
  }

  if (nomeNormalizado.includes("acqua fresca")) {
    chamada =
      "Um clássico para quem busca uma escolha versátil e especial.";

    descricao =
      `${produto.nome} é uma opção feminina para diferentes momentos, para uso pessoal ou para presentear.`;
  }

  if (nomeNormalizado.includes("nativa spa")) {
    chamada =
      "Autocuidado para deixar sua rotina corporal ainda mais especial.";

    descricao =
      `${produto.nome} é uma opção prática para cuidar do corpo e montar uma rotina completa de beleza e bem-estar.`;
  }

  if (nomeNormalizado.includes("cuide-se bem")) {
    chamada =
      "Um cuidado especial para tornar sua rotina mais leve e prazerosa.";

    descricao =
      `${produto.nome} é uma ótima opção para autocuidado, uso diário ou para montar kits de presente.`;
  }

  return {
    chamada,
    descricao
  };
}

/* ---------------------------------------------------------
   PRODUTOS COMPLETOS
--------------------------------------------------------- */

const PRODUTOS = PRODUTOS_BASE.map((produto, indice) => {
  const textos = criarTextosProduto(produto);

  return {
    ...produto,
    ...textos,
    ordemOriginal: indice
  };
});

/* ---------------------------------------------------------
   ESTADO DO CATÁLOGO
--------------------------------------------------------- */

const estadoCatalogo = {
  categoria: "todos",
  pesquisa: "",
  ordem: "padrao",
  quantidadeVisivel: 12,
  produtosPorPagina: 12
};

/* ---------------------------------------------------------
   ELEMENTOS DO SITE
--------------------------------------------------------- */

const elementos = {
  loader: document.getElementById("pageLoader"),
  header: document.getElementById("header"),

  menuButton: document.getElementById("menuButton"),
  navigation: document.getElementById("navigation"),

  carousel: document.getElementById("productsCarousel"),
  carouselPrevious: document.getElementById("carouselPrevious"),
  carouselNext: document.getElementById("carouselNext"),
  carouselIndicators: document.getElementById("carouselIndicators"),

  productSearch: document.getElementById("productSearch"),
  categoryFilters: document.getElementById("categoryFilters"),
  productOrder: document.getElementById("productOrder"),

  productsGrid: document.getElementById("productsGrid"),
  catalogResultText: document.getElementById("catalogResultText"),
  emptyResults: document.getElementById("emptyResults"),
  clearFilters: document.getElementById("clearFilters"),
  loadMoreProducts: document.getElementById("loadMoreProducts"),

  toast: document.getElementById("toast"),
  toastMessage: document.getElementById("toastMessage")
};

/* ---------------------------------------------------------
   FORMATAÇÃO
--------------------------------------------------------- */

function formatarPreco(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);
}

function escaparHTML(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ---------------------------------------------------------
   WHATSAPP
--------------------------------------------------------- */

function obterNumeroWhatsApp() {
  return CONFIGURACOES.whatsapp.replace(/\D/g, "");
}

function whatsappConfigurado() {
  const numero = obterNumeroWhatsApp();

  return (
    numero.length >= 12 &&
    CONFIGURACOES.whatsapp !== "SEU_NUMERO_AQUI"
  );
}

function criarLinkWhatsApp(mensagem) {
  if (!whatsappConfigurado()) {
    return "#";
  }

  const numero = obterNumeroWhatsApp();
  const texto = encodeURIComponent(mensagem);

  return `https://wa.me/${numero}?text=${texto}`;
}

function criarMensagemProduto(produto) {
  return [
    "Olá! Vim pelo site da Ana Essenci e quero comprar este produto:",
    "",
    `Produto: ${produto.nome}`,
    `Código: ${produto.codigo}`,
    `Preço: ${formatarPreco(produto.preco)}`,
    "",
    "Gostaria de confirmar a disponibilidade, as formas de pagamento e as opções de entrega."
  ].join("\n");
}

function configurarLinksWhatsAppGerais() {
  const link = criarLinkWhatsApp(CONFIGURACOES.mensagemGeral);

  document
    .querySelectorAll(".js-whatsapp-geral")
    .forEach((elemento) => {
      elemento.href = link;

      if (!whatsappConfigurado()) {
        elemento.dataset.naoConfigurado = "true";
      }
    });
}

/* ---------------------------------------------------------
   GMAIL
--------------------------------------------------------- */

function criarLinkGmail() {
  const destinatario = encodeURIComponent(
    CONFIGURACOES.emailSuporte
  );

  const assunto = encodeURIComponent(
    CONFIGURACOES.assuntoEmail
  );

  const mensagem = encodeURIComponent(
    CONFIGURACOES.mensagemEmail
  );

  return (
    "https://mail.google.com/mail/?" +
    `view=cm&fs=1&to=${destinatario}` +
    `&su=${assunto}&body=${mensagem}`
  );
}

function configurarLinksGmail() {
  const link = criarLinkGmail();

  document
    .querySelectorAll(".js-gmail-link")
    .forEach((elemento) => {
      elemento.href = link;
    });
}

/* ---------------------------------------------------------
   CARD DO PRODUTO
--------------------------------------------------------- */

function criarHTMLProduto(produto, destaque = false) {
  const mensagem = criarMensagemProduto(produto);
  const link = criarLinkWhatsApp(mensagem);

  const textoCompleto =
    `${produto.chamada} ${produto.descricao}`;

  return `
    <a
      class="product-card js-product-link"
      href="${link}"
      target="_blank"
      rel="noopener noreferrer"
      data-product-id="${escaparHTML(produto.id)}"
      data-whatsapp-configurado="${whatsappConfigurado()}"
      aria-label="Comprar ${escaparHTML(produto.nome)} pelo WhatsApp"
    >
      <div class="product-card__image-container">
        ${
          destaque
            ? '<span class="product-card__badge">Mais vendido</span>'
            : ""
        }

        <img
          class="product-card__image"
          src="${escaparHTML(produto.imagem)}"
          alt="${escaparHTML(produto.nome)}"
          loading="lazy"
        >
      </div>

      <div class="product-card__content">
        <span class="product-card__category">
          ${escaparHTML(produto.categoriaNome)}
        </span>

        <h3 class="product-card__title">
          ${escaparHTML(produto.nome)}
        </h3>

        <p class="product-card__copy">
          ${escaparHTML(textoCompleto)}
        </p>

        <p class="product-card__code">
          Código:
          <strong>${escaparHTML(produto.codigo)}</strong>
        </p>

        <div class="product-card__footer">
          <div>
            <span class="product-card__price-label">
              Por
            </span>

            <strong class="product-card__price">
              ${formatarPreco(produto.preco)}
            </strong>
          </div>

          <span
            class="product-card__button"
            aria-hidden="true"
          >
            <img
              src="icons/whatsapp.png"
              alt=""
            >
          </span>
        </div>
      </div>
    </a>
  `;
}

/* ---------------------------------------------------------
   CORREÇÃO DE IMAGENS QUEBRADAS
--------------------------------------------------------- */

function configurarFallbackDeImagens(container) {
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
        imagem.alt = "Imagem temporariamente indisponível";
      },
      { once: true }
    );
  });
}

/* ---------------------------------------------------------
   CARROSSEL DOS MAIS VENDIDOS
--------------------------------------------------------- */

function obterMaisVendidos() {
  return PRODUTOS
    .filter((produto) => produto.posicaoDestaque > 0)
    .sort(
      (produtoA, produtoB) =>
        produtoA.posicaoDestaque -
        produtoB.posicaoDestaque
    );
}

function renderizarCarrossel() {
  if (!elementos.carousel) {
    return;
  }

  const destaques = obterMaisVendidos();

  elementos.carousel.innerHTML = destaques
    .map((produto) => criarHTMLProduto(produto, true))
    .join("");

  renderizarIndicadoresCarrossel(destaques.length);
  configurarFallbackDeImagens(elementos.carousel);
  configurarLinksProdutos(elementos.carousel);
}

function renderizarIndicadoresCarrossel(quantidade) {
  if (!elementos.carouselIndicators) {
    return;
  }

  elementos.carouselIndicators.innerHTML = Array.from(
    { length: quantidade },
    (_, indice) => {
      return `
        <button
          type="button"
          class="${indice === 0 ? "is-active" : ""}"
          data-carousel-index="${indice}"
          aria-label="Ir para o produto ${indice + 1}"
        ></button>
      `;
    }
  ).join("");
}

function obterLarguraMovimentoCarrossel() {
  if (!elementos.carousel) {
    return 300;
  }

  const primeiroCard =
    elementos.carousel.querySelector(".product-card");

  if (!primeiroCard) {
    return 300;
  }

  const estilos = window.getComputedStyle(
    elementos.carousel
  );

  const gap = Number.parseFloat(estilos.columnGap) || 22;

  return primeiroCard.getBoundingClientRect().width + gap;
}

function moverCarrossel(direcao) {
  if (!elementos.carousel) {
    return;
  }

  elementos.carousel.scrollBy({
    left: obterLarguraMovimentoCarrossel() * direcao,
    behavior: "smooth"
  });
}

function atualizarIndicadorCarrossel() {
  if (
    !elementos.carousel ||
    !elementos.carouselIndicators
  ) {
    return;
  }

  const larguraMovimento =
    obterLarguraMovimentoCarrossel();

  const indice = Math.round(
    elementos.carousel.scrollLeft / larguraMovimento
  );

  const indicadores =
    elementos.carouselIndicators.querySelectorAll("button");

  indicadores.forEach((indicador, indicadorIndice) => {
    indicador.classList.toggle(
      "is-active",
      indicadorIndice === indice
    );
  });
}

function configurarCarrossel() {
  if (!elementos.carousel) {
    return;
  }

  elementos.carouselPrevious?.addEventListener(
    "click",
    () => moverCarrossel(-1)
  );

  elementos.carouselNext?.addEventListener(
    "click",
    () => moverCarrossel(1)
  );

  elementos.carousel.addEventListener(
    "scroll",
    atualizarIndicadorCarrossel,
    { passive: true }
  );

  elementos.carouselIndicators?.addEventListener(
    "click",
    (evento) => {
      const indicador = evento.target.closest(
        "[data-carousel-index]"
      );

      if (!indicador) {
        return;
      }

      const indice = Number(
        indicador.dataset.carouselIndex
      );

      elementos.carousel.scrollTo({
        left: obterLarguraMovimentoCarrossel() * indice,
        behavior: "smooth"
      });
    }
  );

  let intervaloAutomatico = null;

  function iniciarMovimentoAutomatico() {
    pararMovimentoAutomatico();

    intervaloAutomatico = window.setInterval(() => {
      const chegouAoFinal =
        elementos.carousel.scrollLeft +
          elementos.carousel.clientWidth >=
        elementos.carousel.scrollWidth - 10;

      if (chegouAoFinal) {
        elementos.carousel.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        moverCarrossel(1);
      }
    }, 5000);
  }

  function pararMovimentoAutomatico() {
    if (intervaloAutomatico) {
      window.clearInterval(intervaloAutomatico);
      intervaloAutomatico = null;
    }
  }

  elementos.carousel.addEventListener(
    "mouseenter",
    pararMovimentoAutomatico
  );

  elementos.carousel.addEventListener(
    "mouseleave",
    iniciarMovimentoAutomatico
  );

  elementos.carousel.addEventListener(
    "focusin",
    pararMovimentoAutomatico
  );

  elementos.carousel.addEventListener(
    "focusout",
    iniciarMovimentoAutomatico
  );

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        pararMovimentoAutomatico();
      } else {
        iniciarMovimentoAutomatico();
      }
    }
  );

  iniciarMovimentoAutomatico();
}

/* ---------------------------------------------------------
   FILTROS DO CATÁLOGO
--------------------------------------------------------- */

function obterProdutosFiltrados() {
  const pesquisaNormalizada = normalizarTexto(
    estadoCatalogo.pesquisa
  );

  let resultado = PRODUTOS.filter((produto) => {
    const correspondeCategoria =
      estadoCatalogo.categoria === "todos" ||
      produto.categoria === estadoCatalogo.categoria;

    const textoProduto = normalizarTexto(
      [
        produto.nome,
        produto.codigo,
        produto.categoriaNome,
        produto.chamada,
        produto.descricao
      ].join(" ")
    );

    const correspondePesquisa =
      !pesquisaNormalizada ||
      textoProduto.includes(pesquisaNormalizada);

    return correspondeCategoria && correspondePesquisa;
  });

  if (estadoCatalogo.ordem === "nome-az") {
    resultado = [...resultado].sort((produtoA, produtoB) =>
      produtoA.nome.localeCompare(
        produtoB.nome,
        "pt-BR"
      )
    );
  }

  if (estadoCatalogo.ordem === "preco-menor") {
    resultado = [...resultado].sort(
      (produtoA, produtoB) =>
        produtoA.preco - produtoB.preco
    );
  }

  if (estadoCatalogo.ordem === "preco-maior") {
    resultado = [...resultado].sort(
      (produtoA, produtoB) =>
        produtoB.preco - produtoA.preco
    );
  }

  if (estadoCatalogo.ordem === "padrao") {
    resultado = [...resultado].sort(
      (produtoA, produtoB) =>
        produtoA.ordemOriginal -
        produtoB.ordemOriginal
    );
  }

  return resultado;
}

/* ---------------------------------------------------------
   RENDERIZAÇÃO DO CATÁLOGO
--------------------------------------------------------- */

function renderizarCatalogo() {
  if (!elementos.productsGrid) {
    return;
  }

  const produtosFiltrados = obterProdutosFiltrados();

  const produtosVisiveis = produtosFiltrados.slice(
    0,
    estadoCatalogo.quantidadeVisivel
  );

  elementos.productsGrid.innerHTML = produtosVisiveis
    .map((produto) => criarHTMLProduto(produto, false))
    .join("");

  configurarFallbackDeImagens(elementos.productsGrid);
  configurarLinksProdutos(elementos.productsGrid);

  atualizarInformacoesCatalogo(
    produtosFiltrados.length,
    produtosVisiveis.length
  );
}

function atualizarInformacoesCatalogo(
  quantidadeTotal,
  quantidadeVisivel
) {
  if (elementos.catalogResultText) {
    if (quantidadeTotal === 0) {
      elementos.catalogResultText.textContent =
        "Nenhum produto encontrado.";
    } else if (quantidadeTotal === 1) {
      elementos.catalogResultText.textContent =
        "1 produto encontrado.";
    } else {
      elementos.catalogResultText.textContent =
        `${quantidadeTotal} produtos encontrados.`;
    }
  }

  if (elementos.emptyResults) {
    elementos.emptyResults.hidden =
      quantidadeTotal !== 0;
  }

  if (elementos.loadMoreProducts) {
    const deveEsconder =
      quantidadeTotal === 0 ||
      quantidadeVisivel >= quantidadeTotal;

    elementos.loadMoreProducts
      .parentElement
      ?.classList.toggle(
        "is-hidden",
        deveEsconder
      );
  }
}

/* ---------------------------------------------------------
   LINKS DOS PRODUTOS
--------------------------------------------------------- */

function configurarLinksProdutos(container) {
  if (!container) {
    return;
  }

  const links = container.querySelectorAll(
    ".js-product-link"
  );

  links.forEach((link) => {
    link.addEventListener("click", (evento) => {
      if (!whatsappConfigurado()) {
        evento.preventDefault();

        mostrarToast(
          "Coloque o número do WhatsApp no início do arquivo script.js."
        );
      }
    });
  });
}

/* ---------------------------------------------------------
   EVENTOS DOS FILTROS
--------------------------------------------------------- */

function configurarCatalogo() {
  elementos.productSearch?.addEventListener(
    "input",
    (evento) => {
      estadoCatalogo.pesquisa =
        evento.target.value;

      estadoCatalogo.quantidadeVisivel =
        estadoCatalogo.produtosPorPagina;

      renderizarCatalogo();
    }
  );

  elementos.categoryFilters?.addEventListener(
    "click",
    (evento) => {
      const botao = evento.target.closest(
        "[data-category]"
      );

      if (!botao) {
        return;
      }

      estadoCatalogo.categoria =
        botao.dataset.category;

      estadoCatalogo.quantidadeVisivel =
        estadoCatalogo.produtosPorPagina;

      elementos.categoryFilters
        .querySelectorAll("[data-category]")
        .forEach((item) => {
          item.classList.toggle(
            "is-active",
            item === botao
          );
        });

      renderizarCatalogo();
    }
  );

  elementos.productOrder?.addEventListener(
    "change",
    (evento) => {
      estadoCatalogo.ordem =
        evento.target.value;

      estadoCatalogo.quantidadeVisivel =
        estadoCatalogo.produtosPorPagina;

      renderizarCatalogo();
    }
  );

  elementos.loadMoreProducts?.addEventListener(
    "click",
    () => {
      estadoCatalogo.quantidadeVisivel +=
        estadoCatalogo.produtosPorPagina;

      renderizarCatalogo();
    }
  );

  elementos.clearFilters?.addEventListener(
    "click",
    limparFiltrosCatalogo
  );
}

function limparFiltrosCatalogo() {
  estadoCatalogo.categoria = "todos";
  estadoCatalogo.pesquisa = "";
  estadoCatalogo.ordem = "padrao";
  estadoCatalogo.quantidadeVisivel =
    estadoCatalogo.produtosPorPagina;

  if (elementos.productSearch) {
    elementos.productSearch.value = "";
  }

  if (elementos.productOrder) {
    elementos.productOrder.value = "padrao";
  }

  elementos.categoryFilters
    ?.querySelectorAll("[data-category]")
    .forEach((botao) => {
      botao.classList.toggle(
        "is-active",
        botao.dataset.category === "todos"
      );
    });

  renderizarCatalogo();
}

/* ---------------------------------------------------------
   MENU MOBILE
--------------------------------------------------------- */

function abrirMenu() {
  elementos.navigation?.classList.add("is-open");
  elementos.menuButton?.classList.add("is-active");

  elementos.menuButton?.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add("menu-open");
}

function fecharMenu() {
  elementos.navigation?.classList.remove("is-open");
  elementos.menuButton?.classList.remove("is-active");

  elementos.menuButton?.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.classList.remove("menu-open");
}

function configurarMenu() {
  elementos.menuButton?.addEventListener(
    "click",
    () => {
      const menuAberto =
        elementos.navigation?.classList.contains(
          "is-open"
        );

      if (menuAberto) {
        fecharMenu();
      } else {
        abrirMenu();
      }
    }
  );

  elementos.navigation
    ?.querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener("click", fecharMenu);
    });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      fecharMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      fecharMenu();
    }
  });
}

/* ---------------------------------------------------------
   CABEÇALHO AO ROLAR
--------------------------------------------------------- */

function configurarCabecalho() {
  function atualizarCabecalho() {
    elementos.header?.classList.toggle(
      "is-scrolled",
      window.scrollY > 20
    );
  }

  window.addEventListener(
    "scroll",
    atualizarCabecalho,
    { passive: true }
  );

  atualizarCabecalho();
}

/* ---------------------------------------------------------
   ANIMAÇÕES AO ROLAR
--------------------------------------------------------- */

function configurarAnimacoesDeRolagem() {
  const elementosReveal =
    document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elementosReveal.forEach((elemento) => {
      elemento.classList.add("is-visible");
    });

    return;
  }

  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add(
            "is-visible"
          );

          observer.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  elementosReveal.forEach((elemento, indice) => {
    elemento.style.transitionDelay =
      `${Math.min(indice * 45, 240)}ms`;

    observador.observe(elemento);
  });
}

/* ---------------------------------------------------------
   TOAST
--------------------------------------------------------- */

let temporizadorToast = null;

function mostrarToast(mensagem) {
  if (!elementos.toast || !elementos.toastMessage) {
    window.alert(mensagem);
    return;
  }

  elementos.toastMessage.textContent = mensagem;
  elementos.toast.classList.add("is-visible");

  if (temporizadorToast) {
    window.clearTimeout(temporizadorToast);
  }

  temporizadorToast = window.setTimeout(() => {
    elementos.toast.classList.remove("is-visible");
  }, 3500);
}

/* ---------------------------------------------------------
   LINKS NÃO CONFIGURADOS
--------------------------------------------------------- */

function configurarAvisosDeLinks() {
  document.addEventListener("click", (evento) => {
    const link = evento.target.closest(
      "[data-nao-configurado='true']"
    );

    if (!link) {
      return;
    }

    evento.preventDefault();

    mostrarToast(
      "Coloque o número do WhatsApp no início do arquivo script.js."
    );
  });
}

/* ---------------------------------------------------------
   LOADER
--------------------------------------------------------- */

function esconderLoader() {
  if (!elementos.loader) {
    return;
  }

  elementos.loader.classList.add("is-hidden");

  window.setTimeout(() => {
    elementos.loader.remove();
  }, 700);
}

function configurarLoader() {
  window.addEventListener("load", () => {
    window.setTimeout(esconderLoader, 450);
  });

  window.setTimeout(esconderLoader, 2800);
}

/* ---------------------------------------------------------
   INICIALIZAÇÃO
--------------------------------------------------------- */

function iniciarSite() {
  configurarLinksWhatsAppGerais();
  configurarLinksGmail();

  renderizarCarrossel();
  renderizarCatalogo();

  configurarCarrossel();
  configurarCatalogo();
  configurarMenu();
  configurarCabecalho();
  configurarAnimacoesDeRolagem();
  configurarAvisosDeLinks();
  configurarLoader();
}

document.addEventListener(
  "DOMContentLoaded",
  iniciarSite
);