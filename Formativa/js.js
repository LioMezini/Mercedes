        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Dados de exemplo (você pode substituí-los com seus próprios dados)
        var dados = [
            { id: 1, nome: "Estofamento Premium", descricao: "Estofamento de couro genuíno, disponível em várias cores e padrões elegantes.", preco: 1500.00, emEstoque: true },
            { id: 2, nome: "Painéis de Porta Personalizados", descricao: "Painéis de porta feitos sob medida com materiais de alta qualidade e designs exclusivos.", preco: 800.00, emEstoque: true },
            { id: 3, nome: "Tapetes Personalizados", descricao: "Tapetes sob medida, duráveis e fáceis de limpar, disponíveis em várias cores e estilos.", preco: 200.00, emEstoque: false },
            { id: 4, nome: "Iluminação Ambiente LED", descricao: "Conjunto de luzes LED para criar uma atmosfera aconchegante no interior do carro, com opções de cores personalizáveis.", preco: 300.00, emEstoque: true },
            { id: 5, nome: "Volante de Couro Premium", descricao: "Volante revestido em couro de alta qualidade, proporcionando uma sensação de luxo ao toque.", preco: 400.00, emEstoque: true },
            { id: 6, nome: "Sistema de Entretenimento", descricao: "Sistema de áudio premium, telas de entretenimento para os bancos traseiros e opções de conectividade avançada.", preco: 1000.00, emEstoque: true },
            { id: 7, nome: "Acessórios de Organização Interna", descricao: "Organizadores de porta, suportes para copos, ganchos e bolsas para manter o interior do carro organizado.", preco: 50.00, emEstoque: true },
            { id: 8, nome: "Coberturas de Banco", descricao: "Capas de banco elegantes e confortáveis, feitas de materiais de alta qualidade e com designs modernos.", preco: 100.00, emEstoque: true },
            { id: 9, nome: "Aromatizadores de Ambiente", descricao: "Aromatizadores elegantes que mantêm o interior do carro com um aroma fresco e agradável.", preco: 30.00, emEstoque: true },
            { id: 10, nome: "Câmera de Ré e Sistema de Segurança", descricao: "Câmera de ré de alta resolução e sistema de segurança avançado para aumentar a segurança do veículo.", preco: 300.00, emEstoque: true },
            { id: 11, nome: "Tapetes de Borracha", descricao: "Tapetes de borracha resistentes à água e fáceis de limpar, ideais para proteger o interior do carro contra sujeira e umidade.", preco: 80.00, emEstoque: true },
            { id: 12, nome: "Capas para Volante", descricao: "Capas de volante confortáveis e antiderrapantes, disponíveis em várias cores e padrões.", preco: 25.00, emEstoque: true },
            { id: 13, nome: "Protetores de Banco para Animais de Estimação", descricao: "Protetores de banco resistentes a arranhões e à prova d'água, projetados para viajar com animais de estimação.", preco: 120.00, emEstoque: true },
            { id: 14, nome: "Carregador de Dispositivos USB", descricao: "Carregador de dispositivos USB para carros com portas de carregamento rápido para smartphones e outros dispositivos eletrônicos.", preco: 35.00, emEstoque: true },
            { id: 15, nome: "Câmera de Visão Noturna com Reconhecimento Facial", descricao: "Câmera de visão noturna com tecnologia de reconhecimento facial para segurança avançada durante a condução noturna.", preco: 4500.00, emEstoque: true },
            { id: 16, nome: "Assentos Massageadores de Couro de Bezerro", descricao: "Assentos massageadores revestidos em couro de bezerro com múltiplos programas de massagem.", preco: 8500.00, emEstoque: true },
            { id: 17, nome: "Teto Solar Panorâmico de Cristal", descricao: "Teto solar panorâmico de cristal com controle de opacidade para ajustar a entrada de luz.", preco: 9000.00, emEstoque: true },
            { id: 18, nome: "Sistema de Entretenimento Traseiro com Tela 4K OLED", descricao: "Sistema de entretenimento traseiro com tela OLED 4K e capacidade de streaming.", preco: 12000.00, emEstoque: true },
            { id: 19, nome: "Bancos Traseiros Reclináveis Elétricos", descricao: "Bancos traseiros reclináveis eletricamente com controle de massagem e aquecimento.", preco: 9500.00, emEstoque: true },
            { id: 20, nome: "Sistema de Controle de Clima Individual", descricao: "Sistema de controle de clima individual para passageiros traseiros com ajuste de temperatura e ventilação personalizada.", preco: 7500.00, emEstoque: true }
            // Adicione mais produtos conforme necessário
        ];
        
        

        // Função para criar e adicionar linhas à tabela
        function criarLinhasTabela() {
            var tbody = document.querySelector("#tabelaComplexa tbody");

            dados.forEach(function (produto) {
                var row = document.createElement("tr");

                var idCell = document.createElement("td");
                idCell.textContent = produto.id;

                var nomeCell = document.createElement("td");
                nomeCell.textContent = produto.nome;

                var descricaoCell = document.createElement("td");
                descricaoCell.textContent = produto.descricao;

                var precoCell = document.createElement("td");
                precoCell.textContent = produto.preco.toFixed(2); // Formata o preço com duas casas decimais

                var emEstoqueCell = document.createElement("td");
                emEstoqueCell.textContent = produto.emEstoque ? "Sim" : "Não";

                row.appendChild(idCell);
                row.appendChild(nomeCell);
                row.appendChild(descricaoCell);
                row.appendChild(precoCell);
                row.appendChild(emEstoqueCell);

                tbody.appendChild(row);
            });
        }       

        // Chama a função para criar as linhas da tabela ao carregar a página
        criarLinhasTabela();

        // Ative o DataTables na tabela
        $(document).ready(function () {
            $('#tabelaComplexa').DataTable();
        });


// TABELA DE FORNECEDORES

var dadosFornecedores = [
        { id: 1, nome: "Fornecedor de Couro Premium", produto: "Couro de alta qualidade para estofamento", contato: "contato@fornecedorcouro.com", telefone: "(11) 98765-4321" },
        { id: 2, nome: "Fábrica de Madeira Nobre", produto: "Madeira de nogueira para painéis de porta", contato: "contato@madeiranobre.com", telefone: "(11) 98765-6789" },
        { id: 3, nome: "Tapetes de Luxo Personalizados", produto: "Tapetes feitos à mão com seda e lã", contato: "contato@tapetesdeluxo.com", telefone: "(11) 98765-9876" },
        { id: 4, nome: "Fornecedor de Pele de Jacaré", produto: "Pele de jacaré para revestimento de volantes", contato: "contato@jacarepremium.com", telefone: "(11) 98765-1122" },
        { id: 5, nome: "Bang & Olufsen - Distribuidor Oficial", produto: "Sistemas de áudio premium Bang & Olufsen", contato: "contato@bangolufsen.com", telefone: "(11) 98765-3344" }
    ];
    

function criarLinhasTabelaFornecedores() {
    var tbody = document.querySelector("#tabelaFornecedores tbody");

    dadosFornecedores.forEach(function (fornecedor) {
        var row = document.createElement("tr");

        var idCell = document.createElement("td");
        idCell.textContent = fornecedor.id;

        var nomeCell = document.createElement("td");
        nomeCell.textContent = fornecedor.nome;

        var produtoCell = document.createElement("td");
        produtoCell.textContent = fornecedor.produto;

        var contatoCell = document.createElement("td");
        contatoCell.textContent = fornecedor.contato;

        var telefoneCell = document.createElement("td");
        telefoneCell.textContent = fornecedor.telefone;

        row.appendChild(idCell);
        row.appendChild(nomeCell);
        row.appendChild(produtoCell);
        row.appendChild(contatoCell);
        row.appendChild(telefoneCell);

        tbody.appendChild(row);
    });
}

criarLinhasTabelaFornecedores();
$(document).ready(function () {
    $('#tabelaFornecedores').DataTable();
});

// TABELA DE PRODUÇÃO

var dadosCustosProducao = [
    { id: 1, descricao: "Custo de Mão de Obra", valor: 4000000.00 },
    { id: 2, descricao: "Custo de Equipamentos", valor: 3000000 },
    { id: 3, descricao: "Custo de Energia", valor: 1000000.00 },
    { id: 4, descricao: "Custo de Manutenção", valor: 600000 },
    { id: 5, descricao: "Custo de Matéria-Prima", valor: 8000000 }
    // Adicione mais dados conforme necessário
];

function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR');
}

function criarLinhasTabelaCustosProducao() {
    var tbody = document.querySelector("#tabelaProducao tbody");

    dadosCustosProducao.forEach(function (custo) {
        var row = document.createElement("tr");

        var idCell = document.createElement("td");
        idCell.textContent = custo.id;

        var descricaoCell = document.createElement("td");
        descricaoCell.textContent = custo.descricao;

        var valorCell = document.createElement("td");
        valorCell.textContent = "R$ " + formatarNumero(custo.valor.toFixed(2)); // Formata o valor com ponto para milhares

        row.appendChild(idCell);
        row.appendChild(descricaoCell);
        row.appendChild(valorCell);

        tbody.appendChild(row);
    });
}

criarLinhasTabelaCustosProducao();
$(document).ready(function () {
    $('#tabelaProducao').DataTable();
});



