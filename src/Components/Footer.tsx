function Footer() {
  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          {socialLinks.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-white transition duration-300"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

