import { useCallback, useState } from "react";

function useToggle(defaultValue) {
  // Initialize the state
  const [value, setValue] = useState(defaultValue);

  // This function change the boolean value to it's opposite value
  const toggleHandler = useCallback(
    () =>
      setValue((currentValue) =>
        typeof value === "boolean" ? value : !currentValue
      ),
    []
  );

  return [value, toggleHandler];
}

export default useToggle;
