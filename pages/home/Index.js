import Navbar from "../../components/navbar/Navbar";
import SearchBlock from "./SearchBlock";
import FeaturedCollections from "./FeaturedCollections";
import ExclusiveCollection from "./ExclusiveCollection";
import Footer from "../../components/Footer";

export default function Index() {
  return (
    <div>
      <Navbar />
      <SearchBlock />
      <FeaturedCollections />
      <ExclusiveCollection />
      <Footer />
    </div>
  )
}
