import './App.css';
import Texto from './components/Texto';
import Botao from './components/Botao';
import Forms from './components/forms'

function App() {
  return (
    <div className="App">
<div className='container'>

<Texto text="QUEM?"/>
<Botao
props ="MADIN"/>

<Texto text="O QUE?"/>
<Botao
props =" VOCE É MUITO LINDO"/>



<Forms/>
</div>


    </div>
  );
}

export default App;
