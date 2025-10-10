import Image from "next/image"
import Link from "next/link"

const Layout = ({children} : {children:React.ReactNode} ) => {
    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default"> 
                <Link href='/' className="auth-logo">
                    <Image src="/assets/icons/logo.svg" alt="App-logo" width={140} height={32} className="h-8 w-auto" />
                </Link>

                <div className="pb-6 lg:pb-8 flex-1">
                    {children}
                </div>
            </section>

            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-4 lg:mb-16">
                    <blockquote className="auth-blockquote">
                        "Be fearful when others are greedy, and greedy when others are fearful."
                        
                    </blockquote>
                    <div className="flex items-center justify-between">
                        <div>
                            <cite className="auth-testimonial-author">— Warren Buffett</cite>
                            <p className="max-md:text-xs text-gray-500">Chairman and CEO of Berkshire Hathaway</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <Image src="/assets/images/dashboard.png" alt="Dashboard" width={1440} height={1150} className="auth-dashboard-preview absolute top-0"/>
                </div>
            </section>
        </main>
    )
}
export default Layout
