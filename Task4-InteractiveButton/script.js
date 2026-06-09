function changeColor(){

    const colors = [
        "#ffe5b4",
        "#d4f1f4",
        "#e6ffe6",
        "#f0e6ff",
        "#fff0f5"
    ];

    const randomColor =
    colors[Math.floor(Math.random()*colors.length)];

    document.body.style.backgroundColor =
    randomColor;
}
