import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ContentModalHeader } from "./styles";


interface IModalHeader {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function ModalHeader({isOpen, setIsOpen}: IModalHeader){

  if(isOpen){
    return(
      <ContentModalHeader>
      <h2>Web Developer</h2>

      <button className="close_button" onClick={() => setIsOpen(false)}>
        <AiOutlineClose />
      </button>

      <div onClick={()=> setIsOpen(false)}>
				<a href="#home">Home</a>
        <span></span>
				<a href="#skills">Skils</a>
        <span></span>
				<a href="#project">Projects</a>
        <span></span>
				<a href="#contact">Contact</a>
			</div>

      </ContentModalHeader>
    )
  }else{
    return null
  }
}