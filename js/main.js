$(document).ready(function(){
    $('#carrosel-imagens').slick({
        autoplay:true,
    })
    //Função que substitui a lógica do if-else para o '.menu-hamburguer'.
    //Se estiver aberto, então fechará, mas se estiver fechado, então abra.
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
    //Função que aplica uma máscara de telefone intuitiva para o usuário.
    $('#telefone').mask('(00) 00000-0000');
    //Função que aplica a validação ao formulário.
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            mensagem:{
                required:true
            },
            veiculo_interesse:{
                required:false
            }
        },
        messages:{
            nome:'Por favor, insira seu nome'
        },
        //Função que verifica se o formulário é válido.
        submitHandler:function(form){
            console.log(form);
        },
        //Função que verifica se o formulário não é válido.
        invalidHandler:function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        //Lógica para procurar um elemento parente e retornando o por meio da função 'text()'.
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo_interesse').val(nomeVeiculo);
        //Função para animar o 'html' com a scrooltop redirecionando até ao destino.
        $('html').animate({
            scrollTop:destino.offset().top
        },1000)
    })
})