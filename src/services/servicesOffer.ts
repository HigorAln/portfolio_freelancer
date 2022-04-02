import { RiComputerLine } from 'react-icons/ri';
import { BiGitBranch, BiShoppingBag } from 'react-icons/bi';
import { IconType } from 'react-icons';
import { AiFillLayout, AiOutlineAndroid } from 'react-icons/ai';
import { SiTypescript } from 'react-icons/si';

interface IServeicesOffer {
	id: number;
	title: string;
	description: string;
	Icon: IconType;
	active: boolean;
}

export const servicesOfferVariables: IServeicesOffer[] = [
	{
		id: 1,
		title: 'Ladding Page',
		description:
			'Creating amazing landing pages for your company, for your business, or for your personal use.',
		Icon: AiFillLayout,
		active: true,
	},
	{
		id: 2,
		title: 'E-commerce',
		description:
			'Creation of virtual stores for your company, for your business, or for your personal use.',
		Icon: BiShoppingBag,
		active: false,
	},
	{
		id: 3,
		title: 'Mobile Developer',
		description:
			'I am an expert mobile developer. I have experience using Flutter and React Native.',
		active: false,
		Icon: AiOutlineAndroid,
	},
	{
		id: 4,
		title: 'Web Development',
		description:
			'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like ReactJS',
		active: true,
		Icon: RiComputerLine,
	},
	{
		id: 5,
		Icon: BiGitBranch,
		title: 'Version Control',
		description:
			'I can use version control systems well, and Git & Mecurial are my go-to tool.',
		active: true,
	},
	{
		id: 6,
		description:
			'I have core understanding of NPM. I can also develop general purpose applications with NodeJS',
		title: 'NPM and NodeJS',
		active: true,
		Icon: SiTypescript,
	},
];
