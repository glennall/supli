/* use one method to perform a action */
$( ".remover" ).click(function() {
	deleteProduct(confirm("Do you really want to remove this product?"),$(this));
});

function deleteProduct(toDelete,remover)
{
	if (toDelete) {
		var idElementToRemove = remover.attr("id");
		$( "#" + idElementToRemove.replace("romove-",'') ).fadeOut();
		/*
		$( "#" + idElementToRemove.replace("romove-",'') ).remove();
		
		i used fadeOut() because remove() delete the element without transition
		*/
	}
}
