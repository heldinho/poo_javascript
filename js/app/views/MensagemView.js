class MensagemView {

	constructor(elemento) {
		this._elemento = elemento;
	}

	_template(model) {
		return model.texto ? `
					<div class="alert alert-dismissable alert-success" onclick="$('#mensagemView').removeChild($('.alert'))">
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true" onclick="$('#mensagemView').removeChild($('.alert'))">×</button>
					<h4>Alerta!</h4>${model.texto}.</div>` : '<div></div>';
	}

	update(model) {
		return this._elemento.innerHTML = this._template(model);
	}

}