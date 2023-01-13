import React, { useEffect } from 'react'
import './Cursos.scss'
import arrowup from '../images/arrowup.png';
import { TiInputChecked } from "react-icons/ti";
import Aos from 'aos';
import { HashLink } from 'react-router-hash-link';


const Cursos = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (
        <div>
            <h1 id='cursos' className='title-soporte'>Cursos presenciales</h1>
            <h3 className='subtitle-soporte'>Información sobre cursos</h3>

            <ul>
                <li className='cursos-tit'><TiInputChecked /> OPERACIÓN PROFESIONAL DE PC</li>
                <p className='cursos-detalle'>La gestión y control de las actividades de una empresa u organización sería hoy impensable sin el manejo de las herramientas ofimáticas que la tecnología ha puesto a nuestra disposición. Ud. ya conoce la importancia de la formación continua para mantenerse actualizado en este mundo interconectado.</p>
                <p className='cursos-detalle'>Este curso está orientado al total manejo de las herramientas necesarias para operar una PC en una empresa u oficina, aplicando ejercitación y prácticas de simulación que harían un curso sumamente didáctico y llevadero.</p>
                <p className='cursos-detalle'>Los contenidos son: Manejo de Windows. Uso elemental de los principales programas de office: Word, Internet, Excel, Acces, Power Point, Outlook, Mantenimiento y puesta a punto.</p>

                <li className='cursos-tit'><TiInputChecked /> MASTER EN PC</li>
                <p className='cursos-detalle'>Excel y Access, desarrollando programas y macros de aplicación. Durante este curso se aplican conocimientos avanzados de Windows.</p>

                <li className='cursos-tit'><TiInputChecked /> INFORMÁTICA PARA JÓVENES MAYORES</li>
                <p className='cursos-detalle'>Curso orientado a aquellos adultos que nunca hayan tenido contacto con las computadores y que ahora les interesa meterse en este maravilloso mundo. Aprender n Internet, a trabajar con textos y fotografías orientándolos a las necesidades de cada uno.</p>

                <li className='cursos-tit'><TiInputChecked /> COMPUTACIÓN PARA NIÑOS</li>
                <p className='cursos-detalle'>Nos especializamos en capacitar a niños desde los 6 años, aplicando métodos de enseñanza pedagógicos en donde mediante la utilización de distintos software no solo aprender n el uso de un ordenador sino también disfrutaran de un montón de herramientas que les ayudaran en su vida escolar.</p>

                <li className='cursos-tit'><TiInputChecked /> DISEÑO GRÁFICO</li>
                <p className='cursos-detalle'>Page Maker, Corel Draw, Photoshop, Illustrator.</p>

                <li className='cursos-tit'><TiInputChecked /> AUTOCAD</li>
                <p className='cursos-detalle'>Diseño de planos en 2D y 3D, principales herramientas de Dibujo, como dibujar en CAD, impresión de Planos, Trabajo en Capas, Block, etc.</p>

                <li className='cursos-tit'><TiInputChecked /> GESTIÓN CONTABLE TANGO</li>
                <p className='cursos-detalle'>Todos los conocimientos necesarios para la administración contable, Libro de Iva diarios, bancos, impuestos etc. Utilizando el programa de gestión Tango.</p>

                <li className='cursos-tit'><TiInputChecked /> REPARACIÓN Y ARMADO DE PC</li>
                <p className='cursos-detalle'>Diagnostico de fallas, Conceptos de HARDWARE, Simulación de Fallas, Armado y ensamblado de PC, uso de Tester, Software de reparación.</p>

                <li className='cursos-tit'><TiInputChecked /> ANALISTA PROGRAMADOR</li>
                <p className='cursos-detalle'>Desarrollo de sistemas de computación, análisis, codificación utilizando lenguaje Visual Basic.</p>
            </ul>

           
            <HashLink to={'/cursosPresenciales#'}>
                <img className='img-arrow' src={arrowup} alt='arrowup'></img>
            </HashLink>


        </div>
    )
}

export default Cursos