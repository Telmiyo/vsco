import { useNavigate } from 'react-router-dom';
import Book from '../components/book/Book';
import logo from '../../../../../assets/icon.png';
import '../../../styles/type-animation.css';

const quote = `"The silence often of pure innocence persuades when speaking fails."
— William Shakespeare, The Winter's Tale`;

function Home() {
  const navigate = useNavigate();

  function createBook() {
    window.electron.ipcRenderer.once('save-book', () => {
      // TODO: fix navigation routing backwards
      navigate('../../editor/');
    });
    window.electron.ipcRenderer.sendMessage(
      'save-book',
      'example.txt',
      'This is the content of the file now.',
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-8 ">
        <div className="w-fit flex flex-col items-center ">
          <img src={logo} alt="logo" className="w-28" />
          {/* Typewriting effect on the heading */}
          <div className="typewriter w-fit">
            <h2 className="w-fit">What are you going to read today?</h2>
          </div>
          {/* Quote Block */}
          <div className="">
            <blockquote className="text-sm mt-4 text-center">
              {quote}
            </blockquote>
          </div>
          <button
            type="button"
            className="dashboard-button-primary mt-8"
            onClick={createBook}
          >
            open book
          </button>
        </div>
      </div>
      {/* User Home */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-fit grid grid-cols-4 gap-8">
          <Book coverColor="jasper" />
          <Book coverColor="bronze" />
          <Book coverColor="satinSheenGold" />
          <Book coverColor="glaucous" />
        </div>
      </div>
    </div>
  );
}

export default Home;
