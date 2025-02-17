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
    const div = document.getElementById('cart-container');
    for (const cart of items.pets) {
        console.log(cart);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="card">
          <figure>
            <img
              src="${cart.image}"
              class = "rounded-lg"
              alt="Image here" />
          </figure>
          <div class="space-y-1">
            <h2 class="text-xl font-bold">${cart.pet_name}</h2>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame.svg"/><p>Breed: ${cart.breed}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (1).svg"/><p>Birth: ${cart.date_of_birth}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (2).svg"/><p>Gender: ${cart.gender}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (3).svg"/><p>Price: ${cart.price}</p></div>
          </div>
        </div>
        `
        div.append(newDiv);
    }
}

loadCategories();
loadCategoriesItem();