
function ClickMenu() {
    var navMenu = document.getElementById('NAV-MENU')
    var menu = document.getElementById('menu')
    if (navMenu.style.display == 'none') {
        navMenu.style.display = 'block'
        menu.innerText = 'close'
    }else{
        navMenu.style.display = 'none'
        menu.innerText = 'menu'
    }
}
function receita() {
    var bloco1 = document.getElementById('web4-bloco1')
    var bloco2 = document.getElementById('web4-bloco2')
    var back = document.getElementById('web4')
    if(bloco2.style.display == 'block') {
        bloco2.style.display = 'none'
        bloco1.style.display = 'block'
        back.style.background = '#B18659'
    }else {
        bloco1.style.display = 'none'
        bloco2.style.display = 'block'
        back.style.background = '#3E2318'
    }
}
var produto1 = 0
var produto2 = 0
var produto3 = 0
var produto4 = 0
var produto5 = 0
var produto6 = 0
var produto7 = 0
var produto8 = 0

var carrinho1 = 9.50
var carrinho2 = 3.00
var carrinho3 = 5.00
var carrinho4 = 2.00
var carrinho5 = 6.50
var carrinho6 = 9.00
var carrinho7 = 16.00
var carrinho8 = 8.90
var totalcompra = document.getElementById('total-compra')
var total = 0

function adicionarProduto(nome, quantidade, preco) {
    var listaProdutos = document.getElementById('lista-produtos');

    // Verifica se jÃ¡ existe um item para este produto na lista
    var itensProduto = listaProdutos.getElementsByClassName(nome);

    if (quantidade === 0 && itensProduto.length > 0) {
        // Se a quantidade Ã© zero, e hÃ¡ um item existente, remove o item
        listaProdutos.removeChild(itensProduto[0]);
    } else if (itensProduto.length > 0) {
        // Se jÃ¡ existe, atualiza apenas a quantidade
        var itemExistente = itensProduto[0];
        itemExistente.innerText = `${nome} - Quantidade: ${quantidade}, Preço Unitário: ${preco.toFixed(2)}`;
    } else {
        // Se nÃ£o existe, e a quantidade nÃ£o Ã© zero, cria um novo item
        if (quantidade !== 0) {
            var novoProduto = document.createElement('li');
            novoProduto.className = nome;  // Adiciona uma classe com o nome do produto para identificaÃ§Ã£o
            novoProduto.innerText = `${nome} - Quantidade: ${quantidade}, Preço Unitário: ${preco.toFixed(2)}`;
            listaProdutos.appendChild(novoProduto);
        }
    }
}
function atualizarTotal() {
    total = (produto1 * carrinho1) + 
            (produto2 * carrinho2) + 
            (produto3 * carrinho3) + 
            (produto4 * carrinho4) + 
            (produto5 * carrinho5) + 
            (produto6 * carrinho6) + 
            (produto7 * carrinho7) + 
            (produto8 * carrinho8);

    totalcompra.innerText = `Total: ${total.toFixed(2)}R$`;
}

function clickProdMais01() {
    produto1 = Math.min(produto1 + 1, 9);
    atualizarTotal();
    adicionarProduto("Café Expresso", produto1, carrinho1);
    document.getElementById('numero01').innerText = produto1;
}
function clickProdMenos01() {
    produto1 = Math.max(produto1 - 1, 0);
    atualizarTotal();
    adicionarProduto("Café Expresso", produto1, carrinho1); document.getElementById('numero01').innerText = produto1;
}
function clickProdMais02() {
    produto2 = Math.min(produto2 + 1, 9);
    atualizarTotal();
    adicionarProduto("Café Americano", produto2, carrinho2); document.getElementById('numero02').innerText = produto2;
}
function clickProdMenos02() {
    produto2 = Math.max(produto2 - 1, 0);
    atualizarTotal();
    adicionarProduto("Café Americano", produto2, carrinho2);
document.getElementById('numero02').innerText = produto2;
}

function clickProdMais03() {
    produto3 = Math.min(produto3 + 1, 9);
    atualizarTotal();
    adicionarProduto("Café Latte", produto3, carrinho3); document.getElementById('numero03').innerText = produto3;
}
function clickProdMenos03() {
    produto3 = Math.max(produto3 - 1, 0);
    atualizarTotal();
    adicionarProduto("Café Latte", produto3, carrinho3); document.getElementById('numero03').innerText = produto3;
}

function clickProdMais04() {
    produto4 = Math.min(produto4 + 1, 9);
    atualizarTotal();
   adicionarProduto("Capuccino", produto4, carrinho4); document.getElementById('numero04').innerText = produto4;
}
function clickProdMenos04() {
    produto4 = Math.max(produto4 - 1, 0);
    atualizarTotal();
    adicionarProduto("Capuccino", produto4, carrinho4); document.getElementById('numero04').innerText = produto4;
}

function clickProdMais05() {
    produto5 = Math.min(produto5 + 1, 9);
    atualizarTotal();
    adicionarProduto("Macchiato", produto5, carrinho5); document.getElementById('numero05').innerText = produto5;
}
function clickProdMenos05() {
    produto5 = Math.max(produto5 - 1, 0);
    atualizarTotal();
    adicionarProduto("Macchiato", produto5, carrinho5); document.getElementById('numero05').innerText = produto5;
}

function clickProdMais06() {
    produto6 = Math.min(produto6 + 1, 9);
    atualizarTotal();
    adicionarProduto("Mocha", produto6, carrinho6); document.getElementById('numero06').innerText = produto6;
}
function clickProdMenos06() {
    produto6 = Math.max(produto6 - 1, 0);
    atualizarTotal();
    adicionarProduto("Mocha", produto6, carrinho6); document.getElementById('numero06').innerText = produto6;
}

function clickProdMais07() {
    produto7 = Math.min(produto7 + 1, 9);
    atualizarTotal();
   adicionarProduto("Affogato", produto7, carrinho7); document.getElementById('numero07').innerText = produto7;
}
function clickProdMenos07() {
    produto7 = Math.max(produto7 - 1, 0);
    atualizarTotal();
    adicionarProduto("Affogato", produto7, carrinho7); document.getElementById('numero07').innerText = produto7;
}
function clickProdMais08() {
    produto8 = Math.min(produto8 + 1, 9);
    atualizarTotal();
    adicionarProduto("Cold Brew", produto8, carrinho8); document.getElementById('numero08').innerText = produto8;
}
function clickProdMenos08() {
    produto8 = Math.max(produto8 - 1, 0);
    atualizarTotal();
    adicionarProduto("Cold Brew", produto8, carrinho8); document.getElementById('numero08').innerText = produto8;
}
function confirmar() {
var alerta = document.getElementById('alerta')
var meg = document.getElementById('meg')
    if(alerta.style.display == 'block') {
        alerta.style.display = 'none'
    }else {
        alerta.style.display = 'block'
        if (total == 0) {
            meg.innerText = `Por favor, adicione itens ao seu carrinho `
        }else{
            meg.innerText = `Compra efetuada no valor de: ${total.toFixed(2)}R$`
        }
    }
}

atualizarTotal();
