# Portfólio — Pascoal Nzola Tondo

Portfólio pessoal em React + Vite.

## Correr localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
```

## Editar conteúdo

Todo o texto (perfil, percurso, projetos, competências, serviços) está em
[`src/data/profile.js`](src/data/profile.js). Não é preciso mexer nos componentes.

- Links do GitHub / LinkedIn / WhatsApp → `profile.socials`
- Link de um projeto online → campo `link` do projeto (ativa o botão "Visitar projeto")
- Cor de cada projeto → campo `color`

## Funcionalidades

- Tema claro/escuro (guardado no browser)
- Menu de comandos com `Ctrl + K`
- Efeito de escrita no título, contadores animados, animações ao fazer scroll
- Filtro de projetos + janela de detalhes
- Competências por separadores com barras animadas
- Formulário de contacto (abre o cliente de email) e botão copiar email
- Barra de progresso, holofote que segue o cursor, botão voltar ao topo
- Totalmente responsivo

## Publicar

Faz `npm run build` e envia a pasta `dist/` para Vercel, Netlify ou GitHub Pages.
