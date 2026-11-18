import {useEffect, useRef} from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {PageShell} from '@/src/components/layout/PageShell';
import {HomePage} from '@/src/features/home/HomePage';
import {NotFoundPage} from '@/src/features/placeholders/NotFoundPage';
import {RoutePlaceholderPage} from '@/src/features/placeholders/RoutePlaceholderPage';

function RouteFocusAndScroll() {
  const {pathname} = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const mainElement = document.getElementById('main-content');
    if (mainElement) {
      mainElement.focus({preventScroll: true});
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteFocusAndScroll />
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<RoutePlaceholderPage variant="about" />} />
          <Route path="/solutions" element={<RoutePlaceholderPage variant="solutions" />} />
          <Route path="/products" element={<RoutePlaceholderPage variant="products" />} />
          <Route
            path="/products/:slug"
            element={<RoutePlaceholderPage variant="product-detail" />}
          />
          <Route path="/contact" element={<RoutePlaceholderPage variant="contact" />} />
          <Route
            path="/legal/privacy"
            element={<RoutePlaceholderPage variant="legal-privacy" />}
          />
          <Route
            path="/legal/terms"
            element={<RoutePlaceholderPage variant="legal-terms" />}
          />
          <Route
            path="/legal/cookies"
            element={<RoutePlaceholderPage variant="legal-cookies" />}
          />
          <Route path="/admin" element={<RoutePlaceholderPage variant="admin" />} />
          <Route path="/admin/*" element={<RoutePlaceholderPage variant="admin" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}
