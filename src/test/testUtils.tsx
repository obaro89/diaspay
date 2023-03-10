/* eslint-disable import/no-extraneous-dependencies */
import type { Route } from '@tanstack/react-location'
import {
	createMemoryHistory,
	ReactLocation,
	Router
} from '@tanstack/react-location'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import type { PropsWithChildren, ReactElement } from 'react'

export interface TestSetupOptions {
	router?: {
		initialRoute?: string
		routes?: Route[]
	}
	auth?: {
		isAuthenticated?: boolean
	}
}

export default function setup(
	ui: ReactElement,
	options?: TestSetupOptions
): { user: UserEvent; location: ReactLocation } {
	const user = userEvent.setup()
	const history = createMemoryHistory()
	if (options?.router?.initialRoute) {
		history.push(options.router.initialRoute)
	}
	const location = new ReactLocation({ history })

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				cacheTime: 0
			}
		}
	})

	render(ui, {
		wrapper: ({ children }: PropsWithChildren): ReactElement => (
			<QueryClientProvider client={queryClient}>
				<Router location={location} routes={options?.router?.routes ?? []}>
					{children}
				</Router>
			</QueryClientProvider>
		)
	})
	return {
		user,
		location
	}
}
