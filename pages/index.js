import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  const content = [
    {
      id: 1,
      tinyTitle: 'Get Started',
      title: "What level of hiker are you?",
      description: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
      img: '/images/01.jpg',
    },
    {
      id: 2,
      tinyTitle: 'Hiking Essentials',
      title: "Picking the right Hiking Gear!",
      description: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
      img: '/images/02.jpg',
    },
    {
      id: 3,
      tinyTitle: 'where you go is the key',
      title: "Understand Your Map & Timing",
      description: "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction...",
      img: '/images/03.jpg',
    },

  ]
  return (
    <div className="bg-gray-900 bg-hero bg-no-repeat ">
      <Header/>
      <main className="flex flex-col space-y-32">
        {
          content.map((content, index) => <Content key={content.id} content={content} index={index}/>)
        } 
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;