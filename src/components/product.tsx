import { Badge } from '@/components/ui/badge';

import ProdcutImage from '@/assets/t-shirt.png';

const Product = () => {
	return (
		<div>
			<img src={ProdcutImage} alt="Prouct Name" className="bg-secondary p-6 rounded-sm mb-4" />
			<h3 className="font-semibold p-1">Classic Monochrome Tees</h3>

			<div className="flex space-x-6 py-6">
				<Badge variant="outline" className="rounded-xl px-5 py-1.5">
					IN STOCK
				</Badge>
				<p className="text-muted-foreground">$35.00</p>
			</div>
		</div>
	);
};

export default Product;
