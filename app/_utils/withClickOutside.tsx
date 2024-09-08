import { useEffect, useRef } from "react";

const withClickOutside = (Component: any) => {
  return function WrappedComponent({ open, setOpen, ...props }: any) {
    const ref = useRef(null);

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, setOpen]);

    return <Component ref={ref} open={open} setOpen={setOpen} />;
  };
};

export default withClickOutside;
