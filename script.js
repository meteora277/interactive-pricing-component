const range = document.getElementById("range-slider")
const pageViews = document.getElementById("pageviews")
const cost = document.getElementById("cost-month")


function priceChange() {

    if (range.value < 5) {

        pageViews.innerText = "10K Pageviews";
        cost.innerText = "$8.00";

    } else if (range.value >= 5 && range.value < 10) {

        pageViews.innerText = "50K Pageviews";
        cost.innerText = "$12.00";

    } else if (range.value >= 10 && range.value < 15) {

        pageViews.innerText = "100K Pageviews";
        cost.innerText = "16.00";

    } else if (range.value >= 15 && range.value < 20) {

        pageViews.innerText = "500K Pageviews";
        cost.innerText = "$24.00";

    } else if (range.value = 20) {

        pageViews.innerText = "1M Pageviews";
        cost.innerText = "$36.00";

    }


}