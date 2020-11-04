/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1145, function(sym, e) {
         
         
         sym.$(".cajas").droppable({
           accept: sym.$(".fichas"),
           drop: handleDropEvent,
         
         });
         
         
         
         
         function handleDropEvent(event, ui){		
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             // place draggable where needed. could be left, top
            //ui.draggable.position( { of: $(this), my: 'left', at: 'top' } );
             //ui.draggable.position( { of: $(this), my: 'center'+'top', at: 'center'+'top' } );
             ui.draggable.position( { of: $(this), my: 'center'+'top',  at: 'center'+'left'} );
             ui.draggable.draggable( 'option', 'revert', false );
         
             var elem_dropable =$(this).attr("id");
             Contador++;
           switch(elem_dropable ) {
             case 'Stage_caja1':
                 var elem= $(ui.draggable).attr("id");
                  Arrastradas[Contador]=elem.substring(6, 23);
         		  Siguiente="preg2";	  
                 if (elem=='Stage_resp_reparar'){
         				// Mostrar un elemento 
         				sym.$("bien_1").show();	
         				sym.$('bien_1').attr('src','images/bien_1.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$('bien_1').attr('src','images/mal_1.svg');
         				sym.$("bien_1").show();
         				sym.$("fail")[0].play();								 
         		  }
         		sym.$('flecha_adelante').show();
             break;
             case 'Stage_caja2':
                 var elem= $(ui.draggable).attr("id");
         		  Siguiente="preg3";	  
         		   Arrastradas[Contador]=elem.substring(6, 23);
                 if (elem=='Stage_resp_crimenes'){
         				// Mostrar un elemento 
         				sym.$("bien_2").show();	
         				sym.$('bien_2').attr('src','images/bien_2.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$('bien_2').attr('src','images/mal_2.svg');
         				sym.$("bien_2").show();
         				sym.$("fail")[0].play();								 
         		  }
         		sym.$('flecha_adelante').show();
         		//sym.$('flecha_atras').show();
             break;
             case 'Stage_caja3':
                 var elem= $(ui.draggable).attr("id");
         		  Siguiente="preg4";	  
         		   Arrastradas[Contador]=elem.substring(6, 23);
                 if (elem=='Stage_resp_derecho'){
         				// Mostrar un elemento 
         				sym.$("bien_3").show();	
         				sym.$('bien_3').attr('src','images/bien_3.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$('bien_3').attr('src','images/mal_3.svg');
         				sym.$("bien_3").show();
         				sym.$("fail")[0].play();								 
         		  }
         		sym.$('flecha_adelante').show();
         		//sym.$('flecha_atras').show();
             break;
             case 'Stage_caja4':
                 var elem= $(ui.draggable).attr("id");
         		  Siguiente="preg5";	  
         		   Arrastradas[Contador]=elem.substring(6, 23);
                 if (elem=='Stage_resp_proyec'){
         				// Mostrar un elemento 
         				sym.$("bien_4").show();	
         				sym.$('bien_4').attr('src','images/bien_4.svg');	
         
         				Correctas++;
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$('bien_4').attr('src','images/mal_4.svg');
         				sym.$("bien_4").show();
         				sym.$("fail")[0].play();								 
         		  }
         		sym.$('flecha_adelante').show();
         		//sym.$('flecha_atras').show();
             break;
             case 'Stage_caja5':
                 var elem= $(ui.draggable).attr("id");
         		  Siguiente="fin";	  
         		   Arrastradas[Contador]=elem.substring(6, 23);
                 if (elem=='Stage_resp_reparacion'){
         				// Mostrar un elemento 
         				sym.$("bien_5").show();	
         				sym.$('bien_5').attr('src','images/bien_5.svg');	
         
         				Correctas++;alert(Correctas);
         				// Reproducir una pista de audio 
         				sym.$("success")[0].play();
         
         		  }else{
         				sym.$('bien_5').attr('src','images/mal_5.svg');
         				sym.$("bien_5").show();
         				sym.$("fail")[0].play();								 
         		  }
         		sym.$('flecha_adelante').show();
         		//sym.$('flecha_atras').show();
             break;
         
         
         }
         
         // Mostrar un elemento 
         //sym.$("boton_siguiente").show();
         //sym.play(Siguiente);
         if (Contador==5){
         	sym.play('fin');
         }
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         Correctas=0;
         
         
         Contador=0;
         Arrastradas=[];
         sym.$(".fichas").draggable({revert:'invalid'});
         
         
         listaResp1 =(["resp_reparar",
         	 "resp_reparacion",
             "resp_proyec",
             "resp_derecho",
             "resp_crimenes"
             ]);
         
         
         listaResp1=  listaResp1.sort(function() {return Math.random() - 0.5});
         
         	sym.$(listaResp1[0]).css({"left":"797px","top":"214px"});
         	sym.$(listaResp1[1]).css({"left":"797px","top":"273px"});
         	sym.$(listaResp1[2]).css({"left":"797px","top":"331px"});
         	sym.$(listaResp1[3]).css({"left":"797px","top":"389px"});
         	sym.$(listaResp1[4]).css({"left":"797px","top":"447px"});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_adelante}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play(Siguiente);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2625, function(sym, e) {
         // introducir código aquí
         for (var i=1; i<6; i++) {
         
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4165, function(sym, e) {
         // introducir código aquí
         for (var i=1; i<6; i++) {
         
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5540, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5705, function(sym, e) {
         // introducir código aquí
         for (var i=1; i<6; i++) {
         
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7080, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7245, function(sym, e) {
         // introducir código aquí
         for (var i=1; i<6; i++) {
         
         sym.$(Arrastradas[i]).hide();
         //alert(seleccionadas[i]);
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8620, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_intrucciones}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("instrucciones").show();
         
         sym.getSymbol("instrucciones").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9897, function(sym, e) {
         // introducir código aquí
         if(Correctas==5){
         	// Mostrar un elemento 
         	sym.$("bien").show();	
         	sym.getSymbol("bien").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("aplauso_largo")[0].play();
         
         
         }else{
         	sym.$("mal").show();	
         	sym.getSymbol("mal").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("abucheo")[0].play();
         
         }
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instrucciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btnCerrar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("instrucciones");
   //Edge symbol end:'instrucciones'

   //=========================================================
   
   //Edge symbol: 'bien'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic 
         window.close();

      });
      //Edge binding end

   })("bien");
   //Edge symbol end:'bien'

   //=========================================================
   
   //Edge symbol: 'mal'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${bntReiniciar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         location.reload();
         //sym.getComposition().getStage().play(0);
         

      });
      //Edge binding end

   })("mal");
   //Edge symbol end:'mal'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-183020190");