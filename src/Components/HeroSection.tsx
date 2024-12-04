import Button from './ui/Button';

function HeroSection() {
  return (
    <section
      id="home"
      className="mt-8 container mx-auto relative bg-gradient-to-r from-amber-200 to-orange-200 text-gray-800 py-16 rounded-xl shadow-lg flex flex-col items-center"
    >
      <h1 className="text-5xl font-extrabold text-center">Welcome to Our Website</h1>
      <p className="text-lg mt-4 max-w-lg text-center">
        Your gateway to modern web experiences and powerful tools.
      </p>
      <Button className="mt-8">Get Started</Button>
    </section>
  );
}

export default HeroSection;

