import { CardSession } from './style';
import puppyDogs from '../../json/puppy/puppy.json';

export function CardDogsInformation() {
  return (
    <section aria-label="card sobre os cachorros disponivel para venda">
      {puppyDogs.map((dogsInformation, index) => (
        <CardSession key={index}>
          <h2>{dogsInformation.name}</h2>
          <img src={dogsInformation.photo} alt={dogsInformation.name} />
          <p>{dogsInformation.description}</p>
        </CardSession>
      ))}
    </section>
  );
}
