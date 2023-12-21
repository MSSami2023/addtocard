let http = new XMLHttpRequest();
http.open('get', 'product.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let product = JSON.parse(this.responseText);
        var card = "";
        for (i of product) {
            card += `
            <div class="col-lg-3 py-5 px-5">
                <div class="card">
                    <img src="${i.img}" alt="">
                        <div class="card-body">
                            <h5>${i.name}</h5>
                            <p>${i.description}</p>
                            <button class="btn btn-outline-dark rounded-pill addToCart">addToCart</button>
                        </div>
                </div>
            </div>
            `;
        }
        console.log(card);
        document.getElementById("onlineproducts").innerHTML = card;
    }
}
