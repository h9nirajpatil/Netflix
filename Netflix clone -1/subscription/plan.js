let selectedPrice = 0;

function selectPrice(price, element) {
    // Remove the 'selected' class and hide the check mark from all containers
    document.querySelectorAll('.plan').forEach(plan => {
        plan.classList.remove('selected');
        plan.querySelector('#mark').style.display = 'none';
        plan.style.boxShadow = 'none';
    });

    // Add the 'selected' class and show the check mark for the clicked container
    element.classList.add('selected');
    element.querySelector('#mark').style.display = 'block'; // Or 'block' if you prefer
    // element.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';

    // Set the selected price
    selectedPrice = price;

    // Save the selected price to local storage
    localStorage.setItem('selectedPrice', selectedPrice);

}

function proceedToPayment() {
    // Retrieve the selected price from local storage (just in case)
    const remainingPrice = localStorage.getItem('selectedPrice');

    if (remainingPrice) {
        window.location.href = 'payment.html';
    }
    else {
        alert('Select the plan');
        window.location.href = 'plan.html';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const innerDivs = document.querySelectorAll(".inner-div");
    const descriptions = document.querySelectorAll(".description");

    // Make the first inner-div and its corresponding description active by default
    if (innerDivs.length > 0 && descriptions.length > 0) {
        innerDivs[0].classList.add("active");
        descriptions[0].classList.add("active");
    }

    innerDivs.forEach((div) => {
        div.addEventListener("click", function () {
            // Hide all descriptions first
            const descriptions = document.querySelectorAll(".description");
            descriptions.forEach((desc) => {
                desc.classList.remove("active");
            });

            // Find the corresponding description and show it
            const plan = div.closest(".plan");
            const description = plan.querySelector(".description");
            description.classList.add("active");
        });
    });
});



document.getElementById('email').innerHTML = localStorage.getItem('email1');


