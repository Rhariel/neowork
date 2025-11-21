# Neowork

Uma plataforma web moderna e intuitiva para descobrir e conectar com profissionais de diferentes áreas e especialidades.

## Pages
https://rhariel.github.io/neowork/

## Video
https://youtu.be/bISvzFYipEU?si=7qK4KtLJYrSO5B3D
## Sobre o Projeto

**Neowork** é uma Single Page Application (SPA) desenvolvida em React que funciona como um diretório profissional interativo. O aplicativo permite buscar, filtrar e visualizar perfis de profissionais com seus dados de experiência, formação e habilidades técnicas.

### Funcionalidades Principais

- 🔍 **Busca Avançada**: Pesquise por nome ou habilidades técnicas
- 🏷️ **Filtros Dinâmicos**: Filtre profissionais por área e localização
- 🎨 **Dark Mode**: Suporte completo para tema escuro e claro
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- 🪟 **Modal Detalhado**: Visualize informações completas do profissional em um modal
- 💬 **Ações Rápidas**: Botões para recomendar profissional e enviar mensagens

### Stack Tecnológico

- **Frontend**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.8
- **Build Tool**: Vite 5.0.0
- **CSS Processing**: PostCSS + Autoprefixer
- **Data**: JSON estático com 50+ perfis profissionais

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Rhariel/neowork.git
   cd neowork
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para build de produção:
   ```bash
   npm run build
   ```

5. Para visualizar a versão de produção:
   ```bash
   npm run preview
   ```

## Estrutura do Projeto

```
neowork/
├── src/
│   ├── App.jsx           # Componente principal com lógica de filtros
│   ├── main.jsx          # Ponto de entrada da aplicação
│   ├── index.css         # Estilos globais
│   └── data/
│       └── profiles.json # Base de dados com perfis profissionais
├── index.html            # HTML principal
├── vite.config.js        # Configuração do Vite
├── tailwind.config.cjs   # Configuração do Tailwind CSS
├── postcss.config.cjs    # Configuração do PostCSS
└── package.json          # Dependências do projeto
```

## Componentes Principais

### App.jsx
- Gerencia o estado da aplicação (busca, filtros, tema)
- Implementa filtragem em tempo real
- Controla abertura e fechamento do modal
- Alterna entre temas claro e escuro

### Modal
- Exibe informações detalhadas do profissional
- Mostra experiências profissionais
- Exibe formação acadêmica
- Oferece opções de recomendação e mensagem

### Card
- Apresenta preview do perfil profissional
- Mostra habilidades técnicas em tags
- Oferece interação para abrir modal completo

### Avatar
- Componente reutilizável para imagens de perfil
- Aplica efeitos de arredondamento e object-fit

## Dados

O arquivo `profiles.json` contém informações de profissionais como:
- Nome e foto
- Cargo e localização
- Resumo profissional
- Habilidades técnicas e soft skills
- Histórico de experiências
- Formação acadêmica

## Autores

- **Rhariel** (RM: 566310)
- **Francisco Nogueira de Queiroz** (RM: 566309)

