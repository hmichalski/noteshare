import Carousel from "../Carousel/Carousel";

function Home() {
    return (
        <>
            <h3>Goal</h3>
            <p>
                The goal of this project was to create <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a> type web application,
                using the technologies learned during the semester, with a client-side interface in the form of a <a href="https://en.wikipedia.org/wiki/Single-page_application">SPA.</a>
            </p>
            <h3>Requirements</h3>
            <p>
                Requirement file is included in the project's repository, the most crucial ones being:
            </p>
            <ul>
              <li>At least 3 connected database tables, including one with many-to-many relationship</li>
              <li>At least 2 columns in each table, apart from the primary key, with 3 different column types</li>
              <li>No use of scaffolding generators</li>
              <li>Data validation on both the client and server sides</li>
              <li>Including a script to create the database and populate it with sample data</li>
              <li>Registration and login module with the necessary database tables</li>
              <li>Different functionalities depending on the user's status, e.g., logged in, guest</li>
              <li>Pagination for displayed lists</li>
              <li>Internationalization (at least 2 languages)</li>
            </ul>
            <h3>Tech used</h3>
            <Carousel />
        </>
    );
}

export default Home;
