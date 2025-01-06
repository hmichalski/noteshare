import Carousel from "../Carousel/Carousel";

function About() {
    return (
        <>
            <h3>Cel</h3>
            <p>
                  Celem zadania było stworzenie aplikacji internetowej typu <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a>
                  &nbsp;wykorzystując do tego technologie poznane w trakcie semestru, z częścią kliencką w formacie <a href="https://en.wikipedia.org/wiki/Single-page_application">SPA.</a>
            </p>
            <h3>Wymagania</h3>
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
            <h3>Technologie</h3>
            <Carousel/>
        </>
    );
}
  
export default About;