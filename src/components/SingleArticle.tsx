import { Col, Card, Button, Badge } from 'react-bootstrap';
import Articoli from '../types/Articoli';

interface SingleArticleProps {
  articleToShow: Articoli;
}

const SingleArticle = ({ articleToShow }: SingleArticleProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  return (
    <Col xs={12} md={6} lg={4} className='mb-4'>
      <Card
        className='h-100 shadow-sm border-0 hover-card'
        style={{ transition: 'transform 0.2s' }}
      >
        <div
          style={{ position: 'relative', overflow: 'hidden', height: '200px' }}
        >
          <Card.Img
            variant='top'
            src={articleToShow.image_url}
            style={{
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
          <Badge
            bg='primary'
            className='position-absolute top-0 end-0 m-2'
            style={{ fontSize: '0.75rem' }}
          >
            {articleToShow.news_site}
          </Badge>
        </div>

        <Card.Body className='d-flex flex-column'>
          <Card.Title
            className='fw-bold text-dark mb-3'
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.3',
              minHeight: '2.6rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {articleToShow.title}
          </Card.Title>

          <Card.Text
            className='text-muted flex-grow-1'
            style={{
              fontSize: '0.9rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {articleToShow.summary}
          </Card.Text>

          <div className='mt-auto'>
            <div className='d-flex justify-content-between align-items-center'>
              <small className='text-muted'>
                <i className='bi bi-calendar3 me-1'></i>
                {formatDate(articleToShow.published_at)}
              </small>
              <Button
                variant='outline-primary'
                size='sm'
                href={articleToShow.image_url}
                target='_blank'
                className='px-3'
              >
                Leggi di più
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleArticle;
