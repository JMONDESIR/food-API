console.log("connected")

fetch("http://localhost:8088/food")
        .then(foods => foods.json())
        .then(parsedFoods => {
                console.log(parsedFoods)
                const foodList = document.querySelector(".foodList")
                parsedFoods.forEach((foodItem) => {
                        console.table(foodItem)

                        foodList.innerHTML += foodItem.name
                })
        })
