const filterToggle = document.getElementById('filterToggle');
const filterBody = document.getElementById('filterBody');
const addToCart = document.querySelectorAll(".addToCart");

filterToggle.addEventListener('click', () => {
	const isOpen = filterBody.classList.toggle('open')
	filterToggle.setAttribute('isOpen', isOpen)
	filterToggle.textContent = isOpen ? 'Zamknij filtry' : 'Filtry'
	console.log("cos");
})

addToCart.forEach(el=>{
	el.addEventListener("click",(e)=>{
		const mainElement = e.target.closest(".item-textBox");
		const item_name = mainElement.querySelector(".item-name").textContent.trim();
		const price = mainElement.querySelector(".price").textContent.trim();
		const img = mainElement.previousElementSibling.querySelector("img").src;
		console.log(img);
		const cart = JSON.parse(localStorage.getItem("cart")) || [];
		console.log(cart)
		const newProduct = {name:item_name,price:price,img:img};
		cart.push(newProduct)
		localStorage.setItem("cart",JSON.stringify(cart));

	})
})
