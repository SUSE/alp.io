import create from 'zustand'

type State = {
  theme: 'light' | 'dark'
  updateTheme: (theme: 'light' | 'dark') => void
}

export const useStore = create<State>((set) => ({
  theme: 'light',
  updateTheme: (updateValue: 'light' | 'dark') => set(() => ({ theme: updateValue })),
}))

export default useStore