// VALORES MATERIA PRIMA
var materiaPrima = [
    { id: 1, nome: "Couro de Grão Integral", preco: 500.00, unidade: "metro quadrado" },
    { id: 2, nome: "Madeira de Nogueira", preco: 150.00, unidade: "metro cúbico" },
    { id: 3, nome: "Seda", preco: 200.00, unidade: "metro quadrado" },
    { id: 4, nome: "Lã", preco: 120.00, unidade: "metro quadrado" },
    { id: 5, nome: "Peles de Jacaré", preco: 800.00, unidade: "metro quadrado" },
    { id: 6, nome: "Diamantes", preco: 5000.00, unidade: "quilate" },
    { id: 7, nome: "Ouro 24k", preco: 1500.00, unidade: "grama" },
    { id: 8, nome: "Alcântara", preco: 300.00, unidade: "metro quadrado" },
    { id: 9, nome: "Fragrâncias Exclusivas", preco: 50.00, unidade: "frasco" },
    { id: 10, nome: "Tela OLED 4K", preco: 1000.00, unidade: "polegada quadrada" },
    { id: 11, nome: "Cashmere", preco: 180.00, unidade: "metro quadrado" },
    { id: 12, nome: "Cristal", preco: 300.00, unidade: "metro quadrado" },
    { id: 13, nome: "Película de Privacidade", preco: 80.00, unidade: "metro quadrado" },
    { id: 14, nome: "Platina", preco: 1500.00, unidade: "grama" },
    { id: 15, nome: "Caxemira", preco: 250.00, unidade: "metro quadrado" },
    { id: 16, nome: "Couro de Bezerro", preco: 450.00, unidade: "metro quadrado" },
    { id: 17, nome: "Componentes Eletrônicos para Navegação", preco: 300.00, unidade: "peça" },
    { id: 18, nome: "Câmeras de Visão Noturna", preco: 600.00, unidade: "peça" },
    { id: 19, nome: "Mecanismos Elétricos para Bancos", preco: 200.00, unidade: "peça" },
    { id: 20, nome: "Componentes para Controle de Clima", preco: 180.00, unidade: "peça" }
];

function criarLinhasTabelaMateriaPrima() {
    var tbody = document.querySelector("#tabelaPrima tbody");

    // Limpa as linhas existentes na tabela
    tbody.innerHTML = '';

    materiaPrima.forEach(function (materia) {
        var row = document.createElement("tr");

        var idCell = document.createElement("td");
        idCell.textContent = materia.id;

        var nomeCell = document.createElement("td");
        nomeCell.textContent = materia.nome;

        var precoCell = document.createElement("td");
        precoCell.textContent = "R$" + materia.preco.toFixed(2) + " por " + materia.unidade;

        row.appendChild(idCell);
        row.appendChild(nomeCell);
        row.appendChild(precoCell);

        tbody.appendChild(row);
    });
}

criarLinhasTabelaMateriaPrima();
$(document).ready(function () {
    $('#tabelaPrima').DataTable();
});




// TABELA VALOR DO FRETE POR KM
var dadosFretes = [
    { id: 1, destino: "São Paulo", valorPorKm: 2.50 },
    { id: 2, destino: "Rio de Janeiro", valorPorKm: 3.00 },
    { id: 3, destino: "Minas Gerais", valorPorKm: 2.80 },
    { id: 4, destino: "Bahia", valorPorKm: 3.20 },
    { id: 5, destino: "Paraná", valorPorKm: 2.90 },
    { id: 6, destino: "Santa Catarina", valorPorKm: 2.70 },
    { id: 7, destino: "Rio Grande do Sul", valorPorKm: 2.60 },
    { id: 8, destino: "Pernambuco", valorPorKm: 3.10 },
    { id: 9, destino: "Ceará", valorPorKm: 3.15 },
    { id: 10, destino: "Goiás", valorPorKm: 2.75 }
    // Adicione mais dados conforme necessário
];

function criarLinhasTabelaFretes() {
    var tbody = document.querySelector("#tabelaFretes tbody");

    // Limpa as linhas existentes na tabela
    tbody.innerHTML = '';

    dadosFretes.forEach(function (frete) {
        var row = document.createElement("tr");

        var idCell = document.createElement("td");
        idCell.textContent = frete.id;

        var destinoCell = document.createElement("td");
        destinoCell.textContent = frete.destino;

        var valorPorKmCell = document.createElement("td");
        valorPorKmCell.textContent = "R$" + frete.valorPorKm.toFixed(2); // Formata o valor com duas casas decimais

        row.appendChild(idCell);
        row.appendChild(destinoCell);
        row.appendChild(valorPorKmCell);

        tbody.appendChild(row);
    });
}

criarLinhasTabelaFretes();
$(document).ready(function () {
    $('#tabelaFretes').DataTable();
});
