import '../css/App.css';

function ColeTest() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Figured out why my minified React Files were not loading properly.
        </p>
        <p>
            NGINX just wasn't working right! Uninstalled and reinstalled and wowiee it worked!
        </p>
        <a href="https://www.github.com/colelamers">Github</a>
        <a href="https://www.Linkedin.com/in/colelamers">Linkedin</a>
        <a href="https://www.colespottery.com">My pottery</a>
      </header>
    </div>
  );
}

export default ColeTest;
