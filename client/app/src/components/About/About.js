import Carousel from "../Carousel/Carousel";

function About() {
    return (
        <>
            <h3>Cel</h3>
            <p>
                  Celem zadania było stworzenie aplikacji internetowej typu <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a>
                  &nbsp;wykorzystując technologie poznane w trakcie semestru, z częścią kliencką w formacie <a href="https://en.wikipedia.org/wiki/Single-page_application">SPA.</a>
            </p>
            <h3>Wymagania</h3>
            <p>
                  Właściwy plik z wymaganiami dołączony w repozytorium projektu, najważniejsze z nich:
            </p>
            <ul>
              <li>Co najmniej 3 połączone tabele bazy danych, w tym jedna asocjacyjna wiele do wielu</li>
              <li>Co najmniej 2 kolumny w każdej tabeli oprócz klucza podstawowego, 3 różne typy kolumn</li>
              <li>Zakaz używania generatorów typu scaffold</li>
              <li>Walidacja danych po stronie klienta i serwera</li>
              <li>Dołączenie skryptu tworzącego bazę danych i wypełniającą ją przykładowymi danymi</li>
              <li>Moduł rejestracji i logowania, z niezbędnymi tabelami bazy danych</li>
              <li>Różne funkcjonalności zależne od statusu użytkownika, np. zalogowany, gość</li>
              <li>Paginacja wyświetlanych list</li>
              <li>Umiędzynarodowienie (co najmniej 2 języki)</li>
            </ul>
            <h3>Użyte technologie</h3>
            <Carousel/>
        </>
    );
}
  
export default About;