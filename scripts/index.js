// load category buttons
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.error(error))
}

// display category buttons
const displayCategories = (items) => {
    const div = document.getElementById('category-button');
    for (const button of items) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <button id="btn-${button.id}" class="btn bg-slate-200 border-gray-300 px-8 font-semibold text-lg lg:text-2xl hover:bg-slate-300 rounded-sm"><img class="w-4 lg:w-6 gap-3" src="${button.category_icon}"/>${button.category}</button>
        `
        div.append(newDiv);
    }
}

// load category items
const loadCategoriesItem = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(response => response.json())
        .then(data => displayCategoriesItem(data))
}

// display category items
const displayCategoriesItem = (items) => {
    const div = document.getElementById('cart-container');
    for (const cart of items.pets) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="border-2 p-4 rounded-md">
          <figure>
            <img
              src="${cart.image}"
              class = "rounded-lg w-full object-cover"
              alt="Image here" />
          </figure>
          <div class="space-y-1">
            <h2 class="text-xl font-bold">${cart.pet_name}</h2>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame.svg"/><p>Breed: ${cart.breed}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (1).svg"/><p>Birth: ${cart.date_of_birth}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (2).svg"/><p>Gender: ${cart.gender}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (3).svg"/><p>Price: ${cart.price}</p></div>
            <hr>
            <div class="flex justify-between">
                <button class="btn bg-slate-200 border-gray-300 px-2 lg:px-5 font-medium text-sm lg:text-xl hover:bg-slate-300 rounded-lg"><img class="border-0" src="images/Frame (4).svg" /></button>

                <div class="flex flex-row lg:flex-row gap-2">
                    <button class="btn bg-slate-200 border-gray-300 px-2 lg:px-5 font-medium text-sm lg:text-xl hover:bg-slate-300 rounded-lg">Adopt</button>
                    <button class="btn bg-slate-200 border-gray-300 px-2 lg:px-5 font-medium text-sm lg:text-xl hover:bg-slate-300 rounded-lg">Details</button>
                </div>
            </div>
          </div>
        </div>
        `
        div.append(newDiv);
    }
}

loadCategories();
loadCategoriesItem();