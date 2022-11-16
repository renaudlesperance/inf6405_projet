import React, { useEffect, useState } from 'react';
import styles from './CustomListGroup.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { faSquarePlus, faSun, faDroplet, faTemperature4, faCloud, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function CustomListGroup({ data, onAdd, onClick, selectedItem, title, withIcons }) {
  const icons = {
    "Luminosité": faSun,
    "Humidité": faTemperature4,
    "pH": faDroplet,
    "CO2": faCloud,
    "caméra": faVideo
  }
  const [entries, setEntries] = useState(data);

  useEffect(() => setEntries(data), [data])


  const handleChange = (evt) => {
    setEntries(data.filter(elt => elt.name.toLowerCase().includes(evt.target.value.toLowerCase())))
  }

  return (
    <ListGroup className={styles.listContainer} id='listContainer' >
      <ListGroup.Item className={styles.title}>
        {title}
        <FontAwesomeIcon icon={faSquarePlus} className={styles.icon} onClick={onAdd} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Form.Control placeholder='Filtrer par nom' onChange={handleChange} />
      </ListGroup.Item>
      {entries.map((elt) => (
        <ListGroup.Item action variant="light" active={JSON.stringify(elt) === JSON.stringify(selectedItem)} key={Math.random()} onClick={() => onClick(elt)}>
          {withIcons ? (
            <div className={styles.listWithIcons}>
              <span>{elt.name}</span>
              <FontAwesomeIcon icon={icons[elt?.type]} />
            </div>
          ) : (
            elt.name
          )}
        </ListGroup.Item>
      ))}
      {entries.length === 0 && (
        <ListGroup.Item>
          Pas de résultats disponibles
        </ListGroup.Item>
      )}
    </ListGroup>
  );
}

CustomListGroup.defaultProps = {
  withIcons: false,
};

CustomListGroup.propTypes = {
  withIcons: PropTypes.bool,
}
