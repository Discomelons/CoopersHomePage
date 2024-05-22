

    // Get the elements by their IDs
    const input = document.getElementById("price-holder");
    const button = document.getElementById("price-calculator");
    const display = document.getElementById("display")

    

    function getPrice() {
        const base_price = 20
        num_rooms = input.value



        var total = base_price + base_price + num_rooms*4
        
        console.log(total)

        total = total.toString()
        
        display.innerText = "Estimated Cost: $" + total + " AUD";
        return total


    }

    button.addEventListener("click", getPrice);

