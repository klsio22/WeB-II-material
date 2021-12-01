$(function(){
  $(".cep").hide()
  $(".barra-progresso").hide()
})

let button = document.getElementById("button")
$(button).on('click', consultCep)

function consultCep() {
  $(".barra-progresso").show()

  let cep = document.getElementById('cep').value;
  let url = `https://viacep.com.br/ws/${cep}/json/`

  //requisição ajax
  $.ajax({
    url: url,
    type: "GET",
    success: (response) => {
      console.log(response)
      //document.getElementById('logradouro').innerHTML = response.logradouro; 
      $("#titulo-cep").html('CEP: ' + response.cep)
      $("#logradouro").html(response.logradouro)
      $("#bairro").html(response.bairro);
      $("#localidade").html(response.ddd)
      $('#uf').html(response.uf)
      $('.cep').show();
      $(".barra-progresso").hide()

    }

  })

};

