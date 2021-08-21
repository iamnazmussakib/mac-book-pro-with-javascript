// get subitem price 
function getSubItemPrice(item, price) {
 	const subItem = document.getElementById(item);
	let itemPrice = subItem.innerText;
	subItem.innerText = price;
	totalPrice();
}

// sub item price value 
function getPriceValue(itemId) {
	const subItems = document.getElementById(itemId);
	const item = parseInt(subItems.innerText);
	return item;
}

// Calculate total price
function calculateTotal(){
	const bestPrice = getPriceValue('best-price');
	const ram = getPriceValue('extra-memory');
	const rom = getPriceValue('extra-storage');
	const delivery = getPriceValue('delivery-charge');
	const totalProductPrice = bestPrice + ram + rom + delivery;
	return totalProductPrice;
}

// update price
function totalPrice() {
	const totalProductPrice = calculateTotal();
	document.getElementById('total-price').innerText = totalProductPrice;
	document.getElementById('total-with-discount').innerText = totalProductPrice;
}

 // memory
document.getElementById('ram-8gb').addEventListener('click', function(){
	getSubItemPrice('extra-memory', 0);
})
document.getElementById('ram-16gb').addEventListener('click', function(){
	getSubItemPrice('extra-memory', 180);
})

// storage
document.getElementById('rom-256gb').addEventListener('click', function(){
	getSubItemPrice('extra-storage', 0);
})
document.getElementById('rom-512gb').addEventListener('click', function(){
	getSubItemPrice('extra-storage', 100);
})
document.getElementById('rom-1tb').addEventListener('click', function(){
	getSubItemPrice('extra-storage', 180);
})

// delivery
document.getElementById('delivery-free').addEventListener('click', function(){
	getSubItemPrice('delivery-charge', 0);
})
document.getElementById('delivery-$20').addEventListener('click', function(){
	getSubItemPrice('delivery-charge', 20);
})

// Promo Code Apply
document.getElementById('promo-btn').addEventListener('click', function(){
	const promoInput = document.getElementById('promo-input');
	const inputVal = promoInput.value;
	const totalProductPrice = calculateTotal();
	const discountPrice = totalProductPrice / 100 * 20;
	if(inputVal == 'stevekaku'){
		document.getElementById('total-with-discount').innerText = totalProductPrice - discountPrice;
	}
	promoInput.value = '';
})