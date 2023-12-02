let carrinho = [];

function adicionarAoCarrinho(item, preco) {
    carrinho.push({ item, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('carrinho-lista');
    const totalElement = document.getElementById('total');
    
    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function finalizarCompra() {
    // Aqui você pode adicionar lógica para coletar informações do cliente e enviar para o WhatsApp
    // Por exemplo, usando a API do WhatsApp, se disponível.
    alert('Compra finalizada! Pedido enviado para o WhatsApp.');
    carrinho = []; // Limpar carrinho após a compra
    atualizarCarrinho();
}


 
// ... (código anterior) ...

// Número de telefone fixo para redirecionamento ao WhatsApp
const numeroTelefone = '5516981231356';

function finalizarCompra() {
    // Construir o link do WhatsApp com o número de telefone e a mensagem
    const mensagem = encodeURIComponent('Olá, Aqui está o resumo do meu pedido:');
    const linkWhatsApp = `https://wa.me/${5516981231356}?text=${mensagem}`;

    // Redirecionar para o link do WhatsApp
    window.location.href = linkWhatsApp;

    // Limpar carrinho após a compra
    carrinho = [];
    atualizarCarrinho();
}


// ... (código anterior) ...

// ... (funções anteriores) ...

// Função para adicionar ao carrinho com escolha de tamanho (para lanches) e bebida
function adicionarAoCarrinhoComTamanhoEBebeda(item, preco) {
    // Adicionar escolha de tamanho para lanches
    const tamanho = prompt('Escolha o tamanho (20cm, 30cm, ):');
    if (!tamanho || (tamanho !== '20cm' && tamanho !== '30cm')) {
        alert('Escolha de tamanho inválida.');
        return;
    }

    // Adicionar escolha de bebida
    const comBebida = confirm('Deseja adicionar uma bebida por mais $1.99?');
    const bebida = comBebida ? 'com Bebida' : 'sem Bebida';

    carrinho.push({ item: `${item} - ${tamanho} ${bebida}`, preco });
    atualizarCarrinho();
}

// Função para adicionar lanche ao carrinho com escolha de tamanho
function adicionarLancheAoCarrinho(item, preco) {
    // Adicionar escolha de tamanho para lanches
    const tamanho = prompt('Escolha o tamanho (20cm, 30cm,):');
    if (!tamanho || (tamanho !== '20cm' && tamanho !== '30cm')) {
        alert('Escolha de tamanho inválida.');
        return;
    }

    carrinho.push({ item: `${item} - ${tamanho}`, preco });
    atualizarCarrinho();
}

// ... (outras funções) ...

// ... (código anterior) ...

function finalizarCompra() {
    const mensagemPedido = construirMensagemPedido();

    // Construir o link do WhatsApp com o número de telefone e a mensagem
    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemPedido)}`;

    // Redirecionar para o link do WhatsApp
    window.location.href = linkWhatsApp;

    // Limpar carrinho após a compra
    carrinho = [];
    atualizarCarrinho();
}

function construirMensagemPedido() {
    let mensagem = 'Olá, Aqui está o resumo do meu pedido:\n\n';

    carrinho.forEach(item => {
        mensagem += `${item.item} - $${item.preco.toFixed(2)}\n`;
    });

    mensagem += `\nTotal: $${calcularTotal().toFixed(2)}`;

    return mensagem;
}

function calcularTotal() {
    return carrinho.reduce((total, item) => total + item.preco, 0);
}



// ... (código anterior) ...

function finalizarCompra() {
    const endereco = document.getElementById('endereco').value;

    if (!endereco) {
        alert('Por favor, digite seu endereço.');
        return;
    }

    const mensagemPedido = construirMensagemPedido(endereco);

    // Construir o link do WhatsApp com o número de telefone e a mensagem
    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemPedido)}`;

    // Redirecionar para o link do WhatsApp
    window.location.href = linkWhatsApp;

    // Limpar carrinho após a compra
    carrinho = [];
    atualizarCarrinho();
}

function construirMensagemPedido(endereco) {
    let mensagem = `Olá, Aqui está o resumo do meu pedido:\n\n`;

    carrinho.forEach(item => {
        mensagem += `${item.item} - $${item.preco.toFixed(2)}\n`;
    });

    mensagem += `\nEndereço de entrega:\n${endereco}\n\nTotal: $${calcularTotal().toFixed(2)}`;

    return mensagem;
}

// ... (outras funções) ...


// ... (código anterior) ...

function finalizarCompra() {
    const endereco = document.getElementById('endereco').value;
    const formaPagamento = document.getElementById('forma-pagamento').value;

    if (!endereco) {
        alert('Por favor, digite seu endereço.');
        return;
    }

    if (!formaPagamento) {
        alert('Por favor, escolha uma forma de pagamento.');
        return;
    }

    const mensagemPedido = construirMensagemPedido(endereco, formaPagamento);

    // Construir o link do WhatsApp com o número de telefone e a mensagem
    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemPedido)}`;

    // Redirecionar para o link do WhatsApp
    window.location.href = linkWhatsApp;

    // Limpar carrinho após a compra
    carrinho = [];
    atualizarCarrinho();
}

function construirMensagemPedido(endereco, formaPagamento) {
    let mensagem = `Olá, Aqui está o resumo do meu pedido:\n\n`;

    carrinho.forEach(item => {
        mensagem += `${item.item} - $${item.preco.toFixed(2)}\n`;
    });

    mensagem += `\nEndereço de entrega:\n${endereco}\n`;
    mensagem += `Forma de pagamento: ${formaPagamento}\n\nTotal: $${calcularTotal().toFixed(2)}`;

    return mensagem;
}

// ... (outras funções) ...

