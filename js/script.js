$(document).ready(function(){
    // Adiciona scroll suave em todos os links
    $("a").on('click', function(event) {
  
      // Verificando se this.hash tem um valor antes de sobrepor o comportamento padrão
      if (this.hash !== "") {
        // Prevenindo comportamento padrão ao clicar na âncora (link)
        event.preventDefault();
  
        // Guardar o link que está sendo direcionado (hash)
        var hash = this.hash;
  
        // Usando o método animate() do jQuery para adicionar um scroll na página
        // Número opcional (800) que especifica o número de milisegundos que ele leva para scrolar até a posição do link
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Adiciona um hash (#) para URL quando terminar de scrolar (comportamento padrão do click)
          window.location.hash = hash;
        });
      }
    });
  });