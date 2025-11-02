let marka = document.getElementById('marka');
let carts = document.getElementById('carts');
/*data.map(item=>
{
    marka.innerHTML+=`<option value="${item.brand}">${item.brand}</option>`
}
) */

[...new Set(data.map(i => i.brand))].forEach(a => {
    marka.innerHTML += `<option value="${a}">${a}</option>`;
});

function showcars(oturulendeyer) {
    carts.innerHTML = ''
    oturulendeyer.map(item => {
        carts.innerHTML += `
    <div class="cart">
    <img src="${item.images}" alt="">
    <div>
    <h3>${item.price} AZN</h3>
    <h4>${item.brand} ${item.model}</h4>
    <h4>${item.year} ${item.engine}${item.odometer}</h4>
    <p>${item.dates}</p>
    </div>
    </div>
    `
    }
    )
}

showcars(data)
function filtermarka() {
    let yenifiltr = marka.value
    let filterlenmis = yenifiltr ? data.filter(f => f.brand === yenifiltr) : data;
    console.log(filterlenmis)
    showcars(filterlenmis)
}
