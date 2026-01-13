declare namespace JSX {
  interface IntrinsicElements {
    'lord-icon': {
      src: string
      trigger?: 'hover' | 'loop' | 'click' | 'loop-on-hover' | 'morph' | 'morph-two-way'
      delay?: string | number
      colors?: string
      style?: React.CSSProperties
      className?: string
    }
  }
}
