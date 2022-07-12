//Medidor de velocidade
//velocidade máxima de 70
//a cada 5km do limite você ganha 1 ponto

verificarVelocidade(70);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if ( velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if( pontos >= 12)
            console.log('Carteira Suspensa');
        else console.log('Pontos',pontos);
    }
}