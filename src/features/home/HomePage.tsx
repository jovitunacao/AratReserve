import {HOMEPAGE_CONTENT} from '@/src/data/defaults';
import {AdvantagesSection} from '@/src/features/home/AdvantagesSection';
import {CompanyIntroSection} from '@/src/features/home/CompanyIntroSection';
import {CtaSection} from '@/src/features/home/CtaSection';
import {FeaturedProductSection} from '@/src/features/home/FeaturedProductSection';
import {HeroSection} from '@/src/features/home/HeroSection';
import {IndustriesSection} from '@/src/features/home/IndustriesSection';

export function HomePage() {
  return (
    <>
      <HeroSection content={HOMEPAGE_CONTENT.hero} />
      <CompanyIntroSection content={HOMEPAGE_CONTENT.introduction} />
      <FeaturedProductSection product={HOMEPAGE_CONTENT.featuredProduct} />
      <IndustriesSection content={HOMEPAGE_CONTENT.industries} />
      <AdvantagesSection content={HOMEPAGE_CONTENT.advantages} />
      <CtaSection content={HOMEPAGE_CONTENT.cta} />
    </>
  );
}
