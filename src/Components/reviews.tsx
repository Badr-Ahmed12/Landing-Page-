import Card from './ui/Card';

function Reviews() {
  const reviews = [
    { name: "Jay Johnson", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna a purus tincidunt tincidunt." },
    { name: "Vanessa Smith", review: "Phasellus non est vel felis semper aliquet. Donec id ipsum et felis consectetur efficitur." },
    { name: "Robert Brown", review: "Ut vel felis id mauris finibus consectetur. Donec vel turpis et neque condimentum semper." },
  ];

  return (
    <section id="about" className="container mx-auto mb-10 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Client Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map(({ name, review }) => (
          <Card key={name} className="text-center">
            <div className="p-8">
              <h3 className="text-lg font-bold mb-2">{name}</h3>
              <p className="text-gray-600 text-sm">{review}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Reviews;

