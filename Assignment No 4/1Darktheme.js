<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Theme</title>
    </head>
<div id="app" class="day">
    <p>I am a HashedBit student, ready to become an awesome full stack developer</p>
    <button onclick="swapTheme()" id="swap" class="button_day">Toggle theme</button>
</div>
</html>

function swapTheme() {
            const appDiv = document.getElementById('app');
            const swapButton = document.getElementById('swap');
            
            if (appDiv.classList.contains('day')) {
                appDiv.classList.remove('day');
                appDiv.classList.add('night');
                swapButton.classList.remove('button_day');
                swapButton.classList.add('button_night');
            } else {
                appDiv.classList.remove('night');
                appDiv.classList.add('day');
                swapButton.classList.remove('button_night');
                swapButton.classList.add('button_day');
            }
        }

.day {
    background-color: white;
    color: black;
}

.night {
    background-color: black;
    color: gold;
}

.button_night {
    background-color: darkblue;
    color: white;
}

.button_day{
    background-color: white;
    color: black;
}

html, body {
    margin: 0px;
    height: 100%;
}

#app {
    height: 100%;
    padding: 10px;
}
