import i18n from 'i18next'
import { defaultNS, resources } from './localization'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources,
	defaultNS,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false
	},
	react: {
		useSuspense: false
	}
})

export { default } from 'i18next'
