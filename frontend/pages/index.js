// We don't have to import react here because next is importing it 
// for us
import Link from 'next/link';

const Home = () => (
  <>
    <p>Hallo</p>
    <Link href="/sell">
      <a>go to sell</a>
    </Link>
  </>
);

export default Home;