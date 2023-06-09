import { useEffect } from 'react';

function useOutsideClick({ ref, onClickOutside }) {
  useEffect(() => {
    /* Alert if clicked on outside of element */

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default useOutsideClick;