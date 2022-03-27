import { MainContainerHeader } from './styles';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
	return (
		<MainContainerHeader>
			<h1>HA</h1>

			<div>
				<a href="#home">Home</a>
				<a href="#skills">Skils</a>
				<a href="#project">Projects</a>
				<a href="#contact">Contact</a>
			</div>

			<span>
				<Link href="https://github.com/HigorAln" passHref>
					<GoMarkGithub />
				</Link>
				<Link
					href="https://www.linkedin.com/in/higor-allan-a9192b219/"
					passHref
				>
					<AiFillLinkedin />
				</Link>
			</span>
		</MainContainerHeader>
	);
}
