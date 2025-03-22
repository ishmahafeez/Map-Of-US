
import * as React from "react"

const MIN_TABLET_WIDTH = 768;
const MAX_TABLET_WIDTH = 1024;

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MAX_TABLET_WIDTH - 1}px)`)
    const onChange = () => {
      setIsTablet(window.innerWidth >= MIN_TABLET_WIDTH && window.innerWidth < MAX_TABLET_WIDTH)
    }
    mql.addEventListener("change", onChange)
    setIsTablet(window.innerWidth >= MIN_TABLET_WIDTH && window.innerWidth < MAX_TABLET_WIDTH)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isTablet
}
