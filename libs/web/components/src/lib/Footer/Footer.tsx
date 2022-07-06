import '../index.css';
/* eslint-disable-next-line */

export function Footer() {
  return (
    <div className="static bottom-0 left-0 w-full ">
      <div className="flex items-center h-24 bg-primaryDark md:h-36 justify-around ">
        <div>
          <h1 className="text-2xl">GoShule</h1>
          <p className="text-md">Caption here...</p>
        </div>

        <div>
          <h1>Follow us on Social Media</h1>
          <div className="flex justify-between text-2xl">
            <h1
              className="cursor-pointer"
              onClick={() => window.open('https://www.facebook.com/goshule')}
            >
              F
            </h1>
            <h1
              className="cursor-pointer"
              onClick={() => window.open('https://www.instagram.com/go_shule/')}
            >
              IG
            </h1>
            <h1>In</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
