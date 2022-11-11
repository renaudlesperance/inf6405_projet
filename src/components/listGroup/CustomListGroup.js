import React, { useEffect, useState } from 'react';
import styles from './CustomListGroup.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function CustomListGroup({ data, onAdd, onClick, selectedItem, title }) {
  const [entries, setEntries] = useState(data);

  useEffect(() => setEntries(data), [data])


  const handleChange = (evt) => {
    setEntries(data.filter(elt => elt.name.toLowerCase().includes(evt.target.value.toLowerCase())))
  }

  return (
    <ListGroup className={styles.listContainer} >
      <ListGroup.Item className={styles.title}>
        {title}
        <FontAwesomeIcon icon={faSquarePlus} className={styles.icon} onClick={onAdd} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Form.Control placeholder='Filtrer par nom' onChange={handleChange} />
      </ListGroup.Item>
      {entries.map((elt) => (
        <ListGroup.Item action variant="light" active={JSON.stringify(elt) === JSON.stringify(selectedItem)} key={Math.random()} onClick={() => onClick(elt)}>
          {elt.name}
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
