const configuracoes = {
  // Coloque apenas números, com 55 + DDD + número.
  // Exemplo: "5562999999999"
  whatsapp: "SEU_NUMERO_AQUI",

  // Exemplo: "contato@anaessenci.com.br"
  email: "SEU_EMAIL_AQUI",

  // Exemplo: "https://www.instagram.com/anaessenci"
  instagram: "LINK_DO_INSTAGRAM_AQUI",

  // Mensagem que aparecerá pronta quando o cliente abrir o WhatsApp.
  mensagemWhatsApp:
    "Olá! Vim pelo site da Ana Essenci e gostaria de conhecer os produtos disponíveis."
};

function criarLinkWhatsApp() {
  const numero = configuracoes.whatsapp.trim();
  const mensagem = encodeURIComponent(configuracoes.mensagemWhatsApp);

  if (!numero || numero === "SEU_NUMERO_AQUI") {
    return "#";
  }

  return `https://wa.me/${numero}?text=${mensagem}`;
}

function criarLinkEmail() {
  const email = configuracoes.email.trim();

  if (!email || email === "SEU_EMAIL_AQUI") {
    return "#";
  }

  const assunto = encodeURIComponent("Contato pelo site Ana Essenci");

  return `mailto:${email}?subject=${assunto}`;
}

function configurarLinks() {
  const whatsappLink = criarLinkWhatsApp();
  const emailLink = criarLinkEmail();
  const instagramLink = configuracoes.instagram.trim();

  document.querySelectorAll(".js-whatsapp-link").forEach((elemento) => {
    elemento.href = whatsappLink;
  });

  document.querySelectorAll(".js-email-link").forEach((elemento) => {
    elemento.href = emailLink;
  });

  document.querySelectorAll(".js-instagram-link").forEach((elemento) => {
    if (
      instagramLink &&
      instagramLink !== "LINK_DO_INSTAGRAM_AQUI"
    ) {
      elemento.href = instagramLink;
    } else {
      elemento.href = "#";
    }
  });
}

function configurarAnimacoes() {
  const elementos = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elementos.forEach((elemento) => {
      elemento.classList.add("is-visible");
    });

    return;
  }

  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observer.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elementos.forEach((elemento, indice) => {
    elemento.style.transitionDelay = `${Math.min(indice * 55, 280)}ms`;
    observador.observe(elemento);
  });
}

function impedirLinksNaoConfigurados() {
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (evento) => {
      const linkDeContato =
        link.classList.contains("js-whatsapp-link") ||
        link.classList.contains("js-email-link") ||
        link.classList.contains("js-instagram-link");

      if (linkDeContato) {
        evento.preventDefault();

        console.warn(
          "Configure o número, o e-mail ou o Instagram no arquivo script.js."
        );
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  configurarLinks();
  configurarAnimacoes();
  impedirLinksNaoConfigurados();
});