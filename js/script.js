$( ".remover1" ).click(function() {
	var a = confirm("Do you really want to remove this product?");
	if (a) {
		$( "ul" ).remove( ".product1" );
	}
});
$( ".remover2" ).click(function() {
	var a = confirm("Do you really want to remove this product?");
	if (a) {
		$( "ul" ).remove( ".product2" );
	}
});
$( ".remover3" ).click(function() {
	var a = confirm("Do you really want to remove this product?");
	if (a) {
		$( "ul" ).remove( ".product3" );
	}
});