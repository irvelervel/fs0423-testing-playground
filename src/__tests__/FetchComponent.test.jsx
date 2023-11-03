// controllare le funzionalità del componente FetchComponent
import { fireEvent, render, screen } from '@testing-library/react'
import FetchComponent from '../components/FetchComponent'

describe('Correct mounting', () => {
  it('creates an empty list initially', () => {
    // 1)
    render(<FetchComponent />)
    // 2)
    const allTheListItems = screen.queryAllByTestId('listgroup-item')
    // cosa mi aspetto sia allTheListItems? un []
    // 4)
    expect(allTheListItems).toHaveLength(0)
  })

  it('populates the list after the fetch with exactly 10 elements', async () => {
    // 1)
    render(<FetchComponent />)
    // 2)
    const allTheListItemsAfterFetch = await screen.findAllByTestId(
      'listgroup-item'
    )
    // 4)
    expect(allTheListItemsAfterFetch).toHaveLength(10)
  })
})

describe('Filter behavior', () => {
  it('returns 1 element if "kurtis" is inputted', async () => {
    // 1)
    render(<FetchComponent />)
    // 2)
    const filterInput = screen.getByPlaceholderText(/cerca per nome/i)
    // 3)
    fireEvent.change(filterInput, { target: { value: 'kurtis' } })
    const filteredUsers = await screen.findAllByTestId('listgroup-item')
    // 4)
    expect(filteredUsers).toHaveLength(1)
  })
})

// le assertion (gli expect) più comuni sono:
// .toBeInTheDocument() <-- verifica che l'elemento sia nella pagina virtuale
// .toBeVisible() <-- verifica che l'elemento sia visibile
// .toBeTruthy() // .not.toBeTruthy
// .toContainHTML('p')
// .toBeUndefined() // .not.toBeUndefined()
// .toHaveLength() // verifica la lunghezza di un array di elementi
