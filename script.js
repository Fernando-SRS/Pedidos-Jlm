
    let container = document.querySelector('.container');
    let clonar = document.querySelector('.clonar');

    clonar.addEventListener('click', () => {
        let modelo = document.querySelector('.modelo');
        let novoCronometro = modelo.cloneNode(true);
        container.appendChild(novoCronometro);

        let buttonIniciar = novoCronometro.querySelector('#iniciar');
        let buttonCancelar = novoCronometro.querySelector('#cancelar');
        let buttonConcluido = novoCronometro.querySelector('#concluido');
        let hourElement = novoCronometro.querySelector('.hour');
        let minuteElement = novoCronometro.querySelector('.minute');
        let secondElement = novoCronometro.querySelector('.second');
        let input = novoCronometro.querySelector('.input');
        let audio = new Audio('clock-alarm-8761.mp3')

        let intervalCronometro;
        let hour = 0;
        let minute = 44;
        let second = 60;

        novoCronometro.classList.remove('remove');

        function att() {
            secondElement.innerHTML = second < 10 ? '0' + second : second;
            minuteElement.innerHTML = minute < 10 ? '0' + minute : minute;
            hourElement.innerHTML = hour < 10 ? '0' + hour : hour;
        }

        function status() {
            let container_status = novoCronometro.querySelector('.container_modelo')

            switch (true) {
                case minute > 14 && minute < 45:
                    container_status.style.backgroundColor = 'rgba(9, 187, 104, 0.973)'
                    break;

                case minute <= 14 && minute > 4:
                    container_status.style.backgroundColor = 'rgba(226, 52, 8, 0.884)'
                    break;

                case minute <= 4 && minute >= 0:
                container_status.style.backgroundColor = 'rgb(255, 0, 0)'
                break;
                default:
                    break;
            }

            if (minute === 4 && second === 59) {
                audio.play();
            }
        }

        function cronometro() {
            second--;
            if (second < 1) {
                second = 59;
                minute--;
            }
            if (minute < 1) {
                // Definir o que acontece quando o pedido entrar em atraso
            }
            att();
            status();
        }

        function iniciarCronometro() {
            intervalCronometro = setInterval(cronometro, 1000); // Alterei o intervalo para 1000ms (1 segundo)
            
            let testando = novoCronometro.querySelector('.title');
            testando.innerHTML = input.value;
            input.classList.add('remove_input');
            buttonIniciar.classList.add('remove');
        }

        function resetarCronometro() {
            clearInterval(intervalCronometro);
            hour = 0;
            minute = 0;
            second = 0;
            att();
        }

        buttonIniciar.addEventListener('click', () => {
            iniciarCronometro();
        });

        buttonCancelar.addEventListener('click', () => {
            resetarCronometro();
            container.removeChild(novoCronometro);
        });

        buttonConcluido.addEventListener('click', () => {
            // Lógica para o botão concluído, se necessário.
        });

        

        // Adicionando evento para o input
        input.addEventListener('keyup', (event) => {
            if (event.keyCode === 13 && input.value.trim() !== '') {
                iniciarCronometro();
            }
        });
        status()
        
    });

    let teste = 0;
    function testecronometro() {
        teste++
        console.log(teste);
    }
setInterval(testecronometro, 10000)
