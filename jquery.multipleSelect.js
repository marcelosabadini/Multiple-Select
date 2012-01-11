
(function($) {

    $.fn.multipleSelect = function(options){
	
        //Configurações padrão
        var defaults = {
			// options of layout
			width: '300px',
			height: '100px',
			overflow: 'auto',
			border: '1px solid black',
			color_odd: '#F3F3F3',
			color_even: '#FFFFFF',
			more_style: '',
			
			// general options
			hide_original_element: true,
			select_all: true,
			select_all_label: 'Selecionar Todos',
			check_selected: true,
			
			// callbacks and debug
			callback: null,
            debug : false
        };
		// faz o merge dos parâmetros do plugin
        var options = $.extend(defaults, options);
        
		// Se tiver debug ele joga os parametros para o console
        if(options.debug == true && !$.browser.msie && window.console && window.console.firebug)
            console.info(options);
		
		// declara as variaveis
		var value;
		var name;
		var content;
		var name_field;
		var id_field;
		var selected;
		var qtd_results = 0;
			
        $(this).each(function(){
		
			if($(this).get(0).tagName == 'SELECT'){
		
				id_field = 'multiple_'+$(this).attr('id');
			
				var html_result = '<div id="div_'+id_field+'" name="div_'+id_field+'" class="selectMultiplo" style="width: '+options.width+'; height:'+options.height+' ; overflow:'+options.overflow+' ; border:'+options.border+' ; '+options.more_style+' ">';
					html_result += '<table>';
					html_result += '<tbody id="'+id_field+'">';		
				
				if(options.select_all == true){
					
					html_result += "<tr style=''>\
									<td width='1%'>\
										<input type='checkbox' class='selecionar_todos' id='"+id_field+"'>\
									</td>\
									<th>\
										<label for='"+id_field+"'>"+options.select_all_label+"</label>\
									</th>\
								</tr>";
				}
			
				name = $(this).attr('name');
			
				$(this).children().each(function(){
				
					value    = $(this).attr('value');
					content  = $(this).html();
					selected = $(this).attr('selected');
					
					if(content != ''){
						html_result += "<tr style=''>\
											 <td width='1%'>\
												<input type='checkbox' "+(options.check_selected==true&&selected==true ? 'checked=checked' : '')+" value='"+value+"' name='"+name+"[]' id='"+name+"_"+value+"'>\
											 </td>\
											<td>\
												<label for='"+name+"_"+value+"'>"+content+"</label>\
											</td>\
										</tr>";
						qtd_results++;
					}
					
				});
				
				html_result += '</tbody>	</table></div>';
				
				// hide the principal element if option is true
				if(options.hide_original_element == true)
					$(this).hide();
				
				// apply the new element on the html
				if(qtd_results > 0)
					$(this).after(html_result);
				
				// zebra
				$('#'+id_field).find("tr:odd").css('background-color', options.color_odd);
				$('#'+id_field).find("tr:even").css('background-color', options.color_even);
			
			} else {
				alert('Ops... Só é permitido aplicar o plugin multipleSelect em elementos\nSELECT.');
			}
			
        });
		
		// search on the DIV
		$(".selecionar_todos").click(function(){
			if($(this).attr("checked") == true){
				$('#div_'+$(this).attr('id')+' :checkbox').attr("checked","checked");
			}else {
				$('#div_'+$(this).attr('id')+' :checkbox').removeAttr("checked");
			}
		});
						
		// Casso tenha callback para executar ele dispara a chamada
		if(options.callback != null)
			options.callback.call(this);
		
    }
	
})(jQuery);
