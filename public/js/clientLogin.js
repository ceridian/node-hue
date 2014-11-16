$('#login').click(function(){
	var payload = {};
	payload.user = $('#user').val();
	payload.pass = $('#pass').val();
	// need to hash password befor sending
	$.ajax({
		url: '/login',
		type: 'POST',
		contentType: "application/json",
		data: JSON.stringify(payload),
		processData: false,
		complete: function(data){
			var res = data.responseText;
			var parsed = JSON.parse(res);
			console.log(parsed);
			if(parsed.status == 'ok'){
				window.location.replace('/');
			}else{
				$('#errorBody').html('<h4>'+parsed.error+'</h4>');
				$('#errorPopup').modal('show');
			}
		}
	});
});
$('#pass').keydown(function(event){    
    if(event.keyCode==13){
       $('#login').trigger('click');
    }
});