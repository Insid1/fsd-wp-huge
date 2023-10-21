/**
 * Mocks i18n
 */
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: async () => await new Promise(() => {}),
      },
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}))
