📚 My Repositories

Aplicação web desenvolvida para consultar e visualizar informações de repositórios do GitHub de forma simples, rápida e organizada.

🔗 Projeto online: https://my-repositories-qqbl.vercel.app/

📌 Sobre o projeto

O My Repositories é uma aplicação que utiliza a API do GitHub para buscar informações de repositórios e apresentar seus dados de maneira intuitiva.

O projeto foi desenvolvido com foco em praticar conceitos de desenvolvimento Front-end, consumo de APIs, gerenciamento de estados, rotas e construção de interfaces responsivas.

🚀 Funcionalidades
🔎 Busca e consulta de repositórios do GitHub
📁 Listagem de repositórios
📄 Visualização de informações detalhadas do repositório
🐛 Consulta de issues
🔗 Acesso ao repositório diretamente pelo GitHub
📱 Interface responsiva
⏳ Estados de carregamento
⚠️ Tratamento de erros durante as requisições
🔄 Paginação de resultados
🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias modernas do ecossistema Front-end:

React
TypeScript
Vite
Axios
React Router
Tailwind CSS
Git e GitHub
Vercel

🔌 Consumo da API

A aplicação utiliza a GitHub REST API para obter os dados dos repositórios.

Entre as informações que podem ser consultadas estão:

Nome do repositório
Descrição
Proprietário
Avatar do proprietário
URL do repositório
Issues
Estado das issues

A utilização de uma API externa permite que os dados sejam carregados dinamicamente, sem necessidade de manter uma base de dados própria para os repositórios.

🔄 Fluxo da aplicação

O funcionamento principal pode ser representado da seguinte forma:

Usuário
↓
Pesquisa/seleciona um repositório
↓
Aplicação realiza uma requisição HTTP
↓
GitHub API
↓
Dados retornados
↓
Componentes React
↓
Informações exibidas na interface
🎯 Objetivos do projeto

O projeto teve como principais objetivos:

Praticar desenvolvimento com React e TypeScript.
Aprender a consumir APIs REST.
Trabalhar com requisições HTTP utilizando Axios.
Criar interfaces reutilizáveis através de componentes.
Trabalhar com rotas e parâmetros dinâmicos.
Implementar paginação.
Trabalhar com estados de carregamento e erro.
Desenvolver uma aplicação responsiva.
Realizar deploy de uma aplicação Front-end.
💻 Como executar o projeto

1. Clone o repositório
   git clone URL_DO_SEU_REPOSITORIO
2. Entre na pasta
   cd nome-do-projeto
3. Instale as dependências
   npm install
4. Execute o projeto
   npm run dev

A aplicação ficará disponível no endereço informado pelo Vite, normalmente:

http://localhost:5173
📦 Build

Para gerar a versão de produção:

npm run build

Para visualizar a versão de produção localmente:

npm run preview
☁️ Deploy

O projeto está publicado utilizando a Vercel.

A Vercel permite integração com repositórios Git e pode realizar novos deployments automaticamente a partir de alterações enviadas ao repositório.

📱 Responsividade

A interface foi desenvolvida pensando em diferentes tamanhos de tela, proporcionando uma experiência adequada em:

💻 Desktop
💻 Notebook
📱 Tablet
📱 Smartphone
🧠 Principais aprendizados

Durante o desenvolvimento foram trabalhados conceitos importantes como:

Componentização com React
Tipagem com TypeScript
Hooks
React Router
Parâmetros de URL
Consumo de APIs REST
Axios
Tratamento de estados assíncronos
Paginação
Tratamento de erros
Responsividade
Organização de código
Deploy com Vercel
🔮 Possíveis melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

⭐ Favoritar repositórios
🔐 Autenticação com GitHub
🔎 Filtros avançados
🌙 Dark Mode
📊 Dashboard com estatísticas
🔔 Notificações
💾 Persistência de repositórios favoritos
🧪 Testes automatizados
⚡ Otimização de cache das requisições
👨‍💻 Autor

Kaynan Teixeira

Desenvolvedor Front-end focado em criar interfaces modernas, responsivas e funcionais.

Tecnologias

HTML CSS JavaScript TypeScript React Next.js Tailwind CSS

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
