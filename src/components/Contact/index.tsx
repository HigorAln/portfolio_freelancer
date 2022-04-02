import Link from 'next/link';
import { ContentContact } from './styles';
import { BsTwitter } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { Fade } from '../../utils/Animate/Fade';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

const sendMessageSchema = yup.object().shape({
	email: yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
	message: yup
		.string()
		.required('Mensagem obrigatoria')
		.min(25, 'Mensagem muito curta'),
	name: yup.string().required('Nome obrigatorio').min(10, 'Nome muito curto'),
});

export function Contact() {
	const [copy, setCopy] = useState(false);
	const [submited, setSubmited] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm({
		resolver: yupResolver(sendMessageSchema),
	});

	const handleSendMessage = async (data: any) => {
		console.log(data);

		try {
			const response = await axios.post('/api/createMessage', data);
			setSubmited(true);
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<ContentContact id="contact">
			<Fade>
				<div>
					<h1>Connect with me:</h1>
					<p>Any questions? please contact me</p>

					<span>
						<Link href="https://twitter.com/HigorAllan4">
							<a target={'_blank'}>
								<BsTwitter />
							</a>
						</Link>
						<button
							data-tip={!copy ? 'Click for copy my code' : 'Copiado!'}
							onClick={() => {
								navigator.clipboard.writeText('iHigorAllan#8479');
								setCopy(true);
							}}
						>
							<FaDiscord />
						</button>
						<Link href="https://www.linkedin.com/in/higor-allan-a9192b219/">
							<a target={'_blank'}>
								<AiFillLinkedin />
							</a>
						</Link>

						<Link href="https://github.com/HigorAln">
							<a target={'_blank'}>
								<GoMarkGithub />
							</a>
						</Link>
					</span>
				</div>
			</Fade>

			<Fade>
				<div>
					<span>
						{!submited ? (
							<form onSubmit={handleSubmit(handleSendMessage)}>
								<h1>{'Contact me, let’s make magic together'}</h1>
								<input type="text" placeholder="Name" {...register('name')} />
								{errors.name && <p>{errors.name.message}</p>}
								<input
									type="email"
									placeholder="E-mail"
									{...register('email')}
								/>
								{errors.email && <p>{errors.email.message}</p>}
								<textarea
									cols={30}
									rows={10}
									maxLength={500}
									placeholder="Message"
									{...register('message')}
								/>
								{errors.message && <p>{errors.message.message}</p>}
								<button disabled={isSubmitting} type="submit">
									{isSubmitting ? 'Enviando...' : 'Send'}
								</button>
							</form>
						) : (
							<div>
								<h1>Thank you for your message!</h1>
							</div>
						)}
					</span>
				</div>
			</Fade>
			<ReactTooltip place="bottom" />
		</ContentContact>
	);
}
