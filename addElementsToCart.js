const tbody = document.querySelector("tbody");
const cost = document.querySelector(".cost");
let totalCost = 0;
window.addEventListener("DOMContentLoaded",()=>{
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((el,index)=>{
        const tr = document.createElement("tr");
        const deleteBtn = document.createElement("button");
        const numberOfPriceBtn = document.createElement("input");
        numberOfPriceBtn.setAttribute("type","number");
        numberOfPriceBtn.setAttribute("class","numberOfProducts");
        numberOfPriceBtn.setAttribute("value","1");
        numberOfPriceBtn.setAttribute("min","1");
        deleteBtn.innerHTML = `<img src="./trash-solid-full.svg" alt="trash" width="18">`;
        deleteBtn.classList.add("deleteBtn");

        const cell = ` <td>1.</td>
                        <td class="product-cell">
                            <img src="${el.img}" alt="Produkt" width="60">
                            ${el.name}
                        </td>
                        <td>Dostępny</td>
                        <td>${el.price}</td>
                        <td class="countCell"></td>
                        <td class="totalPrice">${el.price}</td>
                        <td class="deleteCell">
                        </td>`
        tr.innerHTML += cell;

        deleteBtn.addEventListener("click",(e)=>{
            tr.remove();
            cart = cart.filter((_,i) => i!==index);
            localStorage.setItem("cart",JSON.stringify(cart));
            totalCost -= parseFloat(el.price);
        })

        numberOfPriceBtn.addEventListener("input",(e)=>{
            const totalPrice = ((parseInt(e.target.value) || 1) * parseFloat(el.price)).toFixed(2);
            totalCost += parseFloat(el.price);
            cost.textContent = totalCost; 
            tr.querySelector(".totalPrice").textContent = totalPrice + "zł";
        })

        const deleteCell = tr.querySelector(".deleteCell");
        const countCell = tr.querySelector(".countCell");
        countCell.appendChild(numberOfPriceBtn);
        deleteCell.appendChild(deleteBtn);
        tbody.appendChild(tr);
        
        totalCost += parseFloat(el.price);
    })
    cost.textContent = totalCost;
})
