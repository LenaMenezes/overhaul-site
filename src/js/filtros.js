    // Dados dos carros
    const carros = [
        { imagem: "src/img/carro2.png", nome: "Continental 6.0 W12 Turbo Flying Spur", preco: 430000, km: 40000, ano: 2011, cor: "Branca", fabricante: "BYD", modelo: "Continental" },
        { imagem: "src/img/carro1.png", nome: "Cayenne 3.0 V6 E-Hybrid Coupe AWD S", preco: 740000, km: 24240, ano: 2022, cor: "Preta", fabricante: "Porsche", modelo: "Cayenne" },
        { imagem: "src/img/carro1.png", nome: "SUV", preco: 500000, km: 35000, ano: 2021, cor: "Azul", fabricante: "Porsche", modelo: "Cayenne" },
        { imagem: "src/img/carro1.png", nome: "Esportivo", preco: 950000, km: 10000, ano: 2023, cor: "Vermelha", fabricante: "BYD", modelo: "Continental" },
        { imagem: "src/img/carro1.png", nome: "Fusion Hybrid", preco: 120000, km: 20000, ano: 2018, cor: "Prata", fabricante: "Ford", modelo: "Fusion" },
        { imagem: "src/img/carro1.png", nome: "Mustang GT", preco: 280000, km: 15000, ano: 2020, cor: "Amarela", fabricante: "Ford", modelo: "Mustang" },
        { imagem: "src/img/carro1.png", nome: "Continental 6.0 W12 Turbo Flying Spur", preco: 430000, km: 40000, ano: 2011, cor: "Branca", fabricante: "BYD", modelo: "Continental" },
        { imagem: "src/img/carro1.png", nome: "Cayenne 3.0 V6 E-Hybrid Coupe AWD S", preco: 740000, km: 24240, ano: 2022, cor: "Preta", fabricante: "Porsche", modelo: "Cayenne" },
        { imagem: "src/img/carro1.png", nome: "SUV", preco: 500000, km: 35000, ano: 2021, cor: "Azul", fabricante: "Porsche", modelo: "Cayenne" },
        { imagem: "src/img/carro1.png", nome: "Esportivo", preco: 950000, km: 10000, ano: 2023, cor: "Vermelha", fabricante: "BYD", modelo: "Continental" },
        { imagem: "src/img/carro1.png", nome: "Fusion Hybrid", preco: 120000, km: 20000, ano: 2018, cor: "Prata", fabricante: "Ford", modelo: "Fusion" },
        { imagem: "src/img/carro1.png", nome: "Mustang GT", preco: 280000, km: 15000, ano: 2020, cor: "Amarela", fabricante: "Ford", modelo: "Mustang" },
        { imagem: "src/img/carro1.png", nome: "Continental 6.0 W12 Turbo Flying Spur", preco: 430000, km: 40000, ano: 2011, cor: "Branca", fabricante: "BYD", modelo: "Continental" },
        { imagem: "src/img/carro1.png", nome: "Cayenne 3.0 V6 E-Hybrid Coupe AWD S", preco: 740000, km: 24240, ano: 2022, cor: "Preta", fabricante: "Porsche", modelo: "Cayenne" },
        { imagem: "src/img/carro1.png", nome: "SUV", preco: 500000, km: 35000, ano: 2021, cor: "Azul", fabricante: "Porsche", modelo: "Cayenne" },
        { imagem: "src/img/carro1.png", nome: "Esportivo", preco: 950000, km: 10000, ano: 2023, cor: "Vermelha", fabricante: "BYD", modelo: "Continental" },
        { imagem: "src/img/carro1.png", nome: "Fusion Hybrid", preco: 120000, km: 20000, ano: 2018, cor: "Prata", fabricante: "Ford", modelo: "Fusion" },
        { imagem: "src/img/carro1.png", nome: "Mustang GT", preco: 280000, km: 15000, ano: 2020, cor: "Amarela", fabricante: "Ford", modelo: "Mustang" },
        { imagem: "src/img/carro1.png", nome: "Continental 6.0 W12 Turbo Flying Spur", preco: 430000, km: 40000, ano: 2011, cor: "Branca", fabricante: "BYD", modelo: "Continental" },
        { imagem: "src/img/carro1.png", nome: "Cayenne 3.0 V6 E-Hybrid Coupe AWD S", preco: 740000, km: 24240, ano: 2022, cor: "Preta", fabricante: "Porsche", modelo: "Cayenne" },
        { imagem: "src/img/carro1.png", nome: "SUV", preco: 500000, km: 35000, ano: 2021, cor: "Azul", fabricante: "Porsche", modelo: "Cayenne" },
        { imagem: "src/img/carro1.png", nome: "Esportivo", preco: 950000, km: 10000, ano: 2023, cor: "Vermelha", fabricante: "BYD", modelo: "Continental" },
        { imagem: "src/img/carro1.png", nome: "Fusion Hybrid", preco: 120000, km: 20000, ano: 2018, cor: "Prata", fabricante: "Ford", modelo: "Fusion" },
        { imagem: "src/img/carro1.png", nome: "Mustang GT", preco: 280000, km: 15000, ano: 2020, cor: "Amarela", fabricante: "Ford", modelo: "Mustang" },
        
        // Adicione mais carros conforme necessário...
    ];
    
    // Variáveis de controle de paginação
    const carrosPorPagina = 3;
    let paginaAtual = 1;
    let carrosFiltrados = carros; // Armazena a lista filtrada de carros
    
    // Função para atualizar a exibição dos carros com paginação
    function atualizarCarrosComPaginacao(carros) {
        const carList = document.querySelector(".car-list");
        carList.innerHTML = ""; // Limpa a lista atual
    
        // Calcular o índice de início e fim da página atual
        const inicio = (paginaAtual - 1) * carrosPorPagina;
        const fim = inicio + carrosPorPagina;
        const carrosPagina = carros.slice(inicio, fim);
    
        // Renderizar os carros da página atual
        carrosPagina.forEach(carro => {
            const carItem = document.createElement("div");
            carItem.classList.add("car-item");
    
            carItem.innerHTML = `
                <img src="${carro.imagem}" alt="${carro.nome}">
                <div class="car-details">
                    <h2>${carro.nome}</h2>
                    <p>R$ ${carro.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                    <p>KM: ${carro.km}</p>
                    <p>Ano/Modelo: ${carro.ano}</p>
                    <p>Cor Externa: ${carro.cor}</p>
                    <button>Mais Detalhes > </button>
                </div>
            `;
            carList.appendChild(carItem);
        });
    
        // Atualizar os controles de paginação
        atualizarPaginacao(carros);
    }
    
    // Função para atualizar os botões de paginação com "..." no meio
    function atualizarPaginacao(carros) {
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = ""; // Limpa a paginação atual
    
        const totalPaginas = Math.ceil(carros.length / carrosPorPagina);
    
        // Função para criar botão de página
        function criarBotao(numero) {
            const button = document.createElement("button");
            button.innerText = numero;
            button.classList.add("page-button");
            if (numero === paginaAtual) button.classList.add("active");
    
            button.addEventListener("click", () => {
                paginaAtual = numero;
                atualizarCarrosComPaginacao(carros); // Atualiza carros ao clicar
            });
    
            pagination.appendChild(button);
        }
    
        // Botão para a primeira página sempre
        criarBotao(1);
    
        // Botão "..." no meio se houver mais de 5 páginas
        if (totalPaginas > 5) {
            if (paginaAtual > 3) {
                const dots = document.createElement("span");
                dots.innerText = "...";
                pagination.appendChild(dots);
            }
    
            // Botões próximos da página atual
            for (let i = Math.max(2, paginaAtual - 1); i <= Math.min(totalPaginas - 1, paginaAtual + 1); i++) {
                criarBotao(i);
            }
    
            if (paginaAtual < totalPaginas - 2) {
                const dots = document.createElement("span");
                dots.innerText = "...";
                pagination.appendChild(dots);
            }
        } else {
            // Exibe todas as páginas se forem até 5
            for (let i = 2; i < totalPaginas; i++) {
                criarBotao(i);
            }
        }
    
        // Botão para a última página
        if (totalPaginas > 1) criarBotao(totalPaginas);
    }
    
    // Inicializar a página com todos os carros e a primeira página de exibição
    window.onload = function() {
        atualizarCarrosComPaginacao(carros); // Exibe a primeira página com todos os carros
    };
    
    // Botão de busca: filtra e ordena os carros, depois atualiza a exibição
    document.getElementById("buscar").addEventListener("click", function() {
        const pesquisa = document.getElementById("pesquisa").value.toLowerCase();
    
        // Filtrando carros conforme a pesquisa
        carrosFiltrados = carros.filter(carro => {
            return pesquisa === "" || carro.nome.toLowerCase().includes(pesquisa);
        });
    
        // Reseta a página atual para 1 após buscar e filtrar
        paginaAtual = 1;
        atualizarCarrosComPaginacao(carrosFiltrados);
    });