import { IoCloseCircleSharp } from "react-icons/io5";
import { useStore } from "../store";

const Modal = ({ children }) => {
  const closeForm = useStore((state) => state.setAllFormsClose);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white  rounded-lg">
        <div className=" flex flex-col justify-center relative">
          <button
            onClick={closeForm}
            className="text-red-600 hover:text-red-800 absolute right-1 top-1 "
          >
            <IoCloseCircleSharp className="size-5" />
          </button>
          <div className="m-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
