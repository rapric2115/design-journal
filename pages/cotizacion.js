import React, { Component } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import {Form} from 'react-bootstrap';
import AnimatedNumber from 'animated-number-react';
 //importing react icons
 import { 
    FiMinusCircle,
    FiPlusCircle
} from 'react-icons/fi';
import '../styles/cotizacion.module.css';


class Cotizar extends Component {
    constructor() {
        super()
        this.state = {
            tipoCotizacion: '',
            tipoWebsite: '',
            price: 0,
            sections: 0,
            idioms: 0,
            OnsiteSeo: false,
            products: 0,
            showForm: false
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleTipoWebsite = this.handleTipoWebsite.bind(this);
        this.handleOnSitePage = this.handleOnSitePage.bind(this);
        this.handleSEOInfo = this.handleSEOInfo.bind(this);
    }

    handleSelect(e) {
        this.setState({
            tipoCotizacion: e.target.value,
            tipoWebsite: '',
            price: 0,
            sections: 0,
            idioms: 0,
            OnsiteSeo: false,
            products: 0,
            showForm: false,
            urlDominio: '',
            TipoMercado: '',
            keywords: ''
        })
        if(e.target.value === 'SEOptimization' ) {
            this.setState({
                price: 6500
            })
        }
    }

    handleTipoWebsite(e) {
        this.setState({
            tipoWebsite: e.target.value
        })
        
        if (e.target.value === 'websiteDinamicas') {
            this.setState({
                price: 31900,
                showForm: true
            })
        } else if (e.target.value === 'Tienda Online') {
            this.setState({
                price: 66700,
                showForm: true
            })
        } else if (e.target.value === 'Web Informativa') {
            this.setState({
                price: 15000,
                showForm: true
            })
        } else if (e.target.value === 'blog') {
            this.setState({
                price: 25000,
                showForm: true
            })
        }
    }

    handleOnSitePage(e) {
        this.setState({
            OnsiteSeo: !this.state.OnsiteSeo
        })
        if(this.state.OnsiteSeo === false ) {
            this.setState({
                price: this.state.price + 43500
            })
        } else {
            this.setState({
                price: this.state.price - 43500
            })
        }
    }

    handleSEOInfo(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }


    render() {
        return(
            <Layout>
                <Head>
                    <title>Cotizacion | Designiumpartner</title>
                </Head>
                <main>
                    <h1>Cotizacion</h1>
                    <p>Todos Nuestros websites estan codificados con <Link href="https://www.angular.io">Angular js </Link> 
                    framework desarrollado por Google o <Link href="reactjs.org">React js </Link> 
                    framework desarrollado por Facebook, HTML 5, CSS3 y Typescript. Para base de datos 
                    utilizamos <Link href="https://firebase.google.com/">Firebase </Link> desarrollado tambien por Google.</p>
                    <div>Todos los trabajos de Codificación incluyen
                        <ul>
                            <li>1 (un) dominio</li>
                            <li>1 (un) año de hosting</li>
                            <li>Certificado SSL gratis por 3 meses</li>
                            <li>Inclusión de Google Analytics</li>
                            <li>Diseño adaptable a todos los dispositivos</li>
                            <li>Publicidad de 3000 impresiones en Google</li>
                            <li>Formulario de Contacto</li>
                        </ul>
                    </div>                    
                         {/* making visible the price */}
                        {this.state.price !== 0  ? (
                            <h6 className="card-price text-center" style={{fontSize: '2em', color: 'red', fontWeight: 700}}>RD$<AnimatedNumber value={this.state.price} formatValue={this.formatValue} /><span className="period"></span></h6> 
                            ):  null
                        }
                    
                    <Form>
                        <Form.Control size="sm" as="select" value={this.state.tipoCotizacion} onChange={this.handleSelect}>
                            <option value="value">Seleccione que desea Cotizar</option>
                            <option value="website">Website</option>
                            {/* <option value="App Movil">App Movil</option> */}
                            <option value="SEOptimization">Optimización SEO</option>
                            <option value="Digital Marketing">Marketing Digital</option>
                        </Form.Control>

                        {/* website form */}
                        {this.state.tipoCotizacion === "website" && 
                        <>
                            <Form.Label className="mt3">Que tipo de Página web desea Diseñar o Codificar</Form.Label>
                             <Form.Control size="sm" as="select" value={this.state.tipoWebsite} onChange={this.handleTipoWebsite}>
                             <option value='Seleccione'>Seleccine Tipo</option>
                             <option value="websiteDinamicas">Website Dinámicas</option>
                             <option value="Tienda Online">Tienda Online</option>
                             {/* <option value="Web Corporativa">Web Corporativa</option> */}
                             <option value="Web Informativa">Web Informativa</option>
                             <option value="blog">Blog</option>
                         </Form.Control>
                         </>
                        }
                        {this.state.showForm ? ( 
                        <>
                            <Form.Group>
                                <Form.Label>Cuantas Secciones</Form.Label>
                                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <FiMinusCircle onClick={() => this.setState({ sections: this.state.sections - 1, price: this.state.price - 3000 })}/> {' '} <span>{this.state.sections } </span>  {' '} <FiPlusCircle  onClick={() => this.setState({ sections: this.state.sections + 1, price: this.state.price + 3000 })}/>
                                </div>
                            </Form.Group>
                            {this.state.tipoWebsite === 'Tienda Online' && 
                            <Form.Group>
                                <Form.Label>Cantidad de Poductos</Form.Label>
                                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <FiMinusCircle onClick={() => this.setState({ products: this.state.products - 1, price: this.state.price - 550 })}/> {' '} <span>{this.state.products } </span>  {' '} <FiPlusCircle  onClick={() => this.setState({ products: this.state.products + 1, price: this.state.price + 550 })}/>
                                </div>
                            </Form.Group>                            
                            }
                            <Form.Group>
                                <Form.Label>Idiomas</Form.Label>
                                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <FiMinusCircle onClick={() => this.setState({ idioms: this.state.idioms - 1, price: (this.state.price / 1.2) })}/> {' '} <span>{this.state.idioms } </span>  {' '} <FiPlusCircle  onClick={() => this.setState({ idioms: this.state.idioms + 1, price: (this.state.price * 1.2) })}/>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>OnSite SEO</Form.Label>
                                <Form.Check 
                                    type='checkbox'
                                    id='default-checkbox'
                                    label={this.state.OnsiteSeo ? 'No, no deseo OnSite SEO' : 'Si deseo OnSite SEO'}
                                    onChange={this.handleOnSitePage}
                                    />
                            </Form.Group>
                            </>
                            ) : null
                        }
                            {this.state.tipoCotizacion === 'SEOptimization' && 
                            <>
                            <Form.Group>
                                <Form.Label>Nombre de Dominio o URL <span className="ejemplos">(ej: dominio.com)</span></Form.Label>
                                <Form.Control type="text"
                                 placeholder="http://www.dominio.com" 
                                 name="urlDominio"
                                 value={this.state.urlDominio}
                                 onChange={this.handleSEOInfo} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tipo Mercado</Form.Label>
                                <Form.Control type="text"
                                 placeholder="venta de Ropa, calzado, etc." 
                                 name="TipoMercado"
                                 value={this.state.TipoMercado}
                                 onChange={this.handleSEOInfo} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Palabras Claves o Keywords</Form.Label>
                                <Form.Control type="text"
                                 placeholder="venta de Ropa, calzado, etc." 
                                 name="keywords"
                                 value={this.state.keywords}
                                 onChange={this.handleSEOInfo} />
                            </Form.Group>
                            </>
                            }                       
                        
                    </Form>
                        { this.state.tipoWebsite === "websiteDinamicas" && 
                            <>
                            <h2 className='text-center'>Información del Producto</h2>
                            <p>Las Páginas web dinámicas son aquellas que la información presentada se genera a partir de una peticion
                                del usuario, contrario a lo que ocurre con las páginas estáticas, en el que la información no cambia con el 
                                tiempo. Este tipo de website requiere de base de datos para el manejo de la información, registro de usuarios,
                                etc.
                            </p>
                            </>
                        }
                        {this.state.tipoWebsite === 'Tienda Online' && 
                        <>
                         <h2 className='text-center'>Información del Producto</h2>
                        <p>Aumente las ventas de su negocio de forma digital, tiempo aproximado de codificación 
                            de 90 a 120 dias laborales esto incluye:</p>
                        <ul>
                            <li>3 categorias cada una con 5 productos</li>
                            <li>Boton de pago Paypal</li>
                            <li>Seccion Admin</li>
                            <li>Base de datos con Firebase</li>
                        </ul>
                        </>
                        }
                        {this.state.OnsiteSeo !== false && 
                        <>
                        <p>El Seo On Site son todas las técnicas y/o factores de SEO (Search Engine Optimizacion) que nos ayudan a mejorar los elementos que conforman nuestra página web,
                            que ayuda a los motores de busqueda como Google, entender nuestro contenido y posicionarnos dependiendo de todos estos elementos. Que incluye:</p>
                            <ul>
                                <li>Inclusión del website a Google Search Console.</li>
                                <li>Códigos Meta tales como Descripción, title, keywords optimizados</li>
                                <li>Inclusión de Open Graph y Twitter Card</li>
                                <li>Optimización SCHEMA</li>
                                <li>Investigación Palabras Claves</li>
                                <li>Optimización Imagenes</li>
                                <li>Sitemap</li>
                                <li>Reporte Website</li>
                                <li>Archivos TXT y HTACCESS</li>
                            </ul>
                        </>
                        }
                </main>
            </Layout>
        )
    }
}

export default Cotizar;