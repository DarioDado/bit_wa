const  dpQuoteList = [
    "Ja sam njoj dao zivot na srebrnom pladnju...",
    "Ti to meni namerno radis...",
    "Lisice, lisice, ti maleni zecu, ko je pojeo kupus?",
    "e baba, baba, bas si lucprda"
]


const Header = (props) => {
    return (
        <header>
            <h2 >Saoroma Dado Dado </h2>
        </header>
    )
}

const QuoteItem = props =>  <li>{props.title}</li>

const QuoteList = props => {
    return (
        <ul className="quote-list">
            {props.data.map(quote => {
                return <QuoteItem title={quote} />
            })}
        </ul>
    )
}

const Content = (props) => {
    return (
        <main>
            <h1>Zorz Papadubi:</h1>
            <QuoteList data= {dpQuoteList} />
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
            <Content />
            <Footer />
        </div>
    )
}

const root = document.querySelector(".root");

ReactDOM.render(<App />, root);