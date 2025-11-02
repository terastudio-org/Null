<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE VOID CALLS</title>
    <link rel="stylesheet" href="style.css">
    <?php
    $current_time = date('H:i:s');
    $random_message = rand(1, 5);
    ?>
    <script>
        let audioContext;
        let audioBuffer;
        let audioSource;
        
        function initAudio() {
            try {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                loadAudio();
            } catch(e) {
                console.log('Audio not supported');
            }
        }
        
        function loadAudio() {
            const audioFiles = [
                'https://huggingface.co/datasets/R-Kentaren/Null/resolve/main/MENU1.FLAC',
                'https://huggingface.co/datasets/R-Kentaren/Null/resolve/main/HIDNSEEK.FLAC'
            ];
            const randomFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
            
            fetch(randomFile)
                .then(response => response.arrayBuffer())
                .then(data => {
                    audioContext.decodeAudioData(data, buffer => {
                        audioBuffer = buffer;
                        playAudio();
                    });
                })
                .catch(e => console.log('Audio loading failed'));
        }
        
        function playAudio() {
            if (!audioBuffer) return;
            
            audioSource = audioContext.createBufferSource();
            audioSource.buffer = audioBuffer;
            audioSource.loop = true;
            audioSource.connect(audioContext.destination);
            audioSource.start(0);
            
            const gainNode = audioContext.createGain();
            gainNode.gain.value = 0.3;
            audioSource.connect(gainNode);
            gainNode.connect(audioContext.destination);
        }
        
        function resumeAudio() {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume();
            }
        }
        
        document.addEventListener('click', resumeAudio, { once: true });
        document.addEventListener('touchstart', resumeAudio, { once: true });
        window.addEventListener('load', initAudio);
    </script>
</head>
<body>
    <div class="scanlines"></div>
    <div class="noise"></div>
    <div class="container">
        <header>
            <h1 class="glitch" data-text="THE VOID AWAITS">THE VOID AWAITS</h1>
            <div class="timer"><?php echo $current_time; ?></div>
        </header>
        
        <nav class="sidebar">
            <div class="menu-item">MENU</div>
            <div class="menu-item">OPTIONS</div>
            <div class="menu-item">EXIT</div>
            <div class="menu-item">QUIT</div>
            <div class="menu-item">RESET</div>
        </nav>
        
        <main class="content">
            <div class="warning">
                <h2>⚠ WARNING ⚠</h2>
                <p>YOU ARE NOT ALONE</p>
                <p>SOMEONE IS WATCHING</p>
            </div>
            
            <div class="message-box">
                <?php
                $messages = [
                    "The walls are bleeding again.",
                    "They're in the walls. You can't see them, but they're there.",
                    "Your reflection moved before you did.",
                    "The shadows whisper your name.",
                    "There's something behind you. Don't turn around."
                ];
                echo "<p class='creepy-text'>" . $messages[$random_message-1] . "</p>";
                ?>
            </div>
            
            <div class="terminal">
                <div class="terminal-header">WHO'S THERE.exe</div>
                <div class="terminal-content">
                    <p class="typing-text">C:\User\_> </p>
                    <p class="hidden-text">YOU CLICKED ON ME</p>
                    <p class="hidden-text">WELCOME TO THE ABYSS</p>
                    <p class="hidden-text">THIS WAS A MISTAKE</p>
                    <p class="hidden-text">TIME: <?php echo $current_time; ?></p>
                    <p class="cursor">█</p>
                </div>
            </div>
            
            <div class="status-bar">
                <span class="status-item">SOMETHING IS FOLLOWING YOU</span>
                <span class="status-item">SIGNAL LOST</span>
                <span class="status-item">TRAPPED</span>
            </div>
        </main>
        
        <footer>
            <div class="glitch-small" data-text="DO NOT CLOSE YOUR EYES">DO NOT CLOSE YOUR EYES</div>
            <div class="counter">THOSE WHO HAVE ENTERED: <?php echo rand(1000, 9999); ?></div>
        </footer>
    </div>
    
    <div class="floating-eyes"></div>
    
    <script src="script.js"></script>
</body>
</html>