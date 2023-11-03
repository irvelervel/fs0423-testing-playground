// in app andrebbe testata l'esistenza del titolo h1
// via!

import { render, screen } from '@testing-library/react'
import App from '../App'

// normalmente i test vanno inseriti in dei "raccoglitori"
// detti anche "suites"
// creiamo una suite di test con il metodo "describe" di jest, e le diamo il nome di 'Correct mounting'

describe('Correct mounting', () => {
  // qui dentro andranno inseriti tutti i test della suite "Correct mounting"
  // noi vogliamo cominciare con un test che verifichi l'esistenza dell'h1
  it('mounts correctly the heading', () => {
    // qui dentro eseguiamo gli step del test
    // 1) monto App nel virtual DOM
    render(<App />) // non vedremo niente nel browser! succede tutto in memoria (RAM)
    // 2) vado a cercare il titolo tramite il suo contenuto testuale, un po' come lo ricercherebbe un utente
    const heading = screen.getByText(/testing a react app/i) // presupponiamo che venga trovato un elemento corrispondente
    // 3) si salta, perchè non è prevista interazione con questo elemento
    // 4) verifica delle aspettative, ipotesi vs tesi
    expect(heading).toBeInTheDocument() // mi aspetto che l'heading sia stato trovato nel virtual DOM
  })
})
