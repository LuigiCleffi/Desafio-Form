$(document).ready(()=>{
    $("#cep").focusout(()=>{
       var cep = $("#cep").val();
       cep = cep.replace("-", "");
        var url = (`https://viacep.com.br/ws/${cep}/json`);
        $.ajax(
            {
                url: url,
                type: "get",
                dataType: "json",
                success: (data)=>{
                    console.log(data);

                    $("#localidade").val(data.localidade);
                    $("#uf").val(data.uf);
                    $("#logradouro").val(data.logradouro);
                    $("#bairro").val(data.bairro);
                    $("#complemento").val(data.complemento);

                },
                error: (erro)=>{
                    console.log(erro);
                }
                
             }
        )
        
    });
});
