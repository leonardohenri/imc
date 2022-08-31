
import { calcular } from '../../util/calcular';
import './styles.css';



export const IMC = () => {
  return(
     <div className='container'>
      <h1>Calculadora IMC</h1>
     
      <div className='input'>
        <label>Nome: </label>
        <input type="text" id='name' placeholder='digite seu nome'></input>
        </div>
      <div className='input'>
        <label>Altura: </label>
        <input type="text" id='altura' placeholder='digite sua altura' autoFocus maxLength="4"></input>
        </div>
      <div className='input'>
        <label>Peso: </label>
        <input type="text" id='peso' placeholder='digite seu peso' ></input>
      </div>
      <div className='button'>
        <button onClick={() => calcular()} className="button">Calcular </button>

      </div>
      <div>
        <input id='calculo' type='text' className='result' disabled={true} ></input>
      </div>
      
     </div>
  );
}


