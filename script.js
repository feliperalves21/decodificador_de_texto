function regras_especiais(texto){
    texto = texto.toLowerCase();
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9,.\s]/g, '');
    return texto;
}

function criptografar() {
    //Pegando o que foi digitado no textarea.
    let campo_criptografar = document.getElementById('criptografar');
    let texto_descriptografado = campo_criptografar.value;
    //Adaptando o que usuário digitou para remover acentos, caracteres especiais e deixar tudo em minúsculo.
    texto_descriptografado = regras_especiais(texto_descriptografado);
    //Fazendo a criptografia de acordo com as chaves
    let texto_criptografado = texto_descriptografado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    //Preenchendo o campo de resultado após fazer a criptografia do texto
    document.getElementById("descriptografar").value = texto_criptografado;
}

function descriptografar() {
    let campo_criptografar = document.getElementById('criptografar');
    let texto_criptografado = campo_criptografar.value;
    texto_criptografado = regras_especiais(texto_criptografado);
    //Fazendo a descriptografia. O processo é simples, apenas o inverso da criptografia.
    let texto_descriptografado = texto_criptografado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("descriptografar").value = texto_descriptografado;
}

function copiar(){
    texto_copiado = document.getElementById("descriptografar").value;
    navigator.clipboard.writeText(texto_copiado);
    alert("Texto copiado!");
}