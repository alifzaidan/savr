import Faq from '@/components/layout/Faq';
import Feature from '@/components/layout/Feature';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/layout/Hero';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
    return (
        <>
            <div className="relative bg-primary-foreground rounded-b-3xl z-10">
                <Navbar />
                <Hero children={['praktis', 'terorganisir', 'terstruktur', 'terjamin']} />
                <Feature />
                <Faq />
            </div>
            <Footer />
        </>
    );
}
