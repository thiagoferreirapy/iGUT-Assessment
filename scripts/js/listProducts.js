function loadProducts() {
    let table = document.getElementById("produtos");
    tbody = document.getElementById("produtos")
    const tabela = document.querySelector('#produtos tbody');
    let allproduct = document.querySelector('#countProduct')

    fetch('../scripts/php/listProducts.php')
        .then(response => {
            return response.text();
        })
        .then(text => {
            try {
                const data = JSON.parse(text);
                if (data.error) {
                    document.body.innerHTML = '<h1>Erro ao carregar dados</h1>';
                    return;
                }else{
                    tabela.innerHTML = '';
                    if (data.length == 0) {
                        table.innerHTML = '<h1>Você não possui produtos cadastrados</h1>';
                    }else{
                        allproduct.innerText = data.length
                        data.forEach(produto => {
                            const linha = document.createElement('tr');
                            linha.innerHTML = `
                                <td class="td-collum-center">${produto.id}</td>
                                <td>${produto.name}</td>
                                <td class="td-collum-center">R$ ${produto.price}</td>
                            `;
                            tabela.appendChild(linha);
                        });
                    }
                };   

            } catch (e) {
                if (data.length == 0) {
                    table.innerHTML = '<h1>Você não possui produtos cadastrados</h1>';
                }
            }
        })
        .catch(error => {
            if (data.length == 0) {
                table.innerHTML = '<h1>Você não possui produtos cadastrados</h1>';
            }
        });
};

function openRegisterModal() {
    var modal = document.getElementById('registerModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}


function closeRegisterModal() {
    var modal = document.getElementById('registerModal');
    var form = document.querySelector('#registerModal form');

    if (modal) {
        modal.style.display = 'none';
        loadProducts()
        if (form) {
            form.reset();
        }
    }
}



document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this);
    var dataObject = {};
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });

    fetch('../scripts/php/registerProducts.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObject)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                closeRegisterModal()
                showAlert('Produto cadastrado com sucesso!', 'success');


            } else {
                showAlert('Erro ao cadastrar o produto: ' + data.message, 'error');
            }
        })
        .catch(error => {
            showAlert('Erro ao cadastrar o produto: ' + error);
        });
});


function showAlert(message, type) {
    const container = document.getElementById('alert-container');
    const alert = document.createElement('div');
    const text = document.createElement('span');
    const icon = document.createElement('span');
    const closeButton = document.createElement('button');

    alert.className = `alert ${type}`;

    icon.className = 'icon';
    icon.innerHTML = type === 'success' ? '✓' : '✗';
    alert.appendChild(icon);

    text.innerText = message;
    alert.appendChild(text);
    
    closeButton.className = 'close-btn';
    closeButton.innerText = '×';
    closeButton.onclick = () => {
        alert.style.opacity = 0;
        setTimeout(() => {
            alert.remove();
        }, 500);
    };
    alert.appendChild(closeButton);
    container.appendChild(alert);

    alert.style.display = 'flex';
    setTimeout(() => {
        alert.style.opacity = 0;
        setTimeout(() => {
            alert.remove();
        }, 500);
    }, 3000);
}

const input = document.getElementById('autocomplete-input');
input.addEventListener('input', function () {
    
    const suggestionsContainer = document.getElementById('autocomplete-suggestions');
    const tableBody = document.querySelector('#produtos tbody');
    const value = this.value.toLowerCase();

    suggestionsContainer.innerHTML = '';

    if (value) {
        fetch(`../scripts/php/autocomplete.php?query=${encodeURIComponent(value)}`)
            .then(response => response.json())
            .then(data => {
                // Função para atualizar o autocomplete do input
                suggestionsContainer.innerHTML = '';
                if (data.length) {
                    data.forEach(suggestion => {
                        const div = document.createElement('div');
                        div.classList.add('autocomplete-suggestion');
                        div.textContent = suggestion.name;
                        div.addEventListener('click', function () {
                            input.value = this.textContent;
                            suggestionsContainer.innerHTML = '';
                        });
                        suggestionsContainer.appendChild(div);
                    });
                } else {
                    loadProducts();
                }

                // Função para atualizar a tabela com os dados do autocomplete
                tableBody.innerHTML = '';
                if (data.length) {
                    data.forEach(produto => {
                        const linha = document.createElement('tr');
                        linha.innerHTML = `
                            <td class="td-collum-center">${produto.id}</td>
                            <td>${produto.name}</td>
                            <td class="td-collum-center">${produto.price}</td>
                                `;
                        tableBody.appendChild(linha);
                    });
                } else {
                    loadProducts();
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    } else {
        loadProducts();
    }
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.autocomplete-container')) {
        suggestionsContainer.innerHTML = '';
    }
});