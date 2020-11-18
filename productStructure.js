const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {

  const result = {};                           //define novo objeto vazio
  
  products.forEach((product)=>{               //percorre o array dos produtos
    const props = product.split('-');         //remove o hífen e separa em dois elementos ["preto","G"]
    const [color, size] = props;              //desestrutura o array em variáveis
    
    if (typeof result[color] !== 'object')
      result[color] = {}                       //cria um novo objeto para a cor, se não existir
      
    if (result[color].hasOwnProperty(size)) {
      result[color][size] += 1;       //adiciona +1 ao tamanho, se já existir
      } else {
        result[color][size] = 1;      //prefixa em 1 o novo tamanho 
      }
    
  });

  return(result);  
}

  