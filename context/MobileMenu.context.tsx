import { createStateContext } from 'react-use'

const [useMobileMenuContext, MobileMenuContext] = createStateContext({
  isOpen: false,
})

export { MobileMenuContext, useMobileMenuContext }
