import Card from './ui/Card';
import Button from './ui/Button';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
}

function ContactCards() {
  const teamMembers: TeamMember[] = [
    { id: "1", name: "John Doe", title: "UI/UX Designer", image: "https://via.placeholder.com/128" },
    { id: "2", name: "Jane Doe", title: "Software Engineer", image: "https://via.placeholder.com/128" },
    { id: "3", name: "Bob Smith", title: "Product Manager", image: "https://via.placeholder.com/128" },
    { id: "4", name: "Alice Smith", title: "Full-Stack Developer", image: "https://via.placeholder.com/128" },
  ];

  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map(({ id, name, title, image }) => (
          <Card key={id} className="flex flex-col items-center p-8 hover:shadow-amber-500/50 hover:shadow-lg transition duration-300">
            <img className="h-32 w-32 rounded-full object-cover" src={image} alt={name} />
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-gray-600 text-sm">{title}</p>
              <Button className="mt-4">
                Contact
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ContactCards;

