const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col items-center md:justify-between space-y-6 max-w-5xl mx-auto py-16">
      <div className="md:w-1/2">
        <div>
        <h1 className="uppercase text-3xl mb-4">MNTN</h1>
          <p className="font-bold">
            Get out there & discover your next <br /> slope, mountain & destination!
          </p>
        </div>
        <p className="mt-16 text-gray-500">Copyright 2019 MNTN, Inc. Terms & Privacy</p>
      </div>
      <div className="flex md:flex-row flex-col md:justify-around justify-center space-y-4 md:space-y-0 w-1/2">
        <div className="font-bold">
          <p className="text-yellow-900 text-xl mb-4">More on The Blog</p>
          <ul className="flex flex-col space-y-4">
            <li>About MNTN</li>
            <li>Contributors & Writers</li>
            <li>Write For Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="font-bold">
          <p className="text-yellow-900 text-xl mb-4">More on MNTN</p>
          <ul className="flex flex-col space-y-4">
            <li>The Team</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
