import React from 'react'

/**
 * A functional component that renders the application's footer.
 *
 * @return {JSX.Element} The JSX element representing the footer.
 */
const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='p-2 flex justify-between border-t mt-2 dark:border-zinc-800 bg-zinc-300/30 dark:bg-zinc-700/30 fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md'>
    <span>© {currentYear} Allfunding </span>
    <span>Privacy Policy</span>
</div>
  )
}

export default Footer

