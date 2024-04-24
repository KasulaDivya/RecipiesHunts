document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const mealCart = document.getElementById("mealCart");
    const mealrecipie =document.getElementById("recipies");
    


    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim();
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let html = "";
                if (data.meals) {
                    data.meals.forEach(meal => {
                        window.localStorage.setItem("key",JSON.stringify(meal))
                        html += `
                            <div class="meal-item">
                                <div>
                                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200px" height="150px">
                                </div>
                                <div>
                                    <h3>${meal.strMeal}</h3>
                                    <a href="#ff" class="get-recipe" data-meal-id="${meal.idMeal}">Get Recipe</a>
                                </div>
                            </div>
                        `;
                    });
                } else {
                    html = `<center><h1>You can Search by main Ingredient!</h1> <h3>Like below</h3></center>
                    <br>
                    <center>
                    <ul>
                    <li>egg</li>
                    <li>chicken</li>
                    <li>beef</li>
                    <li>rice</li>
                    <li>prawns</li>
                    <li>ice cream</li>
                    <li>potato</li>
                    <li>ginger</li>
                    <li>bread</li>
                    <li>milk</li>
                    <li>tomato</li>
                    <li>pepper</li>
                    <li>chilli</li>
                    <li>onions</li>
                    </u>
                    </center>`;
                }
                mealCart.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

            mealrecipie.innerHTML=""

    });

    
    searchInput.addEventListener("keypress", (event) => {
        if(event.key=='Enter'){
        const searchTerm = searchInput.value.trim();
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let html = "";
                if (data.meals) {
                    data.meals.forEach(meal => {
                        html += `
                            <div class="meal-item">
                                <div >
                                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"  width="200px" height="150px">
                                </div>
                                <div>
                                    <h3>${meal.strMeal}</h3>
                                    <a href="#ff" class="get-recipe" data-meal-id="${meal.idMeal}">Get Recipe</a>
                                </div>
                            </div>
                        `;
                    });
                } else {
                    html = `<center><h1>You can Search by main Ingredient!</h1> <h3>Like below</h3></center>
                    <br>
                    <center>
                    <ul>
                    <li>egg</li>
                    <li>chicken</li>
                    <li>beef</li>
                    <li>rice</li>
                    <li>prawns</li>
                    <li>ice cream</li>
                    <li>potato</li>
                    <li>ginger</li>
                    <li>bread</li>
                    <li>milk</li>
                    <li>tomato</li>
                    <li>pepper</li>
                    <li>chilli</li>
                    <li>onions</li>
                    </u>
                    </center>`;
                }
                mealCart.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
  } 

       
  mealrecipie.innerHTML=""
});

    // Event delegation for dynamically added elements
    mealCart.addEventListener('click', (event) => {
        if (event.target.classList.contains('get-recipe')) {
            event.preventDefault();
            const mealId = event.target.dataset.mealId;
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
                .then(response => response.json())
                .then(data => {

                    console.log(data.meals)
                    window.localStorage.setItem("keyss",JSON.stringify(data.meals))
                    window.location.assign("index5.html")
                })
                .catch(error => {
                    console.error('Error fetching recipe:', error);
                    alert('Error fetching recipe!');
                });
        }   
    });
}); 


