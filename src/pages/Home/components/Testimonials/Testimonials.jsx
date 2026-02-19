import { Card, Heading, ReviewStar } from '../../../../components';
import person1 from '../../../../assets/person1.png';
import person2 from '../../../../assets/person2.jpg';
import profile3 from '../../../../assets/profile3.png';
import person4 from '../../../../assets/person4.jpg';
import './Testimonials.css';

const imageMap = {
  'O. Stanley': person1,
  'Suze Anna': person2,
  'Will John': profile3,
  'D. Mark': person4,
};

export const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="LL-Testimonials">
      <Heading size="xl" align="center">
        What our customers say!
      </Heading>
      <section className="LL-Testimonials-Carousel">
        {data.map(({ id, rating, name, review, image }) => (
          <Card
            key={`testimonial-card-${name.trim()}-${id}`}
            title={`Testimonial by ${name}`}
            imagePosition="left"
            image={imageMap[name] || image}
          >
            <Heading tag="h3" size="base" className="LL-Testimonial-Name">
              {name}
            </Heading>
            <div className="LL-Testimonial-Rating flex">
              {Array.from(
                { length: Math.round(Math.abs(Number(rating))) },
                (v, i) => (
                  <ReviewStar key={`reviewstar-${name.trim()}-${i}`} />
                )
              )}
            </div>
            <p className="LL-Testimonial-Review">{review}</p>
          </Card>
        ))}
      </section>
    </section>
  );
};
