import Link from "next/link";
import { ContentContact } from "./styles";
import {BsTwitter} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";



export function Contact(){
  return(
    <ContentContact id="contact">

      <div>
        <h1>Connect with me:</h1>
        <p>Any questions? please contact me</p>

        <span>
          <Link href="https://twitter.com/HigorAllan4">
            <a target={"_blank"}>
              <BsTwitter />
            </a>
          </Link>
          <a>
            <FaDiscord />
          </a>
          <Link
            href="https://www.linkedin.com/in/higor-allan-a9192b219/"
          >
            <a>
              <AiFillLinkedin />
            </a>
          </Link>

          <Link href="https://github.com/HigorAln">
            <a>
					    <GoMarkGithub />
            </a>
				  </Link>
        </span>
      </div>

      <div>
        <span>
          <form>
          <h1>{"Contact me, let’s make magic together"}</h1>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="E-mail" required/>
            <textarea name="" id="" cols={30} rows={10} maxLength={500} placeholder="Message" required />
            <button>Send</button>
          </form>
        </span>
      </div>

    </ContentContact>
  )
}