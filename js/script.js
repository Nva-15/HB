document.addEventListener('DOMContentLoaded', function() {
            // Crear corazones flotantes
            const heartsContainer = document.getElementById('hearts');
            for (let i = 0; i < 20; i++) {
                createHeart();
            }
            
            // Efecto de confeti al hacer clic en el botón
            const surpriseBtn = document.getElementById('surpriseBtn');
            surpriseBtn.addEventListener('click', function() {
                createConfetti();
                
                // Animación de agrandamiento del texto
                const h1 = document.querySelector('h1');
                h1.style.transition = 'all 0.5s ease';
                h1.style.transform = 'scale(1.2)';
                h1.style.color = '#ff0066';
                
                setTimeout(() => {
                    h1.style.transform = 'scale(1)';
                    h1.style.color = '#d23669';
                }, 1000);
                
                // Cambiar la foto momentáneamente (efecto de flash)
                const photo = document.getElementById('maiPhoto');
                photo.style.transition = 'all 0.3s ease';
                photo.style.filter = 'brightness(1.5) sepia(0.5)';
                
                setTimeout(() => {
                    photo.style.filter = 'none';
                }, 500);
            });
            
            // Función para crear corazones
            function createHeart() {
                const heart = document.createElement('div');
                heart.innerHTML = '❤';
                heart.classList.add('heart');
                
                const startLeft = Math.random() * 100;
                const animationDuration = 4 + Math.random() * 6;
                const delay = Math.random() * 5;
                
                heart.style.left = `${startLeft}vw`;
                heart.style.animationDuration = `${animationDuration}s`;
                heart.style.animationDelay = `${delay}s`;
                
                heartsContainer.appendChild(heart);
                
                // Volver a crear corazones continuamente
                setTimeout(() => {
                    heart.remove();
                    createHeart();
                }, animationDuration * 1000);
            }
            
            // Función para crear confeti
            function createConfetti() {
                const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
                
                for (let i = 0; i < 100; i++) {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti');
                    
                    const size = 5 + Math.random() * 10;
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const left = Math.random() * 100;
                    const animationDuration = 2 + Math.random() * 3;
                    const delay = Math.random() * 2;
                    
                    confetti.style.width = `${size}px`;
                    confetti.style.height = `${size}px`;
                    confetti.style.backgroundColor = color;
                    confetti.style.left = `${left}vw`;
                    confetti.style.animation = `confettiFall ${animationDuration}s linear ${delay}s forwards`;
                    
                    document.body.appendChild(confetti);
                    
                    // Eliminar el confeti después de la animación
                    setTimeout(() => {
                        confetti.remove();
                    }, (animationDuration + delay) * 1000);
                }
            }
            
            // Efecto de escritura para el mensaje (opcional)
            const messages = document.querySelectorAll('p');
            messages.forEach((msg, index) => {
                const text = msg.textContent;
                msg.textContent = '';
                
                let i = 0;
                const typingEffect = setInterval(() => {
                    if (i < text.length) {
                        msg.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typingEffect);
                    }
                }, 50 * (index + 1));
            });
        });