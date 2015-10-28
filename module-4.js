var myModuel=(function(JQ){
	function privateMethod(){
		JQ(".container").html("test");
	}
	return {
		publicMethod:function(){
			privateMethod();
		}
	}
})(jQuery);