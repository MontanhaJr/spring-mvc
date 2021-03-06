var linhaHtml;

$.ajax({
	url: "/usuarios/todos",
	type: 'PUT'
}).done(function(e) {
	
	linhaHtml = '';
	if (e.length != 0) {
		for(usuario of e) {
			linhaHtml += '<tr>'
							+'<td>' + usuario.id +'</td>'
							+'<td>' + usuario.email +'</td>'
							+'<td>' + usuario.senha +'</td>'
							+'<td>' + usuario.endereco.cep +'</td>'
							+'<td>' + usuario.endereco.rua + ',' + usuario.endereco.numero + ' - ' + usuario.endereco.bairro +'</td>'
							+'<td><button class="btn btn-warning" onclick="editar()" value="'+ usuario.id + '">✏</button></td>'
							+'<td><button class="btn btn-danger" onclick="excluir()" value="'+ usuario.id + '">❌</button></td>'
						+ '</tr>';
		}		
		$("#todosUsuarios").html(linhaHtml);		
	}
}).fail(function() {
	alert("Não funcionou!")
});

function editar(){
	var botao = $(event.currentTarget);
	var idBotao = botao.attr('value');
	
	window.location.href="/index/editar/" + idBotao;
}
function excluir(){
	
	var botao = $(event.currentTarget);
	var idBotao = botao.attr('value');
	
	$.ajax({
		url: "/usuarios/excluir/" + idBotao,
		type: 'DELETE'
	}).done(function(e){
		window.location.href="/usuarios";
	})
}