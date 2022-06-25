    
    
    
      function DataHoraAtual () {
    
        var dataAtual = new Date();
        var dia = dataAtual.getDate();
        var mes = (dataAtual.getMonth() + 1);
        var ano = dataAtual.getFullYear();
        var horas = dataAtual.getHours();
        var minutos = dataAtual.getMinutes();
        console.log("Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.");
        
        //getDate(): que traz o resultado do dia;
        // getMonth(): retorna o mês utilizado;
        // getFullYear(): retorna o ano com quatro dígitos;
        // getHours(): retorna o valor das horas;
        //getMinutes(): traz os minutos informados.
      }
      
      DataHoraAtual();