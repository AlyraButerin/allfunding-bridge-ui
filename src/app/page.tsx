import SwapTokenCard from "@/components/ui/swap-token-card";
import SwapTokenStatus from "@/components/ui/swap-token-status";


export default function Home() {

	return (
		<div className="flex h-screen flex-col items-center md:justify-center md:-mt-16" style={{ height: `calc(100vh - 55px)`}}>
			<div className="max-w-[360px] sm:min-w-[500px] sm:max-w-[500px] md:min-w-[600px] md:max-w-[600px]">
								
				<SwapTokenCard />
				
				<div className="mt-2">
					<SwapTokenStatus />
				</div>
			</div>
		</div>
	)
}
