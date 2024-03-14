const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let totalMensal = 0;
for (const estado in faturamentoPorEstado) {
    totalMensal += faturamentoPorEstado[estado];
}

const percentuaisPorEstado = {};
for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
    percentuaisPorEstado[estado] = percentual.toFixed(2);
}

console.log("Percentual de representação de cada estado:");
for (const estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
}