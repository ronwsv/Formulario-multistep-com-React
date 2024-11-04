import './Thanks.css';
import { BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,  
 } from 'react-icons/bs'

 const emojiData = {
  neutral: {
    emoji: <BsFillEmojiNeutralFill />,
    text: "Poderia ser melhor"
  },
  unsatisfied: {
    emoji: <BsFillEmojiFrownFill />,
    text: "Insatisfeito"
  },
  satisfied: {
    emoji: <BsFillEmojiSmileFill />,
    text: "Satisfeito"
  },
  very_satisfied: {
    emoji: <BsFillEmojiHeartEyesFill />,
    text: "Muito satisfeito"
  }
}


const Thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
        <h2>Falta Pouco...</h2>
        <p>
          A sua opinião é muito importante para nós. Em breve você receberá um cupom de 10% de desconto para o seu proximo pedido
          Obrigado por avaliar o nosso produto.
        </p>
        <p>
          Para concluir sua avaliação clique no botão de enviar abaixo.
        </p>
        <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
        <p className='review-data'> 
         <span>Satisfação com o produto:</span>
         {emojiData[data.review].emoji}

        </p>
        <p className='review-data'>
         <span>Comentário:</span>
         {data.comment}
        </p>
        <button type='submit'></button>
    </div>
  )
}

export default Thanks