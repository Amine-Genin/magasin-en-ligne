let cart = [];
let products = [];

// Load products from localStorage if available
function loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    } else {
        // If no saved products, initialize with default products
        products = [
            { name: 'Parfum A', price: 20, category: 'Parfums', image: 'data:image/jpeg;base64,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' },
            { name: 'Parfum B', price: 25, category: 'Parfums', image: 'data:image/jpeg;base64,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' },
            { name: 'Cloth A', price: 50, category: 'Cloth', image: 'https://shorturl.at/vqLde'},
            { name: 'Cloth B', price: 70, category: 'Cloth', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbFxcM4eAwBgSOjxLnI3dLSULZVORtpHi1g0qRcMftC7NPD_u3NGMMeeN8awb2qWu5e5onJi0tekbuyzDanJlYEtUmKwESLp_KvlY5hUsFErCgj0JYsFKu&usqp=CAE' },
            { name: 'Phone A', price: 200, category: 'Phones', image: 'https://shorturl.at/F4fjI' },
            { name: 'Phone B', price: 250, category: 'Phones', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQsSguT0t2ZWQCYUUKFT15ShKLdjl6lehWtOSmnic7sbGlxx834jrssON9AdaWTX1nJMfWPqg4Zzl_2d2XWkcOF6DRwBqzKJLxwGxrZUUjGsyArnhzxBOKm&usqp=CAE' }
        ];
    }
}

// Save products to localStorage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function displayProducts(filteredProducts = products) {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = '';

    const categories = [...new Set(filteredProducts.map(product => product.category))];
    
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        const productList = document.createElement('div');
        productList.classList.add('product-list');
        const productsInCategory = filteredProducts.filter(product => product.category === category);
        productsInCategory.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.setAttribute('data-name', product.name);
            productDiv.setAttribute('data-price', product.price);
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h2>${product.name}</h2>
                <p>Prix: ${product.price}€</p>
                <button onclick="addToCart(this)" class="dynamic-button">Ajouter au panier</button>
            `;
            productList.appendChild(productDiv);
        });

        categoryDiv.appendChild(productList);
        categoriesContainer.appendChild(categoryDiv);
    });
}

function addToCart(button) {
    const product = button.parentElement;
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));

    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}€`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

function processPayment() {
    const paymentMethod = document.getElementById('payment-method').value;
    if (cart.length === 0) {
        alert('Votre panier est vide!');
    } else {
        alert(`Paiement de ${document.getElementById('total-price').textContent}€ avec ${paymentMethod}. Merci pour votre achat!`);
        cart = [];
        updateCart();
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if ((username === 'admin' && password === 'admin') || (username === 'user' && password === 'user')) {
        loggedIn = true;
        userRole = username === 'admin' ? 'Admin' : 'User';
        document.getElementById('user-role').textContent = userRole;
        document.querySelector('.login-section').style.display = 'none';
        document.querySelector('.logout-section').style.display = 'block';
        if (userRole === 'Admin') {
            document.querySelector('.add-product-section').style.display = 'block';
        }
        displayProducts();
    } else {
        document.getElementById('login-message').textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
}

function logout() {
    loggedIn = false;
    userRole = '';
    document.getElementById('user-role').textContent = '';
    document.querySelector('.login-section').style.display = 'block';
    document.querySelector('.logout-section').style.display = 'none';
    document.querySelector('.add-product-section').style.display = 'none';
}

function addNewProduct() {
    if (!loggedIn || userRole !== 'Admin') return;
    const name = document.getElementById('new-product-name').value;
    const price = parseFloat(document.getElementById('new-product-price').value);
    const category = document.getElementById('new-product-category').value;
    const image = document.getElementById('new-product-image').value;

    if (name && price && category && image) {
        products.push({ name, price, category, image });
        saveProducts(); // Save the updated products to localStorage
        displayProducts();
        alert('Produit ajouté avec succès!');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
}

function searchProduct() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Initialize the product list
loadProducts(); // Load products from localStorage or initialize default products
displayProducts();
