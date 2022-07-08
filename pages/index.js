import { TYPE_HOME } from '../Features/Home/reducer/actions';
import Home from '../Features/Home/screen';
import { wrapper } from '../store';

export default function HomePage() {
  console.log('page home');
  return <Home />;
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(TYPE_HOME.getAllProducts());
  }
);
