//A função abaixo verifica se o texto está de acordo com o padrão: letras minúsculas, sem acentos e sem caracteres especiais
function isValidText(texto){
    let regras_especiais = /^[a-z\s]+$/g;
    return regras_especiais.test(texto);
}

function criptografia(metodo) {
    //Pegando o que foi digitado no textarea.
    let campo_criptografar = document.getElementById('textarea1').value;
    //Se o texto do usuário estiver de acordo, procede com a criptografia
    if ((isValidText(campo_criptografar))) {
        let texto_final;
        if(metodo === "criptografar"){
            texto_final = campo_criptografar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        } else if(metodo === "descriptografar"){
            texto_final = campo_criptografar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        }
        // Limpar o textarea 1
        document.getElementById("textarea1").value = '';
        //A imagem de fundo desaparece se a criptografia for realizada
        document.getElementById('textarea2').style.backgroundImage = 'none';
        //Preenchendo o campo de resultado após fazer a criptografia do texto
        document.getElementById("textarea2").value = texto_final;
    }
    else if ((campo_criptografar === '')){
        alerta("error", "Erro!", "Preencha o campo antes de clicar no botão!")
    }else{
        alerta("error", "Erro!", "Apenas letras minúsculas e sem acento.")
    } 
}

/* As duas funções abaixo chamam a função criptografar e o método necessário para cada botão,
seja descriptografar ou criptografar*/

function criptografar() {
    criptografia('criptografar');
}

function descriptografar(){
    criptografia('descriptografar');
}

// Utilização da Clipboard API para copiar o texto para a área de transferência do usuário

function copiar(){
    let texto_copiado = document.getElementById("textarea2").value;
    if (texto_copiado === ""){
        alerta('error', '', 'Nenhuma mensagem encontrada para copiar!')    
    }else{
        navigator.clipboard.writeText(texto_copiado);
        alerta('success', 'Sucesso', 'Texto copiado com sucesso!')
    }
}

function alerta(icon, title, texto) {
    Swal.fire({
        icon: icon,
        title: title,
        text: texto,
    });
}