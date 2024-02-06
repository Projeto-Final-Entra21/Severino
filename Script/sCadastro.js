function formatarCPF(campo) {
    campo.value = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    campo.value = campo.value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após o terceiro dígito
    campo.value = campo.value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona outro ponto após o sexto dígito
    campo.value = campo.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona hífen após o nono dígito (se houver)
}

function formatarTel(campo) {
    campo.value = campo.value.replace(/\D/g, '');
    campo.value = campo.value.replace(/(\d{2})(\d{5})/, "($1)$2-");

}

function formatarCEP(campo) {
    campo.value = campo.value.replace(/\D/g, '');
    campo.value = campo.value.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2-$3");

}

function soNumerico(num) {
    num.value = num.value.replace(/\D/g, '');
}
