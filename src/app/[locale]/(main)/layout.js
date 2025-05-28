'use client';
import VisitorLayer from '@/app/VisitorLayer';
import EbitansAnalytics from '@/components/EbitansAnalytics';
import Footer from '@/components/common/Footer';
import MainHeader from '@/components/common/MainHeader';
import LandingHeader from '@/components/ecommerce/LandingHeader';
import { usePathname } from 'next/navigation';

const layout = ({ children, params: { locale } }) => {
  const pathname = usePathname();
  const hideHeaderFooter = pathname?.endsWith('/ecommerce');
  return (
    <>
      <VisitorLayer />
      {hideHeaderFooter ? <LandingHeader /> : <MainHeader locale={locale} />}
      <div className="min-h-screen">{children}</div>
      {!hideHeaderFooter && <Footer locale={locale} />}
      <EbitansAnalytics locale={locale} />
    </>
  );
};
export default layout;
