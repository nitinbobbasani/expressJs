import { fireEvent, render, screen } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { expect, test } from '@jest/globals'
import App from './App'
import socialReducer from './store/slice/SocialSlice'

function renderApp() {
  const store = configureStore({
    reducer: { Social: socialReducer }
  })

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  return store
}

test('toggles the theme from light to dark', () => {
  renderApp()

  const container = document.querySelector('.container')
  expect(container.style.backgroundColor).toBe('pink')

  fireEvent.click(screen.getByRole('button', { name: 'Change Theme' }))

  expect(container.style.backgroundColor).toBe('beige')
})

test('adds a book to the Redux store', () => {
  const store = renderApp()

  fireEvent.click(screen.getByRole('button', { name: 'Add Book to the Slice' }))

  expect(store.getState().Social.books).toContain('New Social Book 2')
})
