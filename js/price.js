const input = document.getElementById("price-holder");
const button = document.getElementById("price-calculator");
const display = document.getElementById("display");
const serviceSelector = document.getElementById("service-selector");

function getPrice() {
    const base_price = 20;
    const num_rooms = input.value;
    const service = serviceSelector.value;
    let pricePerRoom;

    if (service === 'animal-hair') {
        pricePerRoom = 19;
    } else if (service === 'carpet-cleaning') {
        pricePerRoom = 15;
    } else if (service === 'carpet-stain') {
        pricePerRoom = 18;
    } else if (service === 'steam-extraction') {
        pricePerRoom = 15;
    } else if (service === 'carpet-treatments') {
        pricePerRoom = 30;
    } else if (service === 'flood-damage') {
        pricePerRoom = 70;
    } else if (service === 'exclusive') {
        display.innerText = 'The Total Cost for the Exclusive Service Package varies. Please contact us for a Quote!';
        return;
    } else {
        pricePerRoom = 0;
    }

    var total = base_price + pricePerRoom * num_rooms;
    total = total.toString();
    
    display.innerText = "Estimated Cost: $" + total + " AUD";
    return total;
}

button.addEventListener("click", getPrice);
