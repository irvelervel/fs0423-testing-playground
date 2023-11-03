import { render, screen, fireEvent } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// ora testiamo HiddenSection

// getBy -> trova un elemento, oppure lancia un errore (lancia l'errore anche nel caso ci siano MULTIPLI elementi)
// queryBy -> trova un elemento oppure se non lo trova torna null (ma non esplode)
//            viene usato soprattutto per testare l'ASSENZA di un elemento

// categoria di test
describe('Correct mounting', () => {
  // qui dentro inseriamo i singoli test
  it('mounts correctly the button', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra contenuto/i) // regexp che ignora le maiuscole/minuscole
    // 4)
    expect(button).toBeInTheDocument()
  })

  it('hides the image by default', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const image = screen.queryByRole('img')
    // non deve esserci!
    // 4)
    expect(image).not.toBeInTheDocument()
  })

  it('checks that card title element is not there by default', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const cardTitle = screen.queryByText(/card title/i)
    // non deve esserci!
    expect(cardTitle).not.toBeInTheDocument()
  })
})

describe('Correct button behavior', () => {
  it('makes the image appear when button is clicked', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra contenuto/i)
    // 3) dobbiamo cliccare il button
    fireEvent.click(button) // abbiamo cliccato il bottone!
    // 4)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  it('hides again the image if the button is clicked twice', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra contenuto/i)
    // 3) dobbiamo cliccare il button, due volte!
    // fireEvent.click(button) // abbiamo cliccato il bottone!
    // fireEvent.click(button) // abbiamo cliccato il bottone!
    fireEvent.dblClick(button)
    // 4)
    const image = screen.queryByRole('img')
    expect(image).not.toBeInTheDocument()
  })
})
