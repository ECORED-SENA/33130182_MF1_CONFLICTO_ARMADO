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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3948, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5043, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_unidades}", "click", function(sym, e) {
         sym.play("menu");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10575, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10575, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12312, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13702, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15109, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle23}", "click", function(sym, e) {
         activadorUnidad2="si"
         
         sym.play("uni1");
         
         sym.$("manito4").css({"left":"690px","top":"384px"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle23Copy}", "click", function(sym, e) {
         if (activadorUnidad2=="si"){
         	activadorUnidad3="si"
         	sym.$("manito4").css({"left":"800px","top":"384px"});	
         	sym.play("uni2");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle23Copy2}", "click", function(sym, e) {
         if (activadorUnidad3=="si"){
         	sym.play("Uni3");
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle24}", "click", function(sym, e) {
         sym.play("menu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25}", "click", function(sym, e) {
         sym.play("origenes");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy}", "click", function(sym, e) {
         sym.getSymbol("sym_uni2_1").$("No_Hubo_Tiempo_Para_la_Tisteza_subtitulado_2")[0].pause();
         sym.play("uni2_1");
         // Pausar una pista de vídeo 
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy2}", "click", function(sym, e) {
         sym.play("Uni2_2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle26}", "click", function(sym, e) {
         sym.play("uni3_1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle26Copy}", "click", function(sym, e) {
         sym.play("rep");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle26Copy2}", "click", function(sym, e) {
         sym.play("dere");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle27}", "click", function(sym, e) {
         sym.play("Uni3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle27Copy}", "click", function(sym, e) {
         sym.play("obli");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle27Copy2}", "click", function(sym, e) {
         sym.play("rep");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle27Copy3}", "click", function(sym, e) {
         sym.play("dere");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         activadorUnidad2="";
         activadorUnidad3="";
         activarBoton="";

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'uni1_text1'
   (function(symbolName) {   
   
   })("uni1_text1");
   //Edge symbol end:'uni1_text1'

   //=========================================================
   
   //Edge symbol: 'uni1_tab_prop'
   (function(symbolName) {   
   
   })("uni1_tab_prop");
   //Edge symbol end:'uni1_tab_prop'

   //=========================================================
   
   //Edge symbol: 'uni1_tab_histo'
   (function(symbolName) {   
   
   })("uni1_tab_histo");
   //Edge symbol end:'uni1_tab_histo'

   //=========================================================
   
   //Edge symbol: 'uni1_tab_aplic'
   (function(symbolName) {   
   
   })("uni1_tab_aplic");
   //Edge symbol end:'uni1_tab_aplic'

   //=========================================================
   
   //Edge symbol: 'uni1_tab_obliga'
   (function(symbolName) {   
   
   })("uni1_tab_obliga");
   //Edge symbol end:'uni1_tab_obliga'

   //=========================================================
   
   //Edge symbol: 'uni1_tab_quien'
   (function(symbolName) {   
   
   })("uni1_tab_quien");
   //Edge symbol end:'uni1_tab_quien'

   //=========================================================
   
   //Edge symbol: 'uni1_tab_princi'
   (function(symbolName) {   
   
   })("uni1_tab_princi");
   //Edge symbol end:'uni1_tab_princi'

   //=========================================================
   
   //Edge symbol: 'uni1_tab_norma'
   (function(symbolName) {   
   
   })("uni1_tab_norma");
   //Edge symbol end:'uni1_tab_norma'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_text1'
   (function(symbolName) {   
   
   })("uni2_orig_text1");
   //Edge symbol end:'uni2_orig_text1'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_rojo'
   (function(symbolName) {   
   
   })("uni2_orig_rojo");
   //Edge symbol end:'uni2_orig_rojo'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_verde'
   (function(symbolName) {   
   
   })("uni2_orig_verde");
   //Edge symbol end:'uni2_orig_verde'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_viole'
   (function(symbolName) {   
   
   })("uni2_orig_viole");
   //Edge symbol end:'uni2_orig_viole'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_rosa'
   (function(symbolName) {   
   
   })("uni2_orig_rosa");
   //Edge symbol end:'uni2_orig_rosa'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_text2'
   (function(symbolName) {   
   
   })("uni2_orig_text2");
   //Edge symbol end:'uni2_orig_text2'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_tex3'
   (function(symbolName) {   
   
   })("uni2_orig_tex3");
   //Edge symbol end:'uni2_orig_tex3'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_preg1'
   (function(symbolName) {   
   
   })("uni2_orig_preg1");
   //Edge symbol end:'uni2_orig_preg1'

   //=========================================================
   
   //Edge symbol: 'uni2_orig_preg2'
   (function(symbolName) {   
   
   })("uni2_orig_preg2");
   //Edge symbol end:'uni2_orig_preg2'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex1'
   (function(symbolName) {   
   
   })("uni2_soluc_tex1");
   //Edge symbol end:'uni2_soluc_tex1'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex1_1'
   (function(symbolName) {   
   
   })("uni2_soluc_tex1_1");
   //Edge symbol end:'uni2_soluc_tex1_1'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex1_2'
   (function(symbolName) {   
   
   })("uni2_soluc_tex1_2");
   //Edge symbol end:'uni2_soluc_tex1_2'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex1_3'
   (function(symbolName) {   
   
   })("uni2_soluc_tex1_3");
   //Edge symbol end:'uni2_soluc_tex1_3'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex2'
   (function(symbolName) {   
   
   })("uni2_soluc_tex2");
   //Edge symbol end:'uni2_soluc_tex2'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex2_1'
   (function(symbolName) {   
   
   })("uni2_soluc_tex2_1");
   //Edge symbol end:'uni2_soluc_tex2_1'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex2_2'
   (function(symbolName) {   
   
   })("uni2_soluc_tex2_2");
   //Edge symbol end:'uni2_soluc_tex2_2'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex2_3'
   (function(symbolName) {   
   
   })("uni2_soluc_tex2_3");
   //Edge symbol end:'uni2_soluc_tex2_3'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex2_4'
   (function(symbolName) {   
   
   })("uni2_soluc_tex2_4");
   //Edge symbol end:'uni2_soluc_tex2_4'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex2_5'
   (function(symbolName) {   
   
   })("uni2_soluc_tex2_5");
   //Edge symbol end:'uni2_soluc_tex2_5'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex2_6'
   (function(symbolName) {   
   
   })("uni2_soluc_tex2_6");
   //Edge symbol end:'uni2_soluc_tex2_6'

   //=========================================================
   
   //Edge symbol: 'uni2_soluc_tex2_7'
   (function(symbolName) {   
   
   })("uni2_soluc_tex2_7");
   //Edge symbol end:'uni2_soluc_tex2_7'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_text1'
   (function(symbolName) {   
   
   })("uni2_derec_text1");
   //Edge symbol end:'uni2_derec_text1'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_inter_prev'
   (function(symbolName) {   
   
   })("uni2_derec_inter_prev");
   //Edge symbol end:'uni2_derec_inter_prev'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_inter_control'
   (function(symbolName) {   
   
   })("uni2_derec_inter_control");
   //Edge symbol end:'uni2_derec_inter_control'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_inter_repre'
   (function(symbolName) {   
   
   })("uni2_derec_inter_repre");
   //Edge symbol end:'uni2_derec_inter_repre'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_hum_prev'
   (function(symbolName) {   
   
   })("uni2_derec_hum_prev");
   //Edge symbol end:'uni2_derec_hum_prev'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_hum_cont1'
   (function(symbolName) {   
   
   })("uni2_derec_hum_cont1");
   //Edge symbol end:'uni2_derec_hum_cont1'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_hum_cont2'
   (function(symbolName) {   
   
   })("uni2_derec_hum_cont2");
   //Edge symbol end:'uni2_derec_hum_cont2'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_hum_repr1'
   (function(symbolName) {   
   
   })("uni2_derec_hum_repr1");
   //Edge symbol end:'uni2_derec_hum_repr1'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_hum_repr2'
   (function(symbolName) {   
   
   })("uni2_derec_hum_repr2");
   //Edge symbol end:'uni2_derec_hum_repr2'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_tex2'
   (function(symbolName) {   
   
   })("uni2_derec_tex2");
   //Edge symbol end:'uni2_derec_tex2'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_tex2_rojo'
   (function(symbolName) {   
   
   })("uni2_derec_tex2_rojo");
   //Edge symbol end:'uni2_derec_tex2_rojo'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_tex2_verde'
   (function(symbolName) {   
   
   })("uni2_derec_tex2_verde");
   //Edge symbol end:'uni2_derec_tex2_verde'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_tex2_viole'
   (function(symbolName) {   
   
   })("uni2_derec_tex2_viole");
   //Edge symbol end:'uni2_derec_tex2_viole'

   //=========================================================
   
   //Edge symbol: 'uni2_derec_tex2_rosa'
   (function(symbolName) {   
   
   })("uni2_derec_tex2_rosa");
   //Edge symbol end:'uni2_derec_tex2_rosa'

   //=========================================================
   
   //Edge symbol: 'uni3_tex1'
   (function(symbolName) {   
   
   })("uni3_tex1");
   //Edge symbol end:'uni3_tex1'

   //=========================================================
   
   //Edge symbol: 'uni3_oblig_dh'
   (function(symbolName) {   
   
   })("uni3_oblig_dh");
   //Edge symbol end:'uni3_oblig_dh'

   //=========================================================
   
   //Edge symbol: 'uni3_oblig_dh_resp'
   (function(symbolName) {   
   
   })("uni3_oblig_dh_resp");
   //Edge symbol end:'uni3_oblig_dh_resp'

   //=========================================================
   
   //Edge symbol: 'uni3_oblig_dh_garan'
   (function(symbolName) {   
   
   })("uni3_oblig_dh_garan");
   //Edge symbol end:'uni3_oblig_dh_garan'

   //=========================================================
   
   //Edge symbol: 'uni3_oblig_dh_adop'
   (function(symbolName) {   
   
   })("uni3_oblig_dh_adop");
   //Edge symbol end:'uni3_oblig_dh_adop'

   //=========================================================
   
   //Edge symbol: 'uni3_oblig_dh_oblig'
   (function(symbolName) {   
   
   })("uni3_oblig_dh_oblig");
   //Edge symbol end:'uni3_oblig_dh_oblig'

   //=========================================================
   
   //Edge symbol: 'uni3_oblig_di'
   (function(symbolName) {   
   
   })("uni3_oblig_di");
   //Edge symbol end:'uni3_oblig_di'

   //=========================================================
   
   //Edge symbol: 'uni3_rep_victi1'
   (function(symbolName) {   
   
   })("uni3_rep_victi1");
   //Edge symbol end:'uni3_rep_victi1'

   //=========================================================
   
   //Edge symbol: 'uni3_rep_victi2'
   (function(symbolName) {   
   
   })("uni3_rep_victi2");
   //Edge symbol end:'uni3_rep_victi2'

   //=========================================================
   
   //Edge symbol: 'uni3_rep_dano1'
   (function(symbolName) {   
   
   })("uni3_rep_dano1");
   //Edge symbol end:'uni3_rep_dano1'

   //=========================================================
   
   //Edge symbol: 'uni3_rep_dano2'
   (function(symbolName) {   
   
   })("uni3_rep_dano2");
   //Edge symbol end:'uni3_rep_dano2'

   //=========================================================
   
   //Edge symbol: 'uni3_rep_dano_impot'
   (function(symbolName) {   
   
   })("uni3_rep_dano_impot");
   //Edge symbol end:'uni3_rep_dano_impot'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex1'
   (function(symbolName) {   
   
   })("uni3_derec_tex1");
   //Edge symbol end:'uni3_derec_tex1'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex1_verd'
   (function(symbolName) {   
   
   })("uni3_derec_tex1_verd");
   //Edge symbol end:'uni3_derec_tex1_verd'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex1_justi'
   (function(symbolName) {   
   
   })("uni3_derec_tex1_justi");
   //Edge symbol end:'uni3_derec_tex1_justi'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex1_rep'
   (function(symbolName) {   
   
   })("uni3_derec_tex1_rep");
   //Edge symbol end:'uni3_derec_tex1_rep'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex2'
   (function(symbolName) {   
   
   })("uni3_derec_tex2");
   //Edge symbol end:'uni3_derec_tex2'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex2_restit'
   (function(symbolName) {   
   
   })("uni3_derec_tex2_restit");
   //Edge symbol end:'uni3_derec_tex2_restit'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex2_indem'
   (function(symbolName) {   
   
   })("uni3_derec_tex2_indem");
   //Edge symbol end:'uni3_derec_tex2_indem'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex2_rehab'
   (function(symbolName) {   
   
   })("uni3_derec_tex2_rehab");
   //Edge symbol end:'uni3_derec_tex2_rehab'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex2_satis'
   (function(symbolName) {   
   
   })("uni3_derec_tex2_satis");
   //Edge symbol end:'uni3_derec_tex2_satis'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex2_no'
   (function(symbolName) {   
   
   })("uni3_derec_tex2_no");
   //Edge symbol end:'uni3_derec_tex2_no'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex3'
   (function(symbolName) {   
   
   })("uni3_derec_tex3");
   //Edge symbol end:'uni3_derec_tex3'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex3_2004'
   (function(symbolName) {   
   
   })("uni3_derec_tex3_2004");
   //Edge symbol end:'uni3_derec_tex3_2004'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex3_2008'
   (function(symbolName) {   
   
   })("uni3_derec_tex3_2008");
   //Edge symbol end:'uni3_derec_tex3_2008'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex3_2012'
   (function(symbolName) {   
   
   })("uni3_derec_tex3_2012");
   //Edge symbol end:'uni3_derec_tex3_2012'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex3_2010'
   (function(symbolName) {   
   
   })("uni3_derec_tex3_2010");
   //Edge symbol end:'uni3_derec_tex3_2010'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex3_2011'
   (function(symbolName) {   
   
   })("uni3_derec_tex3_2011");
   //Edge symbol end:'uni3_derec_tex3_2011'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex4'
   (function(symbolName) {   
   
   })("uni3_derec_tex4");
   //Edge symbol end:'uni3_derec_tex4'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex4_1descrip'
   (function(symbolName) {   
   
   })("uni3_derec_tex4_1descrip");
   //Edge symbol end:'uni3_derec_tex4_1descrip'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex4_2descr'
   (function(symbolName) {   
   
   })("uni3_derec_tex4_2descr");
   //Edge symbol end:'uni3_derec_tex4_2descr'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex4_3descr'
   (function(symbolName) {   
   
   })("uni3_derec_tex4_3descr");
   //Edge symbol end:'uni3_derec_tex4_3descr'

   //=========================================================
   
   //Edge symbol: 'uni3_derec_tex5'
   (function(symbolName) {   
   
   })("uni3_derec_tex5");
   //Edge symbol end:'uni3_derec_tex5'

   //=========================================================
   
   //Edge symbol: 'sym_uni1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1446, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2436, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3426, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4416, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5406, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6396, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy2}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy3}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy4}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy5}", "click", function(sym, e) {
         sym.play("6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy6}", "click", function(sym, e) {
         sym.play("7");

      });
      //Edge binding end

   })("sym_uni1");
   //Edge symbol end:'sym_uni1'

   //=========================================================
   
   //Edge symbol: 'sym_uni2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1427, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2397, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         if(activarBoton=="si"){
         	sym.play("2");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy2}", "click", function(sym, e) {
         
         // Mostrar un elemento 
         sym.$("manito4").show();
         
         // Pausar una pista de vídeo 
         sym.$("No_Hubo_Tiempo_Para_la_Tisteza_subtitulado_2")[0].pause();
         
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy3}", "click", function(sym, e) {
         
         sym.getSymbol("manitaSimb_1").play(0);
         
         
         sym.play("32");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy4}", "click", function(sym, e) {
         sym.$("No_Hubo_Tiempo_Para_la_Tisteza_subtitulado_2")[0].pause();
         sym.play("22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_siguienteCopy}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${No_Hubo_Tiempo_Para_la_Tisteza_subtitulado_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.$("manito3").hide();
         

      });
      //Edge binding end

   })("sym_uni2_1");
   //Edge symbol end:'sym_uni2_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1388, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2365, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3401, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4398, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy2}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy3}", "click", function(sym, e) {
         activarBoton="si";
         sym.play("4");

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'sym_solucion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1849, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2698, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4849, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5698, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6547, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7396, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8245, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9094, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy2}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy3}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy4}", "click", function(sym, e) {
         sym.play("6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy5}", "click", function(sym, e) {
         sym.play("7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy6}", "click", function(sym, e) {
         sym.play("8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy7}", "click", function(sym, e) {
         sym.play("9");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy8}", "click", function(sym, e) {
         sym.play("10");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy9}", "click", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

   })("sym_solucion");
   //Edge symbol end:'sym_solucion'

   //=========================================================
   
   //Edge symbol: 'sym_dere'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6517, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7903, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8619, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9335, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10051, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11181, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         sym.play("10");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy2}", "click", function(sym, e) {
         sym.play("16");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy3}", "click", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy4}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy2}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle29}", "click", function(sym, e) {
         sym.play("14");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle29Copy}", "click", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle29Copy2}", "click", function(sym, e) {
         sym.play("12");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle29Copy3}", "click", function(sym, e) {
         sym.play("13");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy5}", "click", function(sym, e) {
         
         // Mostrar un elemento 
         // Mostrar un elemento 
         sym.getComposition().getStage().$("tabla").show();
         
         
         sym.getComposition().getStage().getSymbol("tabla").play(0);
         

      });
      //Edge binding end

   })("sym_dere");
   //Edge symbol end:'sym_dere'

   //=========================================================
   
   //Edge symbol: 'sym_oblig'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1212, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2123, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3034, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3945, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle7}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle7Copy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle7Copy2}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle7Copy3}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle8}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle8Copy}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

   })("sym_oblig");
   //Edge symbol end:'sym_oblig'

   //=========================================================
   
   //Edge symbol: 'sym_rep_uni3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1681, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2681, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3968, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5199, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle10}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle10Copy}", "click", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle11}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle11Copy}", "click", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle11Copy2}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle11Copy3}", "click", function(sym, e) {
         sym.play("31");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle12}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("sym_dano").show();
         
         sym.getSymbol("sym_dano").play(0);
         
         
         sym.getSymbol("uni3_rep_personajeSimb").play('iraDerechos');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle13}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.getComposition().getStage().$("rep_mapa_uni3").show();
         
         sym.getComposition().getStage().getSymbol("rep_mapa_uni3").play(0);
         

      });
      //Edge binding end

   })("sym_rep_uni3");
   //Edge symbol end:'sym_rep_uni3'

   //=========================================================
   
   //Edge symbol: 'sym_dano'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle9}", "click", function(sym, e) {
         // insert code for mouse click here
         
         
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("sym_dano");
   //Edge symbol end:'sym_dano'

   //=========================================================
   
   //Edge symbol: 'rep_mapa_uni3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1134, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1661, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2188, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2715, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3242, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3769, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4296, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4823, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy2}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy3}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy4}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy5}", "click", function(sym, e) {
         sym.play("6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy6}", "click", function(sym, e) {
         sym.play("7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14Copy7}", "click", function(sym, e) {
         sym.play("8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.getComposition().getStage().getSymbol("sym_rep_uni3").getSymbol("uni3_rep_personajeSimb").play(0);
         
         // Mostrar un elemento 
         sym.getComposition().getStage().getSymbol("sym_rep_uni3").$("Rectangle12").show();
         
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("rep_mapa_uni3");
   //Edge symbol end:'rep_mapa_uni3'

   //=========================================================
   
   //Edge symbol: 'sym_dere2_uni3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1939, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2878, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4109, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5129, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6068, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7007, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7946, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8885, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9824, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10763, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11702, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12641, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13580, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14519, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15458, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16397, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17336, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18275, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19214, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21379, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22318, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23257, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24196, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25135, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26074, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27013, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27952, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28891, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29830, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30769, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31708, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32647, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33586, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34525, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35464, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36403, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37342, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle16}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${adelante}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atras}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atrasCopy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${adelanteCopy}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atrasCopy2}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${adelanteCopy2}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${atrasCopy3}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle17}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle17Copy}", "click", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle17Copy2}", "click", function(sym, e) {
         sym.play("12");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle18}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle18Copy}", "click", function(sym, e) {
         sym.play("21");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle18Copy2}", "click", function(sym, e) {
         sym.play("22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle18Copy3}", "click", function(sym, e) {
         sym.play("23");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle18Copy4}", "click", function(sym, e) {
         sym.play("24");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle19}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle19Copy}", "click", function(sym, e) {
         sym.play("31");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle19Copy2}", "click", function(sym, e) {
         sym.play("32");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle19Copy3}", "click", function(sym, e) {
         sym.play("33");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle19Copy4}", "click", function(sym, e) {
         sym.play("34");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle20}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle20Copy}", "click", function(sym, e) {
         sym.play("42");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle20Copy2}", "click", function(sym, e) {
         sym.play("44");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy}", "click", function(sym, e) {
         sym.play("41");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy3}", "click", function(sym, e) {
         sym.play("42");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy4}", "click", function(sym, e) {
         sym.play("43");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy5}", "click", function(sym, e) {
         sym.play("45");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy6}", "click", function(sym, e) {
         sym.play("44");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy7}", "click", function(sym, e) {
         sym.play("44");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy8}", "click", function(sym, e) {
         sym.play("46");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy}", "click", function(sym, e) {
         sym.play("51");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy2}", "click", function(sym, e) {
         sym.play("52");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy3}", "click", function(sym, e) {
         sym.play("53");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy4}", "click", function(sym, e) {
         sym.play("54");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy5}", "click", function(sym, e) {
         sym.play("55");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy6}", "click", function(sym, e) {
         sym.play("56");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy7}", "click", function(sym, e) {
         sym.play("57");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy8}", "click", function(sym, e) {
         sym.play("58");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy9}", "click", function(sym, e) {
         sym.play("59");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy10}", "click", function(sym, e) {
         sym.play("60");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy11}", "click", function(sym, e) {
         sym.play("61");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy12}", "click", function(sym, e) {
         sym.play("62");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy13}", "click", function(sym, e) {
         sym.play("63");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy14}", "click", function(sym, e) {
         sym.play("64");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy15}", "click", function(sym, e) {
         sym.play("65");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy16}", "click", function(sym, e) {
         sym.play("66");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy17}", "click", function(sym, e) {
         sym.play("67");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle22Copy18}", "click", function(sym, e) {
         sym.play("68");

      });
      //Edge binding end

   })("sym_dere2_uni3");
   //Edge symbol end:'sym_dere2_uni3'

   //=========================================================
   
   //Edge symbol: 'opciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_desplegar_cintilla}", "click", function(sym, e) {
         
         
         
         sym.getComposition().getStage().$("menu_opciones").show("slide", { direction: "down" }, 1000);
         
         sym.getComposition().getStage().getSymbol("menu_opciones").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_home}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         // insert code for mouse click here
         sym.getComposition().getStage().play(0);
         
         
         
         
         

      });
      //Edge binding end

   })("opciones");
   //Edge symbol end:'opciones'

   //=========================================================
   
   //Edge symbol: 'menu_opciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_descargarpdf}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         
         window.open("doc/material_formacion_1.pdf", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_mapa}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         
         
         sym.getComposition().getStage().$("mapa").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("mapa").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         sym.getComposition().getStage().$("creditos").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("creditos").play();
         
         
         
         /*sym.getComposition().getStage().getSymbol("personaje_1").stop();*/

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_actividad}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         sym.getComposition().getStage().$("actividad").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("actividad").play();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_cc}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         sym.getComposition().getStage().$("cc").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("cc").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ocultar}", "click", function(sym, e) {
         
         
         sym.getComposition().getStage().$("menu_opciones").hide("slide", { direction: "down" }, 2000);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_descargar_glosario}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         
         window.open("doc/glosario.pdf", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_descargar_bibliografia}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         
         window.open("doc/bibliografia.pdf", "_blank");
         

      });
      //Edge binding end

   })("menu_opciones");
   //Edge symbol end:'menu_opciones'

   //=========================================================
   
   //Edge symbol: 'mapa'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle28}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("mapa");
   //Edge symbol end:'mapa'

   //=========================================================
   
   //Edge symbol: 'creditos'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle28}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("creditos");
   //Edge symbol end:'creditos'

   //=========================================================
   
   //Edge symbol: 'cc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle28Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("cc");
   //Edge symbol end:'cc'

   //=========================================================
   
   //Edge symbol: 'actividad'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle28Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("actividad/index.html", "_blank");
         

      });
      //Edge binding end

   })("actividad");
   //Edge symbol end:'actividad'

   //=========================================================
   
   //Edge symbol: 'manitaSimb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1090, function(sym, e) {
         // introducir código aquí
         sym.play(0)

      });
      //Edge binding end

   })("manitaSimb");
   //Edge symbol end:'manitaSimb'

   //=========================================================
   
   //Edge symbol: 'manitaSimb_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6520, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("manitaSimb_1");
   //Edge symbol end:'manitaSimb_1'

   //=========================================================
   
   //Edge symbol: 'uni3_rep_personajeSimb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1850, function(sym, e) {
         // introducir código aquí
         sym.play(0);

      });
      //Edge binding end

   })("uni3_rep_personajeSimb");
   //Edge symbol end:'uni3_rep_personajeSimb'

   //=========================================================
   
   //Edge symbol: 'textoFinal'
   (function(symbolName) {   
   
   })("textoFinal");
   //Edge symbol end:'textoFinal'

   //=========================================================
   
   //Edge symbol: 'tabla'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 849, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1854, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2806, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         
         sym.play('repe');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy}", "click", function(sym, e) {
         
         sym.play('cont');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy2}", "click", function(sym, e) {
         
         sym.play('repe2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy3}", "click", function(sym, e) {
         
         sym.play('cont2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy4}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().getSymbol("sym_dere").$("manito6Copy7").css({"left":"995px","top":"315px"});	

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('prev');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('cont');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('repe');
         

      });
      //Edge binding end

   })("tabla");
   //Edge symbol end:'tabla'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-28951245");