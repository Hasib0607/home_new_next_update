import initTranslations from '@/app/i18n';
import Header from './Header'
import TranslationsProvider from '../TranslationProvider';
import LandingHeader from '../ecommerce/LandingHeader';

const MainHeader = async ({ locale }) => {
    const i18nNamespaces = ['home'];
    const { resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <div>
            <TranslationsProvider
                namespaces={i18nNamespaces}
                locale={locale}
                resources={resources}>
                <Header locale={locale} />
                <LandingHeader />
            </TranslationsProvider>
        </div>
    )
}

export default MainHeader