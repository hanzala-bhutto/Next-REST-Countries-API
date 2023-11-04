import {Navbar} from '@/components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen bg-darkGrayLight  dark:bg-veryDarkBlueDark relative flex z-0">
        <Navbar />
        <section className='w-full mt-5.5c pt-6 px-5 sm:px-20'>
          {children}
        </section>
    </main>    
  );
}
