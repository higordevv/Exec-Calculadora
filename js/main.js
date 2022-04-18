function main(){
    return{
        display: document.querySelector('#display'),
        
        // Start de tudo 
        iniciar(){this.botoesclicados(),this.Backspace(),this.Enter();},
        
        /* Funções da Calculadora */

        realizaConta(){
            let conta = this.display.value;

            try {
                //Não recomendado kk
                conta = eval(conta)
                
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
                };
            },

        clearDisplay(){this.display.value = '';},

        apagaUm(){this.display.value = this.display.value.slice(0,-1);},

        botoesclicados(){
            document.addEventListener('click', e => {
                const event = e.target;
                
                if(event.classList.contains('btn-num')) {this.Display_view(event.innerText)};
                if(event.classList.contains('btn-clear')){this.clearDisplay()};
                if(event.classList.contains('btn-del')){this.apagaUm()};
                if(event.classList.contains('btn-eq')){this.realizaConta();};
                this.display.focus();
            });
        },

        // Exibe os numeros no Display
        Display_view(valor){this.display.value += valor;},

        /*         Detalhes              */
        
        // Ação da tecla Backspace
        Backspace(){
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                };
        });
        },

        // Ação da tecla Enter
        Enter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
        });
        }
    };
};
// Inicia a Calculadora
const calc = main()
calc.iniciar()