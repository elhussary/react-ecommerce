import { LoginForm } from '@/components/login-form';

const Login = () => {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-md">
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
