import { Button } from '@invertax/ui-components';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to InverTax</h1>
        <p className="text-lg mb-8">Your investment tax calculation platform</p>
        <div className="space-x-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </main>
  );
}
