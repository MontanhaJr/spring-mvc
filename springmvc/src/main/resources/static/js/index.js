function cadastrar() {
	var usuario = {};
	usuario.nome = $("#nome").val();
	usuario.email = $("#email").val();
	usuario.senha = $("#senha").val();
	
	//endereço
	usuario.endereco = {};
	usuario.endereco.cep = $("#cep").val();
	usuario.endereco.rua = $("#rua").val();
	usuario.endereco.numero = $("#numero").val();
	usuario.endereco.bairro = $("#bairro").val();
	usuario.endereco.cidade = $("#cidade").val();
	
	$.ajax({
		url:"/index/cadastrar",
		type: 'PUT',
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(usuario)
	})
	.done(function(e) {
		alert("Funcionou!");
		console.table(e);
	})
	.fail(function() {
		alert("Falhou!");
	});
}