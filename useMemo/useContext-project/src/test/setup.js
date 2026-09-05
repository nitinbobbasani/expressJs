import '@testing-library/jest-dom'
import { jest } from '@jest/globals'

globalThis.fetch = jest.fn().mockResolvedValue({
	ok: true,
	json: () => Promise.resolve({ name: 'Test User', email: 'test@example.com' })
})
