import { CardSession } from './style';

const dogsInformation = [
  {
    photo: '/img/yorkshire.png',
    name: 'Yorkshire',
    description:
      'Descubra a magia do Yorkshire! Pequeno, elegante e encantador, este cãozinho de pelagem longa é uma joia para qualquer família. Sua personalidade extrovertida e lealdade cativam corações.',
    price: 'R$ 2.000,00',
  },
  {
    photo: '/img/shih_tzu.png',
    name: 'Shih-Tzu',
    description:
      'Descubra a ternura do Shih-Tzu! Pequeno, charmoso e apaixonante, esse cãozinho de pelagem luxuosa é uma verdadeira preciosidade. Com uma personalidade afetuosa e dócil, é o companheiro perfeito para todas as idades.',
    price: 'R$ 2.000,00',
  },
  {
    photo: '/img/spitz_alemão.png',
    name: 'Spitz Alemão',
    description:
      'Explore a elegância do Spitz Alemão! Encantador, gracioso e cheio de vida, esse cãozinho de pelagem exuberante é uma verdadeira beleza. Com sua personalidade animada e leal, conquista corações por onde passa.',
    price: 'R$ 2.000,00',
  },
  {
    photo: '/img/pug.png',
    name: 'Pug',
    description:
      'Conheça a fofura do Pug! Pequeno, carismático e adorável, esse cãozinho de olhos brilhantes é um verdadeiro encanto. Com seu temperamento afetuoso e leal, torna-se o melhor amigo de qualquer pessoa.',
    price: 'R$ 2.000,00',
  },
  {
    photo: '/img/maltes.png',
    name: 'Maltês',
    description:
      'Conheça a doçura do Maltês! Pequeno, elegante e carinhoso, esse cãozinho de pelagem branca e sedosa é uma verdadeira preciosidade. Com sua personalidade gentil e leal, conquista corações com facilidade.',
    price: 'R$ 2.000,00',
  },
  {
    photo: '/img/biewer_terrier.png',
    name: 'Biewer Terrier',
    description:
      'Explore a elegância do Biewer Terrier! Pequeno, gracioso e cheio de charme, esse cãozinho de pelagem única é uma verdadeira joia rara. Com sua personalidade alegre e amigável, encanta a todos ao seu redor.',
    price: 'R$ 2.000,00',
  },
];

export function CardDogsInformation() {
  return (
    <section aria-label="card sobre os cachorros disponivel para venda">
      {dogsInformation.map((dogsInformation, index) => (
        <CardSession key={index}>
          <h2>{dogsInformation.name}</h2>
          <img src={dogsInformation.photo} alt={dogsInformation.name} />
          <p>{dogsInformation.description}</p>
          <div>
            <h3>{dogsInformation.price}</h3>
          </div>
        </CardSession>
      ))}
    </section>
  );
}
