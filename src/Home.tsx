import Search from './components/Search';
import Projects from './components/Projects';
import OtherComponent from './components/OtherComponent';
import Profile from './components/Feature';
import Navbar from './components/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <Search />
            <Projects />
            <OtherComponent />
            <Profile />
        </div>
    );
}

export default Home;
