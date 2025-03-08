


const Footer = () => {
  return (
    <footer className="bg-green-600 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Website Name & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex items-center space-x-2">
            <img
              className="size-12"
              src="https://i.postimg.cc/fRqK9rBS/sports.png"
              alt="Sports Logo"
            />
            <h2 className="text-2xl font-bold">Style</h2>
          </div>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} SportsStyle. All rights reserved.
          </p>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">📧 Email: support@style.com</p>
          <p className="text-sm">📞 Phone: +880 1234 567 890</p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold text-center">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-blue-500 hover:text-blue-400 text-xl">
              <img
                className="w-8 h-8"
                src="https://i.imghippo.com/files/hY3593kDA.png"
                alt="Facebook"
              />
            </a>
            <a href="#" className="text-sky-400 hover:text-sky-300 text-xl">
              <img
                className="w-8 h-8"
                src="https://i.imghippo.com/files/jGBl4586Thk.png"
                alt="Twitter"
              />
            </a>
      
            <a href="#" className="text-blue-600 hover:text-blue-500 text-xl">
              <img
                className="w-8 h-8"
                src="https://i.imghippo.com/files/sZOQ1882As.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
