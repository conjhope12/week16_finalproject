import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Cardsss() {
  return (
    <CardGroup>
      <Card className='cardsss-section'>
        <Card.Img className="cardsss-img" variant="top" src="https://lumiere-a.akamaihd.net/v1/images/who-is-ahsoka-tano-article-feature_60dc019d.jpeg?region=200,0,1200,900" 
        width="50" />
        <Card.Body>
          <Card.Title>Chaotic Good</Card.Title>
          <Card.Text>
            The Ahsoka series is seriously one of the best things Star Wars has released in a longggggg time.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='cardsss-section'>
        <Card.Img className="cardsss-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18KOGGUNuUCKmkCnY5VXXcuCjgfa-eXgGbg&usqp=CAU" 
        width="50" />
        <Card.Body>
          <Card.Title>Chaotic Neutral</Card.Title>
          <Card.Text>
            You remeber this guy? 
            Do you believe that this guy a silly goose?{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Updated 1,000 years ago</small>
        </Card.Footer>
      </Card>
      <Card className='cardsss-section'>
        <Card.Img className="cardsss-img" variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F06%2F11%2FEwok.jpg" 
        width="50" />
        <Card.Body>
          <Card.Title>Chaotic Evil</Card.Title>
          <Card.Text>
            If there had to be a face value that defines evil... I belive this would do perfectly. 
            These creatures give me nightmares, and they make my skin crawl.
            Don't even get me started on the amount of war crimes this guy committed too.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Updated 3 decades ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

