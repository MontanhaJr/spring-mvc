var usuario = {};
usuario.endereco = {};
var id = window.location.href.split('/')[5];

if(typeof id != 'undefined') {
	$.ajax({
		url: "/index/editarUsuario/" + id,
		type: 'PUT'
	}).done(function(e){
		console.log(e);
		
		usuario.id = e.id;
		usuario.endereco.id = e.endereco.id;
		$("#nome").val(e.nome);
		$("#email").val(e.email);
		$("#senha").val(e.senha);
		
		$("#cep").val(e.endereco.cep);
		$("#rua").val(e.endereco.rua);
		$("#numero").val(e.endereco.numero);
		$("#bairro").val(e.endereco.bairro);
		$("#cidade").val(e.endereco.cidade);
	})
}

function cadastrar() {
	usuario.nome = $("#nome").val();
	usuario.email = $("#email").val();
	usuario.senha = $("#senha").val();
	
	//endereço
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
		window.location.href="/usuarios";
		console.table(e);
	})
	.fail(function() {
		alert("Falhou!");
	});
}