import Script from 'next/script';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Header />
      <Script data-domain="berounsobe.eu" src="https://www.google-analytics.com/analytics.js" />
      <main>{children}</main>
    </div>
  );
};