/* 
Regras:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
*/

function isValidText(texto){
    let regras_especiais = /^[a-z,.\s]+$/g;
    return regras_especiais.test(texto);
}

function criptografar() {    
    //Pegando o que foi digitado no textarea.
    let campo_criptografar = document.getElementById('area_de_texto').value;
    //Verificando se o que usuário digitou está correto de acordo com as regras
    if (isValidText(campo_criptografar)) {
        //Fazendo a criptografia de acordo com as chaves
        let texto_criptografado = campo_criptografar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        //Preenchendo o campo de resultado após fazer a criptografia do texto
        document.getElementById("resultado").value = texto_criptografado;
    }
    else{
        alert("Apenas letras minúsculas e sem acento.")
    } 
}

function descriptografar() {
    let campo_criptografar = document.getElementById('area_de_texto').value;
    if (isValidText(campo_criptografar)) {
        //Fazendo a descriptografia. O processo é simples, apenas o inverso da criptografia.
        let texto_descriptografado = campo_criptografar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("resultado").value = texto_descriptografado;
    }
    else{
        alert("Apenas letras minúsculas e sem acento.");
    } 
}

function copiar(){
    texto_copiado = document.getElementById("descriptografar").value;
    navigator.clipboard.writeText(texto_copiado);
    alert("Texto copiado!");
}

