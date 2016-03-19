/**
 * 
 */


function getRadioVal(form, name) {

    var val;
    
	if(name=='room'){
		datasIndisponiveis=[];
		datasIndisponiveis1=[];


    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons	
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    
    ///Permite actualizar apenas a parte da pagina que contem o calendario.php
   
    $('#actualizaCalendario').load('calendario.php?quarto=' + val+'&nq=1');
    
	}
	if(name=='room2'){
		datasIndisponiveis=[];
		datasIndisponiveis2=[];

    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons	
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    
    ///Permite actualizar apenas a parte da pagina que contem o calendario.php
  
    $('#actualizaCalendario').load('calendario.php?quarto='+val+'&nq=2');
    }
	
	
	if(name=='room3'){
		datasIndisponiveis=[];
		datasIndisponiveis3=[];

    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons	
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    
    ///Permite actualizar apenas a parte da pagina que contem o calendario.php

   
    $('#actualizaCalendario').load('calendario.php?quarto='+val+'&nq=3');
    }
	

}

		
//Mostra o menu lateral quando baixamos (fazemos scroll) até um certo ponto
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
   
    if(scroll < 190){
    	$("#menu2").fadeOut(1000);
    }
    else{

    	$("#menu2").fadeIn(1000);
    }
    	
});
   

/////////////////////////////////////Falta testar//////////////////////////////////////////////////


//variavel global com indisponiveis datas 

var datasIndisponiveis=[];
var datasIndisponiveis1=[];
var datasIndisponiveis2=[];
var datasIndisponiveis3=[];
//Função que estabelece o intervalo de datas entre duas datas para deixar as mesmas como indisponiveis
function intervaloDeDatas(start,end,nq){
	datasIndisponiveis=[];
	apontador = new Date(start.getTime());
	if(nq=="1"){
	while (apontador <= end) {
	
	    datasIndisponiveis1.push(apontador.getDate() + "-" + (apontador.getMonth() + 1) + "-" +apontador.getFullYear());
	    apontador.setDate(apontador.getDate() + 1);
	}}
	if(nq=="2"){
		while (apontador <= end) {
		
		    datasIndisponiveis2.push(apontador.getDate() + "-" + (apontador.getMonth() + 1) + "-" +apontador.getFullYear());
		    apontador.setDate(apontador.getDate() + 1);
		}}
	if(nq=="3"){
		while (apontador <= end) {
		
		    datasIndisponiveis3.push(apontador.getDate() + "-" + (apontador.getMonth() + 1) + "-" +apontador.getFullYear());
		    apontador.setDate(apontador.getDate() + 1);
		}}
	
}

//////////////////////////////////////Falta testar////////////////////////////////////////////////////

//Função que irá colocar as datas como indisponivies
function indisponiveis(date){
    datasIndisponiveis=[];
   datasIndisponiveis=datasIndisponiveis3.concat(datasIndisponiveis2.concat(datasIndisponiveis1));
 
   
	dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" +date.getFullYear() ;
	if(($.inArray(dmy ,datasIndisponiveis) == -1)){
		return[ true, ""];	
	}
	else{
	return [false, "", "Indisponivel"];
	}
	 
}



$(function() {
	datasIndisponiveis=[];
		$("#theDate1").datepicker({beforeShowDay:indisponiveis, minDate: new Date() });
		$("#theDate2").datepicker({ beforeShowDay:indisponiveis,minDate: new Date() });

		var d1;
		var d2 = $("#theDate2").datepicker('getDate');
		
		$("#theDate1").change(function() {
			document.getElementById('data1').innerHTML = this.value;
		});
		$("#theDate2").change(function() {
			document.getElementById('data2').innerHTML = this.value;
		});
	});

	function escolha2() {
		var x = document.getElementById("nq").selectedIndex;
		var y = document.getElementById("nq").options;
		if (y[x].text != "-- Escolha --")
			document.getElementById("numeroQ").innerHTML = y[x].text;
		else
			document.getElementById("numeroQ").innerHTML = " ";
	}
	function escolha1() {

		var z = document.getElementById("estabelecimento").selectedIndex;
		var w = document.getElementById("estabelecimento").options;
		document.getElementById("est").innerHTML = w[z].text;

		if (w[z].text != "-- Escolha --")
			document.getElementById("est").innerHTML = y[x].text;
		else
			document.getElementById("est").innerHTML = " ";
	}

	function imageClick(url) {
		window.location = url;
	}
	function toggle_visibility(id) {
		var e = document.getElementById(id);
		if (e.style.display == 'block')
			e.style.display = 'none';
		else
			e.style.display = 'block';
	}
	
	
	
	
	function validarFormulario() {
	
	    var Pnome = dados.firstname.value;
	    var Unome = dados.lastname.value;
	    var email=document.dados.email.value;
	    var tel=document.dados.contacto.value;
	    var msg="";
	    var falhou=false;
	    var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;// Verifica se existem estes chars em um e-mail
	    var telRegEx=/^\d{9}$/i;// Verifica se existem estes chars em um telemovel
	    var passportRegEx=/^[A-Z]{1}\d{8}$/i;
	    var datepickerBegin = $("#theDate1").val();
	    var datepickerEnd = $("#theDate2").val();
	    var biRegEx= /\d{9}[a-zA-Z]{2}\d{3}/i;
	    var cdRegEx=/^[a-zA-Z]{2}-\d{6}/i;
        var documento=document.dados.idtipo.value;
        var iddocumento=document.dados.id.value; 
        
    
        if(verificaDatas(new Date(datepickerBegin),new Date(datepickerEnd))){
        	msg+="*Contem datas invalidas(reservadas) neste intervalo de datas\n";
        }
        
        
        if(documento == 'passaporte'){
        	
        	
        	if(iddocumento.search(passportRegEx)==-1){
        		msg+="* Introduza um numero de passaporte válido\n";
        	    falhou=true;
        	}
        }
        
        
if(documento=='B.I.'){
	if(iddocumento.search(biRegEx)==-1){
		msg+="* Introduza um numero de B.I. válido\n";
	   falhou=true;
}
        }


if(documento == 'carta_de_condução'){
	if(iddocumento.search(cdRegEx)==-1){
		msg+="* Introduza uma Carta de Condução válida\n";
		falhou=true;
	}
}
	    if (datepickerBegin > datepickerEnd ) { 
	        msg+="* Verifique as datas de ida e volta \n";
	        falhou=true;
	    }
	    if(datepickerBegin=="" || datepickerEnd=="" ){
	    	msg+="* Escolha as datas de ida e/ou de volta \n";
	    	falhou=true;
	    }
	    
	    if (Pnome == null || Pnome == "") {
	        msg+="* Tem de preencher o seu Primeiro nome \n";
	      falhou=true;
	    }
	    
	    if (Unome == null || Unome == "") {
	    	msg+="* Tem de preencher o seu Ultimo nome \n";
	        falhou=true;
	    }
	    if (email.search(emailRegEx) == -1) {
	    	msg+="* Introduza um e-mail valido \n";
	        falhou=true; 
	     }
	
	    if (tel.search(telRegEx) == -1) {
	    	msg+="* Introduza um telefone valido \n";
	        falhou=true; 
	     }
	 

	   if(falhou){
		   alert(msg);
		   return false;
	   }
	}
	function quartos(){
		var nquartos=document.dados.nq.value;
		var q1=document.getElementById("maisQuarto");
		var q2= document.getElementById("mais1Quarto");
		var q3= document.getElementById("mais2Quarto");
if(nquartos == '2'){
	q1.style.display="inline";
	q2.style.display="block";
	q3.style.display="none";
}

else if(nquartos == '3'){
	q1.style.display="inline";
	q2.style.display="block";
	q3.style.display="block";
}
else if(nquartos =='+3'){
	alert("Para mais de 3 quartos por favor contacte o hotel pelo e-mail:\n XXXXXXX@hkiame.com\n OU \n 923447211");
	q1.style.display="none";
}
else{
	q1.style.display="inline";
	q2.style.display="none";
	q3.style.display="none";
}
	}
	
	
	function verificaDatas(start,end){
		dt1=[];
		apontador = new Date(start.getTime());
		while (apontador <= end) {
		  dt1.push(apontador.getDate() + "-" + (apontador.getMonth() + 1) + "-" +apontador.getFullYear());
		    apontador.setDate(apontador.getDate() + 1);
		}
		    var res=false;
		for(var i=0; i<dt1.length;i++ ){
			for(var k=0;k<datasIndisponiveis.length;k++){
				
				if(dt1[i]==datasIndisponiveis[k])
			{
					res=true;
					break;
			}
				
			}
		}
		return res;
	}