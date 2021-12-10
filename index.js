function calculateAverage(nota1, nota2, notaOptativa) {

       if(notaOptativa == undefined) {
              notaOptativa = -1
              console.log(notaOptativa)
       }


       if (nota1 < nota2) {
              nota1 = nota1 < notaOptativa ? notaOptativa : nota1
       } else if (nota2 < nota1) {
              nota2 = nota2 < notaOptativa ? notaOptativa : nota2
       }

       const media = (nota1 + nota2) / 2
       return media
}
function escreverMensagemMedia(media) {
       if(media >= 6) {
              console.log(`Aprovado: ${media}`)
       } else if (media < 3) {
              console.log(`Reprovado: ${media}`)
       } else if (media >= 3 && media < 6) {
              console.log(`Exame: ${media}`)
       }
}

const test1 = 1
const test2 = 6
let optionalTest 

const mediaAluno1 = calculateAverage(test1, test2, optionalTest)
escreverMensagemMedia(mediaAluno1)

const mediaAluno2 = calculateAverage(3, 8)
escreverMensagemMedia(mediaAluno2)

escreverMensagemMedia(calculateAverage(5, 8, 9))