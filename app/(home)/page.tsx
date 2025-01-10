import Hero from "@/components/common/home/Hero";
import PatientsReview from "@/components/common/home/PatientsReviews";
import Advantages from "@/components/common/home/popularArticles";
import Container from "@/components/common/container";

export default function Home() {
  return (
    <div>
            <Container>

      <Hero />
      <PatientsReview />
        <Advantages />
      </Container>
    </div>
  );
}
