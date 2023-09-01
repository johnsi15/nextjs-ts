type PlausibleEvents = 'add_fox' | 'remove_fox'

interface Options {
  callback?: () => void
  props: Record<string, string | number | undefined>
}

interface Window {
  plausible: (event: PlausibleEvents, options?: Options) => void
}
