import React from 'react';
import  Link  from 'next/link';
import { VscGithub } from 'react-icons/vsc';
import { TiSocialLinkedinCircular, TiSocialDribbble } from 'react-icons/ti';

function Footer() {
    return(
        <main>
<footer className="page-footer font-small unique-color-dark">

  <div >
    <div className="container">

      <div className="row py-4 d-flex align-items-center">

        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Mantengase conectado por nuestras redes sociales!</h6>
        </div>
        <div className="col-md-6 col-lg-7 text-center text-md-right" style={{ display: 'flex',
    justifyContent: 'space-evenly'}}>

          <Link href="https://github.com/rapric2115" className="fb-ic" >
            <VscGithub style={{fontSize: '2rem'}}/>
          </Link>
          <Link href="https://www.linkedin.com/in/raprichardson" className="tw-ic" >
            <TiSocialLinkedinCircular style={{fontSize: '2rem'}}/>
          </Link>
          <Link href="https://dribbble.com/raphaelric" className="gplus-ic" >
            <TiSocialDribbble style={{fontSize: '2rem'}} />
          </Link>
         
          <Link href="https://sourcerer.io/rapric2115" className="ins-ic" >
            Sourcerer
          </Link>

        </div>
      

      </div>
    

    </div>
  </div>

  <div className="container text-center text-md-left mt-5">

    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">RICHBAR DESIGN</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>Somos una empresa dedicada al servicio de diseño y desarrollo de paginas webs, aplicaciones
          mobiles, marketing digital y posicionamiento SEO.
        </p>

      </div>
     
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">Productos</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        
          <p>
        <Link href="#">Diseño Web</Link>
          </p>
          <p>    
        <Link href='#'>
          Programación Web
        </Link>
          </p>
          <p>
        <Link href="#">Marketing digital</Link>
          </p>
          <p>
        <Link href="#">Posicionamiento web SEO</Link>
          </p>
        
      </div>
     
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold">Richbar Design programas</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
          <Link href="#!">Registrarse</Link>
        </p>
        <p>
          <Link href="#!">Registrate como Escritor</Link>
        </p>
        <p>
          <Link href="#!">Trabajos</Link>
        </p>
        <p>
          <Link href="#!">Trabaja con Nosotros</Link>
        </p>

      </div>
      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <h6 className="text-uppercase font-weight-bold">Contacto</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}  />
        
        <p>
          <i className="fas fa-envelope mr-3"></i> info-design@richbargs.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i> + 849 409 68 92</p>
        

      </div>
     

    </div>
   

  </div>
  

  
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <Link href="https://richbargs.com/"> Richbar General Solutions</Link>
  </div>
 

</footer>
          
        </main>
    )
}

export default Footer;