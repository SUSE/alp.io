import create from 'zustand'

type State = {
  theme: 'light' | 'dark'
  updateTheme: (theme: 'light' | 'dark') => void
}

export const useStore = create<State>((set) => ({
  theme: 'dark',
  updateTheme: (updateValue: State[keyof State]) => set(() => ({ theme: updateValue })),
}))

export default useStore
