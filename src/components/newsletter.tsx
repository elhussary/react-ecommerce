import { Button } from './ui/button';
import { Input } from './ui/input';

const Newsletter = () => {
	return (
		<section className="container py-16">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
				<div className="space-y-3">
					<h2 className="text-2xl font-semibold">Join Our Newsletter</h2>
					<p className="text-muted-foreground">We love to surprise our subscribers with occasional gifts.</p>
				</div>

				<div>
					<form className="flex flex-col md:flex-row gap-4">
						<Input type="email" placeholder="Your email address" className="w-full md:w-80" />
						<Button>Subscribe ❤️</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
