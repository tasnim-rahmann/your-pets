// load category buttons
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(response => response.json())
        .then(data => displayCategories(data))
        .catch(error => console.error(error))
}

// display category buttons
const displayCategories = (items) => {
    const div = document.getElementById('category-button');
    for (const buttons of items.categories) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <button class="btn bg-slate-200 border-gray-300 px-8 font-semibold text-2xl hover:bg-slate-300 rounded-sm"><img class="max-w-6 gap-3" src="${buttons.category_icon}" />${buttons.category}</button>
        `
        div.append(newDiv);
    }
}

// load category item
const loadCategoriesItem = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(response => response.json())
        .then(data => displayCategoriesItem(data))
}

const displayCategoriesItem = (items) => {
    console.log(items.pets);
    const div = document.getElementById('cart-container');
    for (const cart of items.pets) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="card card-compact">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        `
        div.append(newDiv);
    }
}

loadCategories();
loadCategoriesItem();