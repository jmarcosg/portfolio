const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-400">
      <small className="mb-2 block text-xs">&copy; {currentYear} jmarcosg. All rights reserved.</small>
      <p className="text-xs">
        <span className="font-semibold">Built with ❤️</span>
      </p>
    </footer>
  );
};

export default Footer;
