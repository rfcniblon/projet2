import React from 'react';
import './Teams.css';
import '../fonts/fonts.css';
import { 
  Card,
  Button,
 } from 'react-bootstrap';

function Team() {
  return (
    
    <div className="team_css dsk-12 tab-12 mob-12">
      <div className="card_1 test12  offset-2 dsk-4 tab-12 mob-12">
        <Card style={{ width: '18rem' }}>
          <Card.Img className="img_user" variant="top" src="https://image.noelshack.com/fichiers/2019/45/5/1573200405-ed0dacf6966b016b7c56131610f79f34-compressor-2-1.jpg" />
          <Card.Body>
            <Card.Title className="fonction_entreprise titre_article">Max la menace</Card.Title>
            <Card.Text className="text_descriptif text_article">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button className="fonction text_article" variant="primary">Director </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="card_2 test dsk-4 tab-12 mob-12 ">
        <Card style={{ width: '18rem' }}>
          <Card.Img className="img_user" variant="top" src="./img/NicolasLeGrand.png" />
          <Card.Body>
            <Card.Title className="fonction_entreprise titre_article" >Dark vador</Card.Title>
            <Card.Text className="text_descriptif text_article" >
              I be back :) blabla bla bla blabla
              lorem dragon blabla
              essai tester fdfdfds.
    </Card.Text>
            <Button className="fonction text_article" variant="primary">Developpeur</Button>
          </Card.Body >
        </Card>
      </div>
      <div className="card_3 test dsk-4 tab-12 mob-12 ">
        <Card style={{ width: '18rem' }}>
          <Card.Img className="img_user" variant="top" src="./img/XavierGT.jpg" />
          <Card.Body>
            <Card.Title className="fonction_entreprise titre_article" >Petit Padawan</Card.Title>
            <Card.Text className="text_descriptif text_article" >
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button className="fonction text_article" variant="primary">Apprentice Trainer</Button>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}

export default Team;