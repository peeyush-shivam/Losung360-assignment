import todoContext from "../context/context";
import { useContext } from "react";

function useContextHook() {
    return useContext(todoContext);
}

export default useContextHook;