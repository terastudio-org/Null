// Creepy interactive effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Random text changes
    const messages = [
        "The walls are bleeding again.",
        "They're in the walls. You can't see them, but they're there.",
        "Your reflection moved before you did.",
        "The shadows whisper your name.",
        "There's something behind you. Don't turn around.",
        "The eyes are watching. Always watching.",
        "You shouldn't have come here.",
        "IT KNOWS WHERE YOU ARE",
        "THE NUMBERS. THEY'RE CHANGING.",
        "SOMEONE IS CLICKING ON YOU."
    ];
    
    const statusItems = [
        "SOMETHING IS FOLLOWING YOU",
        "SIGNAL LOST",
        "TRAPPED",
        "CAN'T ESCAPE",
        "NOT ALONE",
        "BEHIND YOU",
        "RUN",
        "HIDE",
        "WATCHING",
        "TRAPPED IN HERE"
    ];
    
    // Periodically change the creepy message
    setInterval(function() {
        const messageBox = document.querySelector('.creepy-text');
        if (messageBox) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            messageBox.style.opacity = '0';
            
            setTimeout(function() {
                messageBox.textContent = randomMessage;
                messageBox.style.opacity = '1';
            }, 500);
        }
    }, 8000 + Math.random() * 4000);
    
    // Periodically change status items
    setInterval(function() {
        const statusItemsEls = document.querySelectorAll('.status-item');
        statusItemsEls.forEach(function(item, index) {
            const randomStatus = statusItems[Math.floor(Math.random() * statusItems.length)];
            setTimeout(function() {
                item.style.opacity = '0';
                setTimeout(function() {
                    item.textContent = randomStatus;
                    item.style.opacity = '1';
                }, 200);
            }, index * 500);
        });
    }, 15000 + Math.random() * 5000);
    
    // Creepy cursor effects
    let cursorX = 0;
    let cursorY = 0;
    let mouseTrail = [];
    
    document.addEventListener('mousemove', function(e) {
        cursorX = e.clientX;
        cursorY = e.clientY;
        
        // Create mouse trail effect
        if (mouseTrail.length > 10) {
            const oldest = mouseTrail.shift();
            oldest.remove();
        }
        
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = cursorX + 'px';
        trail.style.top = cursorY + 'px';
        trail.style.width = '2px';
        trail.style.height = '2px';
        trail.style.backgroundColor = '#ff0000';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9999';
        trail.style.borderRadius = '50%';
        trail.style.animation = 'fadeOut 1s forwards';
        
        document.body.appendChild(trail);
        mouseTrail.push(trail);
    });
    
    // Random screen effects
    function createRandomEffect() {
        const effects = ['glitch', 'shake', 'flicker'];
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        
        document.body.classList.add(randomEffect);
        
        setTimeout(function() {
            document.body.classList.remove(randomEffect);
        }, 1000);
    }
    
    // Randomly trigger screen effects
    setInterval(function() {
        if (Math.random() < 0.3) {
            createRandomEffect();
        }
    }, 5000);
    
    // Creepy eye tracking
    function createFloatingEyes() {
        const eyesContainer = document.querySelector('.floating-eyes');
        const numEyes = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < numEyes; i++) {
            setTimeout(function() {
                const eye = document.createElement('div');
                eye.textContent = Math.random() > 0.5 ? '◕‿◕' : '◔‿◔';
                eye.style.position = 'absolute';
                eye.style.fontSize = (15 + Math.random() * 10) + 'px';
                eye.style.color = `rgba(255, 0, 0, ${0.1 + Math.random() * 0.3})`;
                eye.style.left = Math.random() * 100 + '%';
                eye.style.top = Math.random() * 100 + '%';
                eye.style.animation = `float ${3 + Math.random() * 5}s infinite ease-in-out`;
                eye.style.pointerEvents = 'none';
                eye.style.zIndex = '999';
                
                eyesContainer.appendChild(eye);
                
                // Remove eye after 10-20 seconds
                setTimeout(function() {
                    if (eye.parentNode) {
                        eye.remove();
                    }
                }, 10000 + Math.random() * 10000);
            }, i * 2000);
        }
    }
    
    // Create floating eyes periodically
    setInterval(createFloatingEyes, 25000);
    
    // Terminal typing effect
    function typeTerminal() {
        const terminalContent = document.querySelector('.terminal-content');
        const typingEl = document.querySelector('.typing-text');
        const hiddenTexts = document.querySelectorAll('.hidden-text');
        
        if (typingEl && terminalContent) {
            const commands = [
                'C:\\User\\_> BOOT SEQUENCE INITIATED...',
                'C:\\User\\_> SCANNING FOR LIFE SIGNS...',
                'C:\\User\\_> MULTIPLE ENTITIES DETECTED',
                'C:\\User\\_> SYSTEM COMPROMISED',
                'C:\\User\\_> YOU ARE NOT ALONE'
            ];
            
            const command = commands[Math.floor(Math.random() * commands.length)];
            
            typingEl.style.animation = 'none';
            typingEl.style.borderRight = '2px solid #00ff00';
            typingEl.style.width = '0ch';
            
            let i = 0;
            const typeInterval = setInterval(function() {
                typingEl.textContent = command.substring(0, i + 1) + '█';
                i++;
                
                if (i >= command.length) {
                    clearInterval(typeInterval);
                    setTimeout(function() {
                        typingEl.textContent = command;
                        typingEl.style.borderRight = 'none';
                    }, 500);
                }
            }, 100 + Math.random() * 50);
        }
    }
    
    // Run terminal typing periodically
    setInterval(typeTerminal, 20000);
    
    // Creepy menu interactions
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            const randomText = messages[Math.floor(Math.random() * messages.length)];
            const messageBox = document.querySelector('.creepy-text');
            if (messageBox) {
                messageBox.textContent = randomText;
                messageBox.style.animation = 'textGlitch 0.5s';
            }
        });
        
        item.addEventListener('click', function() {
            // Create system crash effect
            document.body.style.filter = 'invert(1) hue-rotate(180deg)';
            setTimeout(function() {
                document.body.style.filter = '';
            }, 200);
            
            // Add more random message
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert('SYSTEM MESSAGE: ' + randomMessage);
        });
    });
    
    // Page visibility change detection
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            console.log('YOU LEFT. WE SAW YOU.');
        } else {
            console.log('WELCOME BACK. WE WERE WAITING.');
        }
    });
    
    // Random glitch bursts
    function createGlitchBurst() {
        const body = document.body;
        const intensity = Math.random();
        
        body.style.transform = `translate(${(Math.random() - 0.5) * 10}px, ${(Math.random() - 0.5) * 10}px)`;
        body.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${0.8 + intensity * 0.4})`;
        
        setTimeout(function() {
            body.style.transform = '';
            body.style.filter = '';
        }, 100);
    }
    
    // Random glitch bursts
    setInterval(function() {
        if (Math.random() < 0.2) {
            createGlitchBurst();
        }
    }, 3000);
    
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
        }
        
        .shake {
            animation: shake 0.5s infinite;
        }
        
        @keyframes shake {
            0%, 100% { transform: translate(0); }
            10%, 30%, 50%, 70%, 90% { transform: translate(-1px, 1px); }
            20%, 40%, 60%, 80% { transform: translate(1px, -1px); }
        }
        
        .flicker {
            animation: flicker 0.1s infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Random loading of additional creepy elements
    function spawnCreepyElement() {
        const elements = [
            '๖ۣۜ鬼', '†', '☠', '⚰', '♆', '♅', '♇', '⚡', '⚔', '☾'
        ];
        
        const element = document.createElement('div');
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        element.style.position = 'fixed';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.fontSize = (20 + Math.random() * 40) + 'px';
        element.style.color = `rgba(255, 0, 0, ${0.3 + Math.random() * 0.4})`;
        element.style.pointerEvents = 'none';
        element.style.zIndex = '9998';
        element.style.animation = `float ${3 + Math.random() * 4}s infinite ease-in-out`;
        
        document.body.appendChild(element);
        
        setTimeout(function() {
            element.remove();
        }, 5000 + Math.random() * 5000);
    }
    
    // Spawn creepy elements randomly
    setInterval(function() {
        if (Math.random() < 0.4) {
            spawnCreepyElement();
        }
    }, 8000);
    
    console.log('WELCOME TO THE VOID...');
    console.log('YOU CAN\'T ESCAPE NOW.');
});

// Error handling that adds to the creepy atmosphere
window.addEventListener('error', function(e) {
    console.log('THE SYSTEM KNOWS YOUR FEAR: ' + e.message);
});

// Prevent context menu for extra creepiness
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('NO ESCAPE FROM THE RIGHT CLICK EITHER.');
});