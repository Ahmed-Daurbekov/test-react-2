import './App.scss';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Section from './Pages/Section';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
            </header>
            <section className='App-section'>
                <Section />
            </section>
            <footer className='App-footer'>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
