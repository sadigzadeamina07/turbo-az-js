let  marka=document.getElementById('marka')
data.map(item=>
{
    marka.innerHTML+=`<option>${item.brand}</option>`
}
)