document.addEventListener('DOMContentLoaded', function () {
    var ball = document.getElementById('ball');
    var delay = 16; 
    var easingFactor = 0.09; 
    var currentPosition = { x: 0, y: 0 };
    var targetPosition = { x: 0, y: 0 };

    var moveBall = function () {
        var dx = targetPosition.x - currentPosition.x;
        var dy = targetPosition.y - currentPosition.y;

        currentPosition.x += dx * easingFactor;
        currentPosition.y += dy * easingFactor;

        ball.style.left = currentPosition.x + 'px';
        ball.style.top = currentPosition.y + 'px';

        requestAnimationFrame(moveBall);
    };

    document.addEventListener('mousemove', function (e) {
        targetPosition.x = e.clientX;
        targetPosition.y = e.clientY;

        if (!requestAnimationFrameId) {
            requestAnimationFrameId = requestAnimationFrame(moveBall);
        }
    });

    var requestAnimationFrameId;
});
