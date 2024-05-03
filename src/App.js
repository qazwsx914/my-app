import logo from './logo.svg';
import './App.css';

function App() {
  fetch('https://kortep.pythonanywhere.com/', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      version: '1.0',
      session: { new: false }, // Если сессия новая
      request: { original_utterance: 'хорошо' } // Пример запроса
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log( 'log:', data); // Данные, полученные с сервера Flask
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
  console.log('ok');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




export default App;
