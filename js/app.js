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
 <div class="max-w-sm rounded  border border-solid overflow-visible p-3 shadow-lg mx-auto">
  <div class="px-5 py-4">
    <img src="${item.images}" alt="" style="height:50vh; width:100%;">
    <div class="p-3">
      <h3 class="text-2xl">${item.price} AZN</h3>
      <h4>${item.brand} ${item.model}</h4>
      <h4>${item.year} ${item.engine}${item.odometer}</h4>
      <p>${item.dates}</p>
    </div>
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
