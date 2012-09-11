Este plugin faz com que elementos html SELECT sejam transformados em select multiplo. 
Ele remove o <select> da tela e monta uma div com os checkbox.

Este plugin até o momento <b>NÃO TRATA OPTION GROUP</b>.

# Como utilizar:

* Faça o import do jQuery no seu projeto;

* Faça o import do jquery.multipleSelect.js;

* Dentro do bloco de códigos dispare o plugin para o seletor que melhor lhe atenda, ex:

    ```
    $(function() {
    
        // Aplica em TODOS os elementos SELECT da página
        $('select').multipleSelect();

        // Aplica em todos elementos com o class 'multiplo'
        $('.multiplo').multipleSelect();

        // Aplica nos elementos com ID 'estado' e 'interesses'
        $('#estado, #interesses').multipleSelect();
        
    });
    ```

* Na chamada do plugin pode-se passar um objeto com algumas configurações, ex: 

    ```
    $(function() {
    
        $('.multiplo').multipleSelect(
            {
                width: '300px', // largura
                height: '100px', // altura
                overflow: 'auto' // barra de rolagem
            }
        );
        
        });
    ```

* Você pode passar um callback para quando o plugin terminar de desenhar o novo elemento na página, ex:
    
    ```
    $(function() {
    
        $('.multiplo').multipleSelect(
            {
                callback: function(){
                    alert('O elemento terminou de ser montado.');
                }
            }
        );
        
    });
    ```

* Veja toda opções de configuração e seus valores padrão:

    * width: '300px', // largura
    * height: '100px', // altura
    * overflow: 'auto', // barra de rolagem
    * border: '1px solid black', // borda
    * color_odd: '#F3F3F3', // cora das linhas impares
    * color_even: '#FFFFFF', // cor das linhas pares
    * more_style: '', // se quiser passar mais comandos CSS então ele vai inserir este conteúdo dentro do style=''

    * hide_original_element: true, // se deve remover o elemento original(SELECT) da tela
    * select_all: true, // se vai habilitar o 'Selecionar todos'
    * select_all_label: 'Selecionar Todos', // O texto do Selecionar Todos
    * check_selected: true, // se deve deixar checkado os elementos que estavam como selected no SELECT
    * invalid_element: 'Ops... Só é permitido aplicar o plugin multipleSelect em elementos\nSELECT.', // Texto exibido caso atribua o plugin para um elemento diferente de SELECT

    * debug : false // Se for TRUE ele vai exibindo algumas informações no console do Firebug

# Se quiser fazer um fork e/ou enviar um suas melhorias fique a vontade :)