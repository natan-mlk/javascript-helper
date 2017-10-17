import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <p className="hello">Cześć, dziękuję, że tu zaglądasz :)</p>
            <p>Ta mała aplikacja służy jedynie do <span className="emph"> zaprezentowania</span> mojej umiejętności obsługi
                React.js w zakresie <span className="emph">NIE obejmującym Redux. </span><br/>
                Została przeze mnie zrobiona <span className="emph">samodzielnie</span>,
                bez konsultacji z kimkolwiek, według <span className="emph">mojego pomysłu</span>.</p>

            <p className="comment">Na pewno możnaby to napisać o wiele lepiej, jednak jest to tym, co osiągnąłem myśleniem
                i kombinowaniem na miarę moich możliwości, bez doświadczenia komercyjnego w React.</p>

            <p className="comment">
                Ponieważ to tylko prezentacja funkcjonowania biblioteki React.js, aplikacja:
            </p>
            <ul className="comment">
                <li>nie jest specjalnie śliczna ;P</li>
                <li>nie jest dostosowana do urządzeń mobilnych</li>
            </ul>

            <p className="go-to-code">Kod projektu znajduje się tu<br/>
                <a href="https://github.com/natan-mlk/javascript-helper" target="_blank">
                    github.com/natan-mlk/javascript-helper</a>
            </p>
        </div>
    )
};

export default Home