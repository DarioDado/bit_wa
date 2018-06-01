const Header = (props) => {
    return (
        <header>
            <h2 >Saoroma Dado Dado </h2>
        </header>
    )
}

const Content = (props) => {
    return (
        <main>
            <h1>{props.title}</h1>
        </main>
    )
}

const Footer = (props) => {
    return (
        <footer>
            <h2>Saoroma Bobane!</h2>
        </footer>
    )
}

const App = (props) => {
    return (
        <div >
            <Header />
            <Content title = "jo jo jo jo jo, vid debelog Savu..." />
            <Footer />
        </div>
    )
}

const root = document.querySelector(".root");

ReactDOM.render(<App />, root);