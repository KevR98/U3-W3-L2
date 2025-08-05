import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleArticle from './SingleArticle';
import Articoli, { ApiArticoli } from '../types/Articoli';

// tutte le costanti che mi servono
const URL = 'https://api.spaceflightnewsapi.net/v4/articles';

function Home() {
  const [article, setArticle] = useState<Articoli[]>([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Errore nella chiamata');
        }
      })

      .then((art: ApiArticoli) => {
        console.log(art);
        setArticle(art.results);
      })

      .catch((err) => {
        console.log('Errore nella chiamata', err);
      });
  };

  return (
    <Container>
      <Row>
        <h2 className='text-center my-4'>Articoli Spaziali</h2>
      </Row>
      <Row>
        {article.map((a) => {
          return <SingleArticle key={a.id} articleToShow={a} />;
        })}
      </Row>
    </Container>
  );
}

export default Home;
