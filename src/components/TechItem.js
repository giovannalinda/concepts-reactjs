import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FiCheck } from 'react-icons/fi'
import '../App.css'
function TechItem({ tech, onDelete }) {
  return(
    <li>
      {tech}
      <button className='check' onClick={onDelete}><FiCheck size={14}/></button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'Oculto'
}

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;