import MainHeader from "@/components/common/MainHeader"

const layout = ({ children, params: { locale } }) => {
    return (
        <>
            <MainHeader locale={locale} />
            <div className="min-h-screen">{children}</div>
        </>
    )
}
//asdsd
export default layout