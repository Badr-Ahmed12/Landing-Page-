import Card from './ui/Card';
import Button from './ui/Button';

interface Plan {
  id: number;
  title: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

function Plans() {
  const plans: Plan[] = [
    {
      id: 1,
      title: "Basic Plan",
      description: "Ideal for individuals starting out. Includes basic features.",
      features: ["5 projects", "Basic analytics", "Community support"],
      isPopular: false,
    },
    {
      id: 2,
      title: "Pro Plan",
      description: "Perfect for professionals who need more tools and analytics.",
      features: ["50 projects", "Advanced analytics", "Priority support"],
      isPopular: true,
    },
    {
      id: 3,
      title: "Enterprise Plan",
      description: "Designed for large teams and enterprises with advanced features.",
      features: ["Unlimited projects", "Custom analytics", "24/7 dedicated support"],
      isPopular: false,
    },
  ];

  const handleChoosePlan = (planId: number): void => {
    alert(`You chose Plan ${planId}`);
  };

  return (
    <section id="team" className="bg-gradient-to-b from-gray-50 to-gray-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 ${
                plan.isPopular ? "border-2 border-amber-500" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                  Most Popular
                </span>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="list-disc px-5 py-5 space-y-2 text-gray-700">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-4"
                  onClick={() => handleChoosePlan(plan.id)}
                >
                  Choose Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;

