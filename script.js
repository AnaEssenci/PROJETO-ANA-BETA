"use strict";

/* =========================================================
   ANA ESSENCI — SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  atualizarAno();
  configurarLinksSociais();
});

/* =========================================================
   ANO AUTOMÁTICO DO RODAPÉ
========================================================= */

function atualizarAno() {
  const elementoAno = document.getElementById("currentYear");

  if (!elementoAno) {
    return;
  }

  elementoAno.textContent = new Date().getFullYear();
}

/* =========================================================
   LINKS SOCIAIS AINDA NÃO CONFIGURADOS
========================================================= */

function configurarLinksSociais() {
  const linksSociais = document.querySelectorAll(
    '.social-card[href="#"]'
  );

  linksSociais.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const nomeRede =
        link.querySelector("strong")?.textContent || "Rede social";

      alert(
        `O link do ${nomeRede} ainda será adicionado.`
      );
    });
  });
}