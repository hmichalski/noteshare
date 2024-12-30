function Home() {
    return (
        <>
            <h4>Celem zadania było stworzenie aplikacji webowej składającej się z:</h4>
            <ol type="a">
                <li>Interfejsu REST API opartego o Express.js</li>
                <li>Aplikacji React korzystającej z routera z pakietu <code>react-router-dom</code></li>
            </ol>
            <h4>ze szczegółowymi wymaganiami:</h4>
            <ul>
              <li>
                    Aplikacja React powinna zawierać: komponent listy obiektów i elementu listy. 
              </li>
              <li>
                    Komponent listy powinien odwzorowywać stan listy otrzymanej z backend'u w postaci JSON.
              </li>
              <li>
                    Komponent listy powinien pozwalać na dodanie nowego elementu.
              </li>
              <li>
                    Dodawanie nowego elementu do listy powinno być walidowane, przy formularzu powinny wyświetlać się odpowiednie formatki z ostrzeżeniami.
              </li>
              <li>
                    Komponent elementu listy powinien zawierać kontrolkę pozwalającą na jego usunięcie.
              </li>
              <li>
                    Router powinien obsłużyć wyświetlanie trzech różnych komponentów zależnie od wybieranych adresów.
                    Co najmniej jeden z tych komponentów powinien wykorzystywać w swoim renderingu wartość atrybutu przekazywanego
                    jako część URL. Router powinien również wyświetlać stronę 404 dla nierozpoznanego adresu URL.
              </li>
            </ul>
        </>
    );
}
  
export default Home;