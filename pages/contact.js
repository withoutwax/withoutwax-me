import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function Contact() {
  return (
    <Container>
      <NextSeo
        title="Contact – Will Kim"
        canonical="https://withoutwax.me/contact"
        openGraph={{
          url: 'https://withoutwax.me/contact',
          title: 'Contact – Will Kim'
        }}
      />
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Contact 📬
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400 flex flex-col justify-center">
          <h3 className="text-center font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            If you wish to contact me, please do so with the email below:
          </h3>

          <a className="mailto text-center" href="mailto:me@withoutwax.me">
            me@withoutwax.me
          </a>

          <p className="text-center">I will be able to reach you within 1 to 3 business days at maximum.</p>
          <p className="text-center">If I do not reach you within those days, please do not be offended, I am either in a situation where I cannot check my mail system and will reply to you ASAP as I get connected.</p>
        </div>

      </div>
    </Container>
  );
}
