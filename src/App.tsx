import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Features } from './components/Features';

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Experience />
      <Features />
    </main>
  );
}
