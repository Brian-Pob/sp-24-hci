import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
function App() {
  const [count, setCount] = useState(0);

  return (
			<>
				<div>
					<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" rel='noreferrer'>
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1 className="text-3xl font-bold underline">Vite + React</h1>
				<p className="text-lg">
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p className="text-lg">Count: {count}</p>
				<Button onClick={() => setCount((c) => c + 1)}>Increment Count</Button>

				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Is it styled?</AccordionTrigger>
						<AccordionContent>
							Yes. It comes with default styles that matches the other
							components&apos; aesthetic.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Is it animated?</AccordionTrigger>
						<AccordionContent>
							Yes. It&apos;s animated by default, but you can disable it if you
							prefer.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</>
		);
}

export default App
