import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';

export default function ListOfDecks() {
  return (
    <section className="bg-gray-200">
      <Container>
        <Button mt="block mx-auto mt-3" type="button">
          Добавить колоду
        </Button>
      </Container>
    </section>
  );
}
