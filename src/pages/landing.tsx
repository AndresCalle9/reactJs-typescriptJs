import NavBar from '../components/NavBar/NavBar';
import '../styles/landing.scss';
import BubbleHeader from '../components/BubbleHeader/BubbleHeader';
import images from '../utils/images';
import ProductCard from '../components/ProductCard/ProductCard';

const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className='container-fluid' id='app'>
        <div className='container text-center' id='banner'>
          Aprovecha los meses sin intereses. Compra tus productos Apple
          favoritos y elige uno de nuestros socios de pagos a meses para escoger
          el periodo de
          <br /> pago que prefieras. &nbsp;
          <a
            className='text-primary'
            href='https://www.apple.com/mx/shop/browse/finance/installment'
          >
            Más información <i className='bi bi-chevron-right'></i>
          </a>
        </div>
        <div className='row' id='header-section'>
          <div className='col-md-7'>
            <span className='header'>Tienda</span>
            <span className='sub-header'>
              . La mejor forma de
              <br /> comprar tus productos
              <br /> favoritos.
            </span>
          </div>
          <div className='col-md-5'>
            <BubbleHeader
              title={'¿Necesitas Ayuda?'}
              subtitle={'Habla con un especialista'}
              url={'https://contactretail.apple.com/Solutions'}
              image={images.chat}
              arrow={false}
            />
            <BubbleHeader
              title={'Visita un Apple Store'}
              subtitle={'Encuentra uno cerca de ti'}
              url={'https://www.apple.com/mx/retail/'}
              image={images.message}
              arrow={true}
            />
          </div>
        </div>
        <div id='cards-container'>
          <div className='info'>
            {<ProductCard url={images.mac} title='Mac' />}
            {<ProductCard url={images.iphone} title='iPhone' />}
            {<ProductCard url={images.ipad} title='iPad' />}
            {<ProductCard url={images.watch} title='Apple Watch' />}
            {<ProductCard url={images.airpods} title='Airpods' />}
            {<ProductCard url={images.airtag} title='AirTag' />}
            {<ProductCard url={images.appleTv} title='AppleTv' />}
            {<ProductCard url={images.homepod} title='HomePod' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
