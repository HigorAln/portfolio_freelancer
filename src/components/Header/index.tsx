import { MainContainerHeader } from './styles';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiMenuAlt4 } from 'react-icons/hi'
import { Dispatch, SetStateAction, useState } from 'react';
import { ModalHeader } from './ModalHeader';

interface IHeader {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export function Header({setIsOpen, isOpen}: IHeader) {
	return (
		<MainContainerHeader>
			{/* <h1>HA</h1> */}
      <nav>
        <img src="/1.png" alt=""/>
      </nav>

			<div>
				<a href="#home">Home</a>
				<a href="#skills">Skils</a>
				<a href="#project">Projects</a>
				<a href="#contact">Contact</a>
			</div>

			<span>
				<Link href="https://github.com/HigorAln" passHref>
          <a target={"_blank"}>
					  <GoMarkGithub />
          </a>
				</Link>
				<Link
					href="https://www.linkedin.com/in/higor-allan-a9192b219/"
					passHref
				>
          <a target={"_blank"}>
					  <AiFillLinkedin />
          </a>
				</Link>

        <button>
          {!isOpen ? <HiMenuAlt4 onClick={()=> setIsOpen(true)}/> : <AiOutlineClose onClick={()=> setIsOpen(false)}/>}
        </button>
			</span>

		</MainContainerHeader>
	);
}
