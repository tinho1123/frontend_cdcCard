import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import App from '../App'
import userEvent from '@testing-library/user-event'


describe('App component', () => {
it('verifica se existe o componente FilterEmployee', async () => {
    await render(<App />)
    const header = screen.getByTestId('filterEmployeeContainer')
    expect(header).toBeInTheDocument()
})
})