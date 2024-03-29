import { logo } from '../assets';
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center  mb-10 w-full">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open('https://github.com/endabelyu')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text ">
        Summarizr Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Sumize, an open-souce article summarizer that
        transforms lengthy article into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
