import React from "react";
import {NavLink, Link} from 'react-router-dom';

export default function Navigation(){
  return (
    <nav>
			<ul className='nav-links'>
				<li key='projects'>
					<NavLink
						to='/'
						className='nav-link'
						activeClassName ='nav-link-active'
					> PROJECTS </NavLink>
				</li>
				<li key='topics'>
					<NavLink
						to='/topics'
						className='nav-link'
						key='topics'
					> TOPICS </NavLink>
				</li>
				<li key='about'>
					<NavLink
						to='/about'
						className='nav-link'
						key='about'
					> ABOUT </NavLink>
				</li>
			</ul>
			
		</nav>
  )
}
