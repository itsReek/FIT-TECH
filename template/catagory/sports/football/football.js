function checkDiet(){
    const weight = parseFloat(localStorage.getItem('weight'));
    const height = parseFloat(localStorage.getItem('height'));
    if (weight < 30 && height > 4.5 && height < 5.0) 
        window.location.href = 'diet/diet1.html';
    if (weight < 30 && height >= 5 && height < 5.5) 
        window.location.href = 'diet/diet2.html';
    if (weight < 30 && height >= 5.5 && height < 6)
        window.location.href = 'diet/diet3.html';
    if (weight < 30 && height >= 6 && height < 6.5)
        window.location.href = 'diet/diet4.html';
    if (weight >= 30 && weight < 45 && height >= 4.5 && height < 5.0)
        window.location.href = 'diet/diet5.html';
    if (weight >= 30 && weight < 45 && height >= 5 && height < 5.5)
        window.location.href = 'diet/diet6.html';
    if (weight >= 30 && weight < 45 && height >= 5.5 && height < 6)
        window.location.href = 'diet/diet7.html'
    if (weight >= 30 && weight < 45 && height >= 6 && height < 6.5)
        window.location.href = 'diet/diet8.html';
    if (weight >= 45 && weight < 55 && height >= 4.5 && height < 5.0)
        window.location.href = 'diet/diet9.html';
    if (weight >= 45 && weight < 55 && height >= 5 && height < 5.5)
        window.location.href = 'diet/diet10.html';
    if (weight >= 45 && weight < 55 && height >= 5.5 && height < 6) 
        window.location.href = 'diet/diet11.html';; 
    if (weight >= 45 && weight < 55 && height >= 6 && height < 6.5) 
        window.location.href = 'diet/diet12.html';
    if (weight >= 55 && weight < 65 && height >= 4.5 && height < 5.0) 
        window.location.href = 'diet/diet13.html';
    if (weight >= 55 && weight < 65 && height >= 5 && height < 5.5) 
        window.location.href = 'diet/diet14.html';
    if (weight >= 55 && weight < 65 && height >= 5.5 && height < 6)
        window.location.href = 'diet/diet15.html';
    if (weight >= 55 && weight < 65 && height >= 6 && height < 6.5) 
        window.location.href = 'diet/diet16.html';
    if (weight >= 65 && weight < 75 && height >= 4.5 && height < 5.0) 
        window.location.href = 'diet/diet17.html';
    if (weight >= 65 && weight < 75 && height >= 5 && height < 5.5)
        window.location.href = 'diet/diet18.html';
    if (weight >= 65 && weight < 75 && height >= 5.5 && height < 6)
        window.location.href = 'diet/diet19.html';
    if (weight >= 65 && weight < 75 && height >= 6 && height < 6.5)
        window.location.href = 'diet/diet20.html';
    if (weight >= 75 && weight < 85 && height >= 4.5 && height < 5.0)
        window.location.href = 'diet/diet21.html';
    if (weight >= 75 && weight < 85 && height >= 5 && height < 5.5)
        window.location.href = 'diet/diet22.html';
    if (weight >= 75 && weight < 85 && height >= 5.5 && height < 6)
        window.location.href = 'diet/diet23.html';
    if (weight >= 75 && weight < 85 && height >= 6 && height < 6.5)
        window.location.href = 'diet/diet24.html';
    if (weight >= 85 && weight < 100 && height >= 4.5 && height < 5)
        window.location.href = 'diet/diet25.html';
    if (weight >= 85 && weight < 100 && height >= 5 && height < 5.5)
        window.location.href = 'diet/diet26.html';
    if (weight >= 85 && weight < 100 && height >= 5.5 && height < 6)
        window.location.href = 'diet/diet27.html';
    if (weight >= 85 && weight < 100 && height >= 6 && height < 6.5)
        window.location.href = 'diet/diet28.html';
}