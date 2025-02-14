// Products Data
const products = [
    {
        id: 1,
        name: "Pro Basketball",
        price: "R89.99",
        description: "Official size and weight professional basketball",
        image: "img/Basketball.jpeg"
    },
    {
        id: 2,
        name: "Championship Soccer Ball",
        price: "R129.99",
        description: "FIFA-approved match soccer ball",
        image: "img/Soccerball.jpeg"
    },
    {
        id: 3,
        name: "Tournament Volleyball",
        price: "R59.99",
        description: "Professional beach volleyball",
        image: "img/Volleyball.jpeg"
    },
    {
        id: 4,
        name: "Elite Tennis Ball",
        price: "R39.99",
        description: "Championship-grade tennis ball",
        image: "img/Tennis.jpeg"
    },
    {
        id: 5,
        name: "Pro Football",
        price: "R69.99",
        description: "Official NFL-size football",
        image: "img/Football.jpeg"
    }
];

// Initialize Products
function initProducts() {
    const grid = document.querySelector('.products-grid');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        card.addEventListener('click', () => showProductModal(product));
        grid.appendChild(card);
    });
}

// Show Product Modal
function showProductModal(product) {
    const modal = document.getElementById('productModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
    `;
    modal.style.display = 'block';
}

// Auth Modal
document.getElementById('loginBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.getElementById('authModal');
    const content = document.getElementById('authContent');
    content.innerHTML = `
        <h2>Sign Up</h2>
        <form>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `;
    modal.style.display = 'block';
});

// Close Modal
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Auth Modal
document.getElementById('signupBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.getElementById('authModal');
    const content = document.getElementById('authContent');
    content.innerHTML = `
        <h2>Sign Up</h2>
        <form>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="button" onclick="showSignUp()">Create Account</button>
        </form>
    `;
    modal.style.display = 'block';
});

// Close Modal
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initProducts();
    
    // Close modal on outside click
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    }
});