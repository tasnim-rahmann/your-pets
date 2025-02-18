// load category buttons
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.error('Error is->', error))
}

// display category buttons
const displayCategories = (items) => {
    const div = document.getElementById('category-button');
    items.forEach(item => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <button id="btn-${item.id}" onclick="loadCategoriesItemByCategory('${item.category.toLowerCase()}')" class="btn bg-slate-200 border-gray-300 px-8 font-semibold text-lg lg:text-2xl hover:bg-slate-300 rounded-sm"><img class="w-4 lg:w-6 gap-3" src="${item.category_icon}"/>${item.category}</button>
        `
        div.append(newDiv);
    });
}

// load category items
const loadCategoriesItem = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(response => response.json())
        .then(data => displayCategoriesItem(data.pets))
        .catch(error => console.error('Error is->', error));
}

// load category by differant category
const loadCategoriesItemByCategory = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(response => response.json())
        .then(data => displayCategoriesItem(data.data))
        .catch(error => console.error('Error is->', error));
}

// display category items
const displayCategoriesItem = (items) => {
    const div = document.getElementById('cart-container');
    div.innerHTML = ``;
    if (items.length == 0) {
        div.classList.remove("grid");
        div.innerHTML = `
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
          <img src="images/error.webp" /> 
          <h2 class="text-center text-xl font-bold"> No Content Here in this Categery </h2> 
        </div>`;
    } else {
        div.classList.add("grid");
    }
    items.forEach(item => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="border-2 p-4 rounded-md">
          <figure>
            <img
              src="${item.image}"
              class = "rounded-lg w-full object-cover"
              alt="Image here" />
          </figure>
          <div class="space-y-1">
            <h2 class="text-xl font-bold">${item.pet_name}</h2>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame.svg"/><p>Breed: ${item.breed}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (1).svg"/><p>Birth: ${item.date_of_birth}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (2).svg"/><p>Gender: ${item.gender}</p></div>
            <div class="flex flex-row items-center space-x-1"><img class="w-4 h-4" src="images/Frame (3).svg"/><p>Price: ${item.price}</p></div>
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
    });
}


loadCategories();
loadCategoriesItem();