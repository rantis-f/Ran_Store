import getBanner from "@/actions/get-banner";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";

export const revalidate = 0

const HomePage = async () => {
    const banner = await getBanner('69a4eb65-0f6f-448f-b93a-043dc4b54f1e')

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Banner data={banner} />
            </div>
        </Container>
    );
}
 
export default HomePage;