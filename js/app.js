let  marka=document.getElementById('marka')
let carts=document.getElementById('carts')
data.map(item=>
{
    marka.innerHTML+=`<option value="${item.brand}">${item.brand}</option>`
}
)