import { Button, Card, Heading } from '../../../../components';
// import { FoodCard } from '../FoodCard/FoodCard';
import greekSalad from '../../../../assets/Greek-Salad-Recipe-recipe-card.jpg';
import bruschetta from '../../../../assets/bruschetta2.jpg';
import lemonDessert from '../../../../assets/lemon-tiramisu.jpg';
import motorcyclePng from '../../../../assets/motorcycle.png';
import './Specials.css';

const imageMap = {
  'Greek Salad': greekSalad,
  'Bruschetta': bruschetta,
  'Lemon Dessert': lemonDessert,
};

export const Specials = ({ data, itemWidth }) => {
  return (
    <section id="specials" className="LL-Specials">
      <section className="specials-titlebar">
        <Heading size="lg">Specials</Heading>
        <Button>Online Menu</Button>
      </section>

      <section id="LL-Section-SpecialItems">
        {data.map(({ id, title, price, description, image }) => (
          <Card key={id} title={title} width={itemWidth} image={imageMap[title] || image}>
            <div className="LL-CardHeader card-variant-food">
              <Heading tag="h3" size="m" className="food-title">
                {title}
              </Heading>
              <p className="food-price">${price}</p>
            </div>
            <div className="food-desc">{description}</div>

            <div className="card-footer LL-OrderButton">
              <Button class="btn-order" outline>
                Order a delivery
                <img src={motorcyclePng} alt="Delivery motorcycle" className="delivery-icon" />
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
};
