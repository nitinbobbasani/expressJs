import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test, jest } from '@jest/globals'
import ChildC from './ChildC'
import { ThemeContext } from '../context/context'

function renderChild(theme) {
  const setTheme = jest.fn()

  render(
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildC />
    </ThemeContext.Provider>
  )

  return setTheme
}

test('changes a light theme to dark', () => {
  const setTheme = renderChild('light')

  fireEvent.click(screen.getByRole('button', { name: 'Change Theme' }))

  expect(setTheme).toHaveBeenCalledWith('dark')
})

test('changes a dark theme to light', () => {
  const setTheme = renderChild('dark')

  fireEvent.click(screen.getByRole('button', { name: 'Change Theme' }))

  expect(setTheme).toHaveBeenCalledWith('light')
})
