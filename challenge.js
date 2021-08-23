/*• Write a program to calculate the total price of your phone purchase.
You will keep purchasing phones (hint: loop!) until you
run out of money in your bank account. You’ll also buy accessories
for each phone as long as your purchase amount is below
your mental spending threshold.
• After you’ve calculated your purchase amount, add in the tax,
then print out the calculated purchase amount, properly formatted.
• Finally, check the amount against your bank account balance to
see if you can afford it or not.
• You should set up some constants for the “tax rate,” “phone
price,” “accessory price,” and “spending threshold,” as well as a
variable for your “bank account balance.”
• You should define functions for calculating the tax and for formatting
the price with a “$” and rounding to two decimal
places.
• Bonus Challenge: Try to incorporate input into this program,
perhaps with the prompt(..) covered in “Input” on page 6. You
may prompt the user for their bank*/

const umbralGasto = 1000;
const impuesto = 0.18;
const precioTelefono = 200.99;
const precioAccesorio = 50.09;

var saldo = 1200;
var monto = 0;

function calcularImpuesto(monto) {
	return monto * impuesto;
}
function formatAmount(monto) {
	return "$" + monto.toFixed( 2 );
}
while (monto < saldo) {
	monto = monto + precioTelefono;
	if (monto < umbralGasto) {
		monto = monto + precioAccesorio;
	}
}
monto = monto + calcularImpuesto( monto );
console.log("La compra es: " + formatAmount( monto ));
if (monto > saldo) {
console.log("No se puede pagar porque el monto sobrepasa tu umbral de Gasto ");
}