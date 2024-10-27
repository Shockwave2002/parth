import './Style.css'

import nav from '../../data'

import { Link } from 'react-router-dom'

import { FaBars,FaTimes  } from 'react-icons/fa'

import React , { useState } from 'react'

const Navbar = () => {

	const [click, setClick] = useState(false)

	const [color, setcolor] = useState(false)

	const changeColor = () => {
		if(window.scrollY >= 100)
		{
			setcolor(true)
		}
		else
		{
			setcolor(false)
		}
	}

	window.addEventListener('scroll' , changeColor )

	return (
		<div className={ color ? ('header header-bg') : ('header')}>
			<h1>Portfolio</h1>
			<ul className={ click ? ( 'navbar active' ) : ( 'navbar') }>
				 { nav.map((value)=>{
					return <li><Link to={ value.link }>{ value.name }</Link></li>
				})}
			</ul>
			<div className="hamburger" onClick={ () => setClick(!click)}>
				{ click ? (<FaTimes size={20} style={{ color : "#fff"}}/>):(<FaBars size={20}  style={{ color: "#fff" }}/>)}
			</div>
		</div>
	)
}

export default Navbar
